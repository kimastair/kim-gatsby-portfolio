import * as React from "react"
import { navigate } from "gatsby"
import "./contact-page.scss"

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate("/success"))
      .catch((error) => alert(error));
  };

  return (
    <main className="contact-page">
      <h1>Contact me</h1>
      <div className="flex-container">
        <div className="left">
          <form data-netlify="true"
            name="contact-me"
            method="post"
            onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact-me" />
            <label htmlFor="name">
              Name
              <input type="text" name="name" id="name" autoComplete="name" />
            </label>
            <label htmlFor="email">
              Email
              <input type="email" name="email" id="email" autoComplete="email" />
            </label>
            <label htmlFor="subject">
              Subject
              <input type="text" name="subject" id="subject" autoComplete="off" />
            </label>
            <label htmlFor="message">
              Message
              <textarea name="message" id="message" rows="5" autoComplete="off" />
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default ContactPage
