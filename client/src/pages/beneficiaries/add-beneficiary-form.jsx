import React from "react";
// import { authorizedGet, authorizedPost } from "../../helpers/api/base";
import "./styles.css";
// import {
//   showFailureToastMessage,
//   showSuccessToastMessage,
// } from "../../helpers/others";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBeneficiaryForm = ({
  open,
  setOpen,
  formData,
  name,
  handleAccountVerification,
  handleAddBeneficiary,
  handleInputChange,
  verified,
}) => {
  
  // const [name, setName] = useState("");
  // const [formData, setFormData] = useState({
  //   account: "",
  //   cnfAccount: "",
  //   nickname: "",
  // });

  // const handleAccountVerification = async () => {
  //   setName("");
  //   if (formData?.account.length === 0) {
  //     showFailureToastMessage("Please Enter Account Number!");
  //     return;
  //   } else if (formData?.account !== formData?.cnfAccount) {
  //     showFailureToastMessage(
  //       "Account No and Confirm Account Number Doesn't match !"
  //     );
  //     return;
  //   }

  //   try {
  //     const response = await authorizedGet("/accounts/verify/", {
  //       account: formData?.account,
  //     });
  //     const data = await response.data;
  //     setVerified(data.exists);
  //     if (data.exists) {
  //       setName(data?.username);
  //     } else {
  //       throw new Error("Unexpected response status");
  //     }
  //   } catch (error) {
  //     showFailureToastMessage("Account Not Found!");
  //     setName("");
  //   }
  // };

  // const handleAddBeneficiary = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await authorizedPost("/beneficiaries/", {
  //       account: formData?.account,
  //       nickname: formData?.nickname,
  //     });
  //     if (response.status === 201) {
  //       // setTimeout(() => {
  //       setOpen(false);
  //       // }, 1300);
  //       showSuccessToastMessage("Added Successfully! ", true, 1000);
  //       setFormData({
  //         account: "",
  //         cnfAccount: "",
  //         nickname: "",
  //       });
  //     } else if (response.status === 401) {
  //       showFailureToastMessage("Unauthorized to perform action !");
  //     } else {
  //       throw new Error("Unexpected response status");
  //     }
  //   } catch (error) {
  //     showFailureToastMessage(error?.response?.data?.error);
  //   }
  // };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  return (
    <dialog open={open} className="beneficiary-dialog">
      <div className="add-beneficiary">
        <div className="close-btn" onClick={() => setOpen(false)}>
          <svg
            version="1.1"
            height={20}
            width={20}
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1"
              y1="11"
              x2="11"
              y2="1"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="1"
              y1="1"
              x2="11"
              y2="11"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </div>
        <h1>Add New Beneficiary</h1>
        {/* <form className="login-form" onSubmit={handleAddBeneficiary}> */}
        <div className="input-group">
          <label htmlFor="account">Account No</label>
          <input
            type="number"
            id="account"
            max={9999}
            name="account"
            value={formData?.account}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="account">Confirm Account No</label>
          <input
            type="number"
            max={9999}
            id="cnfAccount"
            name="cnfAccount"
            value={formData?.cnfAccount}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="verified">
          <div className="username" onClick={handleAccountVerification}>
            {name}
          </div>
          <div className="verify" onClick={handleAccountVerification}>
            Verify
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="account">Nickname</label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            value={formData?.nickname}
            onChange={handleInputChange}
            required
          />
        </div>
        {verified && (
          <button
            type="submit"
            className="login-button"
            onClick={(e) => handleAddBeneficiary(e)}
          >
            Add
          </button>
        )}
        {/* </form> */}
      </div>
      <ToastContainer />
    </dialog>
  );
};

export default AddBeneficiaryForm;
