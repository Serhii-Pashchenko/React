import React from "react";

function Contacts() {
  return (
    <div className={"contacts"}>
      <h3 className={"title"}><span className={"navigation"} id={"c"}>C</span> Contact</h3>
      <h4 className={"contact-title"}>Address</h4>
      <p>Brovary, Ukraine</p>
      <h4 className={"contact-title"}>Phone</h4>
      <p>+380673034308</p>
      <h4 className={"contact-title"}>E-mail</h4>
      <p>
        <a href={"mailto:paschenko09@gmail.com"} className={"contact-link"}>paschenko09@gmail.com</a>
      </p>
      <h4 className="contact-title">Linkedin</h4>
      <p>
        <a href={"https://www.linkedin.com"} className={"contact-link"}>https://www.linkedin.com/</a>
      </p>
    </div>
  );
}

export default Contacts;