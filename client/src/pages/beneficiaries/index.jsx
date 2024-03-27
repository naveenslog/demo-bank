import React, { useEffect, useState } from "react";
import BeneficiariesCards from "./cards";
import TitleWrapper from "../../components/shared/title-wrapper";
import AddBeneficiaryForm from "./add-beneficiary-form";
import { authorizedGet, authorizedPost } from "../../helpers/api/base";
import {
  showFailureToastMessage,
  showSuccessToastMessage,
} from "../../helpers/others";

// const data = [
//   { account: "10890909", nickname: "Sumit Saurav" },
//   { account: "23456788", nickname: "Ravi Kumar" },
//   { account: "90738233", nickname: "Michael Jhonson" },
// ];

const Beneficiaries = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [beneficiaries, setBeneficiaries] = useState([]);

  const [verified, setVerified] = useState(false);
  const [name, setName] = useState("");
  const [formData, setFormData] = useState({
    account: "",
    cnfAccount: "",
    nickname: "",
  });

  const handleAccountVerification = async () => {
    setName("");
    if (formData?.account.length === 0) {
      showFailureToastMessage("Please Enter Account Number!");
      return;
    } else if (formData?.account !== formData?.cnfAccount) {
      showFailureToastMessage(
        "Account No and Confirm Account Number Doesn't match !"
      );
      return;
    }

    try {
      const response = await authorizedGet("/accounts/verify/", {
        account: formData?.account,
      });
      const data = await response.data;
      setVerified(data.exists);
      if (data.exists) {
        setName(data?.username);
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      showFailureToastMessage("Account Not Found!");
      setName("");
    }
  };

  const handleAddBeneficiary = async (event) => {
    event.preventDefault();
    try {
      const response = await authorizedPost("/beneficiaries/", {
        account: formData?.account,
        nickname: formData?.nickname,
      });
      if (response.status === 201) {
        setOpen(false);
        showSuccessToastMessage("Added Successfully! ", true, 1000);
        setFormData({
          account: "",
          cnfAccount: "",
          nickname: "",
        });
        setName("");
        fetchBeneficiaries();
      } else if (response.status === 401) {
        showFailureToastMessage("Unauthorized to perform action !");
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      showFailureToastMessage(error?.response?.data?.error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const fetchBeneficiaries = async () => {
    try {
      setLoading(true);
      const response = await authorizedGet("/beneficiaries/");
      setBeneficiaries(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Beneficiaries:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBeneficiaries();
  }, []);

  return (
    <>
      <TitleWrapper title={"Beneficiaries"} />
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <div className="container" style={{ padding: 16 }}>
            <div className="row" style={{ justifyContent: "flex-end" }}>
              <button
                className="btn btn-primary mb-3"
                style={{ width: 200, marginRight: 37 }}
                onClick={() => setOpen(true)}
              >
                Add New Beneficiaries
              </button>
            </div>
            <BeneficiariesCards data={beneficiaries} />
          </div>
          <AddBeneficiaryForm
            open={open}
            setOpen={setOpen}
            name={name}
            formData={formData}
            verified={verified}
            handleAccountVerification={handleAccountVerification}
            handleInputChange={handleInputChange}
            handleAddBeneficiary={handleAddBeneficiary}
          />
        </>
      )}
    </>
  );
};

export default Beneficiaries;
