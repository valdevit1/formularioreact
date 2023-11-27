import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="wrapper bg-dark d-flex aling-items-center justify-content-center w1-00">
      <div className="login">
        <h2 className="mb-3">Formulario</h2>
        <a href="URL_FACEBOOK" target="_blank" class="circle" id="facebook">
          Facebook
        </a>
        <a href="URL_INSTAGRAM" target="_blank" class="circle" id="instagram">
          Instagram
        </a>
        <a href="URL_GITHUB" target="_blank" class="circle" id="github">
          GitHub
        </a>
        <h5>usa tu email para registarte</h5>
        <form className="validacion">
          <div className="form-group validacion mb-2">
            <label htmlFor="Nombre" className="form-label">
              Nombre:
            </label>
            <input
              type="nombre"
              placeholder="Nombre"
              className="form-control"
              required
            ></input>
            <div className="invalid-feedback">Ingrese su nombre</div>
          </div>
          <div className="form-group validacion mb-2">
            <label htmlFor="Email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              required
            ></input>
            <div className="invalid-feedback">Ingrese su email</div>
          </div>
          <div className="form-group validacion mb-2">
            <label htmlFor="Password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              required
            ></input>
            <div className="invalid-feedback">Ingrese su password</div>
          </div>
          <div className="form-group mb-2">
            <label htmlFor="Password" className="form-label">
              Repetir Password:
            </label>
            <input
              type="password"
              placeholder="Repetir Password"
              className="form-control"
            ></input>
            <div className="invalid-feedback">repita su pasworrd</div>
          </div>
          <botton type="submit" className="btn btn-success block w-100 mt-2">
            Registrarse
          </botton>
          <botton type="submit" className="btn btn-info block  w-100 mt-2">
            Completa todos los campos
          </botton>
        </form>
      </div>
    </div>
  );
}

export default App;
