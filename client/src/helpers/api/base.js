import axios from "axios";
import moment from "moment-timezone";
// import { BACKEND_HOST } from "../constants";
import { downloadURI } from "../others";

export const host = "http://localhost:8000/api/v1";

export function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === `${name}=`) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

export function buildHeaders(authorize = false, extraHeaders = {}) {
  let headers = {
    Pragma: "no-cache",
    "Cache-Control": "no-cache",
    "Client-Timezone-Name": moment.tz.guess(),
  };
  if (authorize) {
    const token = localStorage.getItem("access");
    headers = { ...headers, Authorization: `Bearer ${token}` };
  }

  return { ...headers, ...extraHeaders };
}

export function get(uri, params = {}, options) {
  const opt = { method: "GET", params, headers: buildHeaders() };
  return axios
    .get(`${host}${uri}`, { ...opt, ...options })
    .then((response) => response.data);
}

export function post(uri, body = {}) {
  const options = {
    headers: buildHeaders(false, { "X-CSRFToken": getCookie("csrftoken") }),
  };
  return axios
    .post(`${host}${uri}`, body, options)
    .then((response) => response);
}

export function authorizedGet(uri, params = {}) {
  const opt = {
    params,
    headers: buildHeaders(true),
  };
  return axios.get(`${host}${uri}`, opt).then((response) => response);
}

export function authorizedPost(uri, body = {}, params) {
  const options = {
    params,
    headers: buildHeaders(true, { "X-CSRFToken": getCookie("csrftoken") }),
  };

  return axios
    .post(`${host}${uri}`, body, options)
    .then((response) => response);
}

export function authorizedDelete(uri, params) {
  const options = {
    params,
    headers: buildHeaders(true, { "X-CSRFToken": getCookie("csrftoken") }),
  };
  return axios.delete(`${host}${uri}`, options).then((response) => response);
}

export function authorizedPatch(uri, params, body = {}) {
  const options = {
    params,
    headers: buildHeaders(true, { "X-CSRFToken": getCookie("csrftoken") }),
  };
  return axios
    .patch(`${host}${uri}`, body, options)
    .then((response) => response.data);
}

export function authorizedPostUpload(uri, body = {}, params) {
  const options = {
    params,
    headers: buildHeaders(true, {
      "content-type": "multipart/form-data",
      "X-CSRFToken": getCookie("csrftoken"),
    }),
  };
  return axios
    .post(`${host}${uri}`, body, options)
    .then((response) => response.data);
}

export function authorizedPatchUpload(uri, body = {}, params) {
  const options = {
    params,
    headers: buildHeaders(true, {
      "content-type": "multipart/form-data",
      "X-CSRFToken": getCookie("csrftoken"),
    }),
  };
  return axios
    .patch(`${host}${uri}`, body, options)
    .then((response) => response.data);
}

export function authorizedFileDownload(uri, fileType, fileName) {
  const opt = {
    headers: buildHeaders(true),
  };

  if (!fileType) {
    fileType = {
      type: "text/csv,charset=UTF-8",
    };
  }

  return axios.get(`${host}${uri}`, { ...opt }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data], fileType));

    if (!fileName) {
      fileName = "export";
    }
    downloadURI(url, fileName);
  });
}
