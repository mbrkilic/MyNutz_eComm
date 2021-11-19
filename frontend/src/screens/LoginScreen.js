import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";
import sollog from "../pic/sollog.jpg";
import chipm from "../pic/chipmunk.svg";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
        <div class="container">
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}
          <form onSubmit={submitHandler}>
            <div class="card login-card">
              <div class="row no-gutters">
                <div class="col-md-5">
                  <img src={sollog} alt="login" class="login-card-img" />
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <div class="brand-wrapper">
                      <img src={chipm} alt="logo" class="logo" />
                    </div>
                    <p class="login-card-description">Hesabınıza giriş yapın</p>

                    <div class="form-group" controlId="email">
                      <label for="email" class="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        //name="email"
                        //id="email"
                        class="form-control"
                        placeholder="Email Adresiniz"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div class="form-group mb-4" controlId="password">
                      <label for="password" class="sr-only">
                        Şifre
                      </label>
                      <input
                        type="password"
                        //name="password"
                        //id="password"
                        class="form-control"
                        placeholder="***********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <button
                      name="login"
                      id="login"
                      class="btn btn-block login-btn mb-4"
                      type="submit"
                      value="Giriş Yap"
                      variant="primary"
                    >
                      Giriş Yap
                    </button>

                    <p class="login-card-footer-text">
                      Üye değil misin?{" "}
                      <Link
                        to={
                          redirect
                            ? `/register?redirect=${redirect}`
                            : "/register"
                        }
                      >
                        Kaydol
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default LoginScreen;
