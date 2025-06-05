import React, { useRef, useState } from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");

  const validate = (fields) => {
    const newErrors = {};

    if (!fields.name.trim()) newErrors.name = "Please enter your full name.";
    if (!fields.email.trim()) newErrors.email = "Email is required.";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(fields.email.trim())
    )
      newErrors.email = "Please enter a valid email address.";
    if (!fields.message.trim())
      newErrors.message = "Please enter your message.";

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitStatus("");
      return;
    }

    setErrors({});

    emailjs
      .sendForm(
        "service_v18xzsq",
        "template_6sifady",
        form.current,
        "qCTIl-A5butAP0y4v"
      )
      .then(
        () => {
          setSubmitStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setSubmitStatus(
            "Oops! Something went wrong. Please try again later."
          );
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get in Touch </h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <a
              href="mailto:brysonnyamwange@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send an Email
            </a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <a
              href="https://m.me/bryson.nyamwange"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby="name-error"
          />
          {errors.name && (
            <span className="error-message" id="name-error">
              {errors.name}
            </span>
          )}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby="email-error"
          />
          {errors.email && (
            <span className="error-message" id="email-error">
              {errors.email}
            </span>
          )}

          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby="message-error"
          ></textarea>
          {errors.message && (
            <span className="error-message" id="message-error">
              {errors.message}
            </span>
          )}

          <button type="submit" className="btn btn-primary">
            Hire Me
          </button>

          {submitStatus && (
            <p
              className={`submit-status ${
                submitStatus.includes("successfully") ? "success" : "error"
              }`}
              role="alert"
            >
              {submitStatus}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
