import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bg1 from "../../assets/photos/stadium.jpg";
import {
  SendOtp,
  userRegistration,
  VerifyOtp,
} from "../../Controllers/Auth/AuthController";
import { Loading1 } from "../../Componentes/Loading1";

export default function OtpVerify({ goBack, formData }) {
  const [otp, setOtp] = useState("");
  const [otpVerifying, setOtpVerifying] = useState(false);
  const [otpSending, setOtpSending] = useState(false);

  const handleVerifyOtp = async () => {
    setOtpVerifying(true);
    if (otp.length !== 4) {
      toast("Invalid OTP");
      setOtpVerifying(false);
      return;
    }
    try {
      const response = await VerifyOtp({
        email: formData.email,
        otp: otp,
      });
      if (response.status === true) {
        formData.token = response.token;
        const regsiterResponse = await userRegistration(formData);
        if (regsiterResponse.status === true) {
          setOtpVerifying(false);
          toast.success("Registration Success!", {
            position: "top-center",
          });
          setTimeout(function () {
            window.location.href = "/login";
          }, 1500);
        } else {
          toast.error("Something went wrong !", {
            position: "top-center",
          });
          setOtpVerifying(false);
        }
      } else {
        toast.error("Incorrect OTP !", {
          position: "top-center",
        });
        setOtpVerifying(false);
      }
    } catch (error) {
      if (error.response.status === 400) {
        toast.error("Incorrect OTP !", {
          position: "top-center",
        });
        setOtpVerifying(false);
        return;
      } else {
        toast.error("Something went wrong !", {
          position: "top-center",
        });
        setOtpVerifying(false);
      }
    }
  };

  const resendOtp = async () => {
    setOtpSending(true);
    try {
      const response = await SendOtp(formData);
      if (response.status) {
        toast.success("OTP Sent Successfully!", {
          position: "top-center",
        });
        setOtpSending(false);
      } else {
        toast.error("Something went wrong !", {
          position: "top-center",
        });
        setOtpSending(false);
      }
    } catch (error) {
      toast.error("Something went wrong !", {
        position: "top-center",
      });
      setOtpSending(false);
    }
  };

  return (
    <div
      className="   bg-fixed  bg-no-repeat bg-cover py-6 flex flex-col justify-center sm:py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg1})`,
      }}
    >
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-10">
          <div className="mb-4 text-center">
            <h1 className="text-2xl font-semibold ">Enter OTP</h1>
            <p className="text-sm mt-2 text-center">
              OTP sent at {formData.email}
            </p>
          </div>
          <div className="flex justify-center items-center flex-col m-auto">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                border: "2px solid black",
                borderRadius: "10px",
                width: "40px",
                height: "40px",
              }}
            />
            <div className="relative mt-10">
              <div className="flex gap-4">
                <button
                  className="bg-cyan-500 hover:shadow-lg font-semibold text-white rounded-md px-6 py-2"
                  onClick={resendOtp}
                >
                  {otpSending ? <Loading1 width={30} /> : "RESEND OTP"}
                </button>
                <button
                  className="bg-cyan-500 hover:shadow-lg font-semibold text-white rounded-md px-6 py-2"
                  onClick={handleVerifyOtp}
                >
                  {otpVerifying ? <Loading1 width={30} /> : "VERIFY"}
                </button>
              </div>

              <div className="text-center mt-4 font-semibold  underline cursor-pointer">
                <div onClick={goBack}>Go Back </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
