import React from "react";
import styles from "./Login.module.scss";
import { useLogin } from "../../hooks/useLogin";
import { useState } from "react";

export const Login = () => {
  const { login, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <section>
      <form>
        <div className={styles.loginWrapper}>
          <div className={styles["login-box"]}>
            <h2>Login</h2>
            <form>
              <div className={styles["user-box"]}>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name=""
                  value={email}
                />

                <label>E-Mail</label>
              </div>
              <div className={styles["user-box"]}>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name=""
                  value={password}
                />
                <label>Password</label>
              </div>

              <div className={styles["button-form"]}>
                <a onClick={handleSubmit} className={styles.submit}>
                  Submit
                </a>
              </div>
            </form>
          </div>
        </div>
      </form>
    </section>
  );
};
