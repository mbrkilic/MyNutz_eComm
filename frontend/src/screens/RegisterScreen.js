import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/userActions";
import chipm from "../pic/chp.png";
import chpmnk from "../pic/chipmunk1.png";

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <>
      <div class="registration-form">
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <form onSubmit={submitHandler}>
          <div class="form-icon">
            <span>
              <img src={chpmnk} alt="logo" class="logo" />
            </span>
          </div>

          <div class="form-group" controlId="name">
            <input
              type="name"
              class="form-control item"
              //id="username"
              placeholder="İsminizi Giriniz"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="form-group" controlId="email">
            <input
              type="email"
              class="form-control item"
              //id="email"
              placeholder="Email Adresinizi Giriniz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-group" controlId="password">
            <input
              type="password"
              class="form-control item"
              //id="password"
              placeholder="Şifrenizi Giriniz"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="form-group" controlId="confirmPassword">
            <input
              type="password"
              class="form-control item"
              //id="password"
              placeholder="Şifrenizi Tekrar Giriniz"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control item"
              id="phone-number"
              placeholder="Telefon Numarası"
            />
          </div>

          <div class="form-group">
            <button
              type="submit"
              class="btn btn-block create-account"
              variant="primary"
            >
              Hesap Oluştur
            </button>
          </div>
        </form>
        <div class="social-media">
          <h5>Zaten Üye Misin?</h5>

          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            <h4>Giriş Yap</h4>
          </Link>
          <div>
            <span>
              <img src={chipm} alt="logo" class="logo" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;
