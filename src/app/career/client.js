"use client"

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import style from './career.module.css'
import Image from 'next/image'
import Button from "../components/ui/button";
import { validateCareerForm, validateResumeFile, sanitizePhoneInput } from "@/lib/validation";
import apiClient from "@/lib/apiClient";


// why choose content 

const whyChooseData = [
  {
    title:"Skill Development That Matters",
    content:"Get real-time exposure to world-class engineering and machinery, not just manuals.",
    icon:"/assets/images/skill-development.png"
  },
    {
    title:"Culture of Ownership",
    content:"We empower you to lead projects, take initiative, and make decisions that count.",
    icon:"/assets/images/ownership.png"
  },
    {
    title:"Work-Life Balance",
    content:"Structured work hours, supportive teams, and respect for personal time.",
    icon:"/assets/images/work-balance.png"
  },
    {
    title:"Performance-Driven Growth",
    content:"Your efforts are recognised, rewarded, and nurtured with opportunities to advance.",
    icon:"/assets/images/growth.png"
  },
]






export default function page() {

    const router = useRouter();

   const generateRandomNumber = () => Math.floor(Math.random() * 9) + 1;
  
    const [inputTouch,setInputTouch] = useState(false)
  
    const generateCaptcha = () => {
      setCaptchaNumbers({
        number1: generateRandomNumber(),
        number2: generateRandomNumber(),
      });
    };
  
    const [captchaNumbers, setCaptchaNumbers] = useState({
      number1: 0,
      number2: 0,
    });
  
    const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      location: "",
      message: "",
      captcha: "",
      captchaValidation: true,
    });

    const [resumeFile, setResumeFile] = useState(null);
    const fileInputRef = useRef(null);

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(null);
    const [submitting, setSubmitting] = useState(false);
  
    useEffect(() => {
      generateCaptcha();
    }, []);
  
    const handleChange = (e) => {
      setInputTouch(true);
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
  
    const { valid, errors: fieldErrors } = validateCareerForm(formData);
    const resumeError = validateResumeFile(resumeFile);

    if (resumeError) fieldErrors.resume = resumeError;

    if (!valid || resumeError) {
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus(null);
    setSubmitting(true);

    try {
      const submitData = new FormData();
      submitData.set("name", formData.name);
      submitData.set("phone", formData.phone);
      submitData.set("email", formData.email);
      submitData.set("location", formData.location);
      submitData.set("message", formData.message);
      submitData.set("resume", resumeFile);

      const res = await apiClient.post("/api/career", submitData);
      const data = res.data;

      if (res.status >= 400) {
        if (data.errors) setErrors(data.errors);
        setStatus({
          type: "error",
          message: data.error || "Please fix the errors and try again.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: "Thank you! We'll get back to you shortly.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        location: "",
        message: "",
        captcha: "",
        captchaValidation: true,
      });

      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";

      generateCaptcha();
       router.push("/career-thank-you");
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
    
    <>

    {/* hero section  */}

    <section className={style.heroSection}>
        <div className={`container ${style.heroContainer}`}>
            <div className={style.content}>
            <h1 className='heading'>More than a name, Precision is How We Think, Build, and Engineer Possibilities</h1>
<p>Built on decades of dedication, Precision Equipments blends innovation with purpose, engineering high-performance solutions that power industries worldwide. With every project, we move closer to being a trusted global force in process technology.</p>
        </div>
        </div>
    </section>



        {/* why choose section  */}
 <section className={`${style.whyChooseSection} gray_section`}>

      <div className="container section_container">

        <div className={`top_content center ${style.top_content}`}>
          <h2 className="common_heading heading">Why Choose Us</h2>
          <p>Because you deserve a career that’s built to last. At Precision, we offer a space where your skills are valued, your ideas are heard, and your journey matters. It’s not just where you work but where you grow.</p>
        </div>

     <div className={style.whyChooseCards}>
      {whyChooseData && whyChooseData.map((item,index)=>(
        <div className={style.card} key={index}>
          <div className={style.icon}>
        <Image className={style.iconImg} src={item.icon} width={100} height={100} alt=""/>
        </div>
        <h3 className="heading">{item.title}</h3>
        <p>{item.content}</p>
        </div>
      ))}      
     </div>


      </div>

    </section>


   {/* Form */}

      <section className={`${style.formSection}`}>
        <div className={`container section_container ${style.formContainer}`}>
          <div className={`top_content center ${style.top_content}`}>
            <h2 className="common_heading heading">
              Appy Now!
            </h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className={style.formControl}>
              <label htmlFor="career-name">Name</label>
              <input
                id="career-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className={style.fieldError}>{errors.name}</p>}
            </div>

            <div className={style.formControl}>
              <label htmlFor="career-phone">Phone Number</label>
              <input
                id="career-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={13}
              />
              {errors.phone && <p className={style.fieldError}>{errors.phone}</p>}
            </div>

            <div className={style.formControl}>
              <label htmlFor="career-email">Email</label>
              <input
                id="career-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className={style.fieldError}>{errors.email}</p>}
            </div>

            <div className={style.formControl}>
              <label htmlFor="career-location">Your Location</label>
              <input
                id="career-location"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
              {errors.location && <p className={style.fieldError}>{errors.location}</p>}
            </div>

          

             <div className={`${style.formControl} ${style.fullWidth} ${style.file}`}>
              <label htmlFor="career-resume">Upload Resume*(Limit upto 5MB) Accept - pdf|doc|docx</label>
              <input
                id="career-resume"
                type="file"
                name="resume"
                ref={fileInputRef}
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  setInputTouch(true);
                  setResumeFile(e.target.files?.[0] || null);
                }}
              />
              <p>{resumeFile ? resumeFile.name : "Upload File here"}</p>
              {errors.resume && <p className={style.fieldError}>{errors.resume}</p>}
            </div>

            <div className={`${style.formControl} ${style.fullWidth}`}>
              <label htmlFor="career-message">Message</label>
              <textarea
                id="career-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <p className={style.fieldError}>{errors.message}</p>}
            </div>

            {inputTouch && 

            <div className={style.captcha}>
              <div>
                <p>
                  Please prove you are human by solving this calculation
                </p>

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

            }

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
      </section>




    </>
  )
}
