import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import sollog from "../pic/sollog.jpg";
import bg from "../pic/bg.png";
import email from "../pic/email.png";
import phone from "../pic/phone.png";
import loka from "../pic/location.png";

class ContactScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }

  onMsgChange(event) {
    this.setState({ message: event.target.value });
  }

  submitEmail(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", subject: "", message: "" });
  }

  render() {
    return (
      <div className="containerr">
        <span className="big-circler"></span>
        <img src={bg} className="squarer" alt="" />
        <div className="formr">
          <div className="contact-infor">
            <h3 className="titler">Bize Ulaşın!</h3>
            <p className="textr">
              En taze kuruyemişler, MyNutz farklı ile en kısa sürede sizinle!
            </p>

            <div className="infor">
              <div className="informationr">
                <img src={loka} className="iconr" alt="" />
                <p>Adana, Turkey</p>
              </div>
              <div className="informationr">
                <img src={email} className="iconr" alt="" />
                <p>mdburakkilic@gmail.com</p>
              </div>
              <div className="informationr">
                <img src={phone} className="iconr" alt="" />
                <p>+90 555 555 55 55</p>
              </div>
            </div>

            <div className="social-mediar">
              <p>Sosyal Medya Hesaplarımız</p>
              <div className="social-iconsr">
                <a href="https://tr-tr.facebook.com/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-formr">
            <span className="circler oner"></span>
            <span className="circler twor"></span>

            <form
              method="POST"
              id="contact-form"
              onSubmit={this.submitEmail.bind(this)}
              autocomplete="off"
            >
              <h3 className="titler">Buradan Yazabilirsiniz</h3>
              <div className="input-containerr">
                <input
                  placeholder="Adınız"
                  id="name"
                  type="text"
                  className="form-control"
                  required
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                />
              </div>
              <div className="input-containerr">
                <input
                  placeholder="Mail Adresiniz"
                  id="email"
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  required
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                />
              </div>
              <div className="input-containerr">
                <input
                  placeholder="Konu"
                  id="subject"
                  type="text"
                  className="form-control"
                  required
                  value={this.state.subject}
                  onChange={this.onSubjectChange.bind(this)}
                />
              </div>
              <div className="input-containerr textarea">
                <textarea
                  placeholder="Mesajınız"
                  id="message"
                  className="form-control"
                  rows="1"
                  required
                  value={this.state.message}
                  onChange={this.onMsgChange.bind(this)}
                ></textarea>
              </div>
              <button type="submit" className="btnr">
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  submitEmail(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Mesajınız iletildi.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", subject: "", message: "" });
  }
}

export default ContactScreen;
