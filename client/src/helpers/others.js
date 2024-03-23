import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export const showSuccessToastMessage = (message, progress = true) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: progress,
  });
};

export const showFailureToastMessage = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
  });
};
