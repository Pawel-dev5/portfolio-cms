import React from "react";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    emailError,
    passwordError,
  } = props;

  return (
    <>
      <section className="login">
        <div id="LoginContainer" className="loginContainer">
          <div id="LoginContainerHeader">
            <h1>Zaloguj się</h1>
          </div>
          <div id="LoginForm">
            {/* <form onSubmit={handleLogin}> */}
            <div className="LoginFormContainer">
              <label>
                <p>Email</p>
                <input
                  type="email"
                  autoFocus
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <h1>{emailError}</h1>
              <label>
                <p>Hasło</p>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              {passwordError && <h1>{passwordError}</h1>}
              <button
                id="LoginButton"
                onClick={handleLogin}
                type="submit"
              >Zaloguj się</button>
            </div>
            {/* </form> */}
          </div>
        </div>
      </section>
    </>
  );
}
export default Login;