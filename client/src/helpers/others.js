import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment-timezone";

export function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export const showSuccessToastMessage = (
  message,
  progress = true,
  autoClose = 5000
) => {
  toast.success(message, {
    position: "top-right",
    autoClose: autoClose,
    hideProgressBar: progress,
  });
};

export const showFailureToastMessage = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
  });
};

export const formatDate = (dateString) => {
  // Parse the date string using moment-timezone
  const formattedDate = moment(dateString).format("DD-MM-YYYY");
  return formattedDate;
};
