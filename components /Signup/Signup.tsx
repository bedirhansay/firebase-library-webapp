import { sign } from "crypto";
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import styles from "./Signup.module.scss";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [rePass, setRePass] = useState("");
  const [password, setPassword] = useState("");

  const { error, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
  };

  return (
    <div className={styles.login}>
      <div className={styles["login-box"]}>
        <h2>Sign Up</h2>
        <form>
          <div className={styles["user-box"]}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name=""
            />
            <label>Username</label>
          </div>
          <div className={styles["user-box"]}>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name=""
            />
            <label>Password</label>
          </div>

          <div className={styles["button-form"]}>
            <a onClick={handleSubmit} className={styles.submit} href="#">
              Submit
            </a>

            <div className={styles["register"]}>
              Don't have an account ?<a href="#">Register</a>
            </div>
            {error && <p>{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
