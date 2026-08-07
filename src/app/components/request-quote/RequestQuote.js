"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import style from "./RequestQuote.module.css";
import Image from "next/image";
import { validateEnquiryForm, sanitizePhoneInput } from "@/lib/validation";
import apiClient from "@/lib/apiClient";

export default function RequestQuote({popupEnquiry,setpopup}) {
  const router = useRouter();

const closePopup = () =>{
  setpopup(false);
}

  const generateRandomNumber = () => Math.floor(Math.random() * 9) + 1;

  const [captchaNumbers, setCaptchaNumbers] = useState({
    number1: 0,
    number2: 0,
  });

  const [formData, setFormData] = useState({
    title:"Request a quote",
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
    captcha: "",
    captchaValidation: true,
    formType:popupEnquiry?popupEnquiry:"Popup Form"
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const generateCaptcha = () => {
    setCaptchaNumbers({
      number1: generateRandomNumber(),
      number2: generateRandomNumber(),
    });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "phone" ? sanitizePhoneInput(value) : value,
    }));
  };

  const checkCaptcha = () => {
    return (
      captchaNumbers.number1 + captchaNumbers.number2 ===
      Number(formData.captcha)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitting) return;

    const isValid = checkCaptcha();

    if (!isValid) {
      setFormData((prev) => ({
        ...prev,
        captchaValidation: false,
        captcha: "",
      }));

      generateCaptcha();
      return;
    }

    const { valid, errors: fieldErrors } = validateEnquiryForm(formData);

    if (!valid) {
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus(null);
    setSubmitting(true);

    try {
      const res = await apiClient.post("/api/enquiry", {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        location: formData.location,
        message: formData.message,
        formType: "REQUEST_QUOTE",
      });

      const data = res.data;

      if (res.status >= 400) {
        if (data.errors) setErrors(data.errors);
        setStatus({
          type: "error",
          message: data.error || "Please fix the errors and try again.",
        });
        return;
      }

      setFormData({
        name: "",
        phone: "",
        email: "",
        location: "",
        message: "",
        captcha: "",
        captchaValidation: true,
      });

      generateCaptcha();
      setpopup(false);
      router.push("/request-a-quote-thank-you");
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="popup">
      <div className="overlay"></div>

      <div className={`popupContainer ${style.formPopupContainer}`}>
        <button type="button" className={`popupClosebtn ${style.popupClosebtn}`} onClick={closePopup} aria-label="Close popup">
          <Image
            src="/assets/images/close.svg"
            width={24}
            height={24}
            alt=""
          />
        </button>


        <form id={style.form} onSubmit={handleSubmit}>
          <h2 className={`${style.formControl} ${style.fullWidth} ${style.title}`}>{formData.title}</h2>
          <div className={style.formControl}>
            <label htmlFor="rq-name">Name</label>
            <input
              id="rq-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className={style.fieldError}>{errors.name}</p>}
          </div>

          <div className={style.formControl}>
            <label htmlFor="rq-phone">Phone Number</label>
            <input
              id="rq-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              maxLength={13}
            />
            {errors.phone && <p className={style.fieldError}>{errors.phone}</p>}
          </div>

          <div className={style.formControl}>
            <label htmlFor="rq-email">Email</label>
            <input
              id="rq-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className={style.fieldError}>{errors.email}</p>}
          </div>

          <div className={style.formControl}>
            <label htmlFor="rq-location">Location</label>
            <input
              id="rq-location"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
            {errors.location && <p className={style.fieldError}>{errors.location}</p>}
          </div>

          <div className={`${style.formControl} ${style.fullWidth}`}>
            <label htmlFor="rq-message">Message</label>
            <textarea
              id="rq-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className={style.captcha}>
            <div>
              <p>Please prove you are human by solving this calculation</p>

              <input
                type="number"
                value={captchaNumbers.number1}
                disabled
                readOnly
              />

              {" + "}

              <input
                type="number"
                value={captchaNumbers.number2}
                disabled
                readOnly
              />

              {" = "}

              <input
                type="number"
                name="captcha"
                value={formData.captcha}
                onChange={handleChange}
              />

              {!formData.captchaValidation && (
                <p className={style.error}>
                  Please enter a valid captcha.
                </p>
              )}
            </div>
          </div>

          {status && (
            <p className={`${style.formStatus} ${style[status.type]}`}>
              {status.message}
            </p>
          )}

          <button type="submit" className="common_btn" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}