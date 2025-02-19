import { useState, useRef} from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const [emailIsInvalid, setEmailIsInvalid] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;



    const emailIsValid = enteredEmail.includes("@");
    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);
  }



  return (
    <form onSubmit={handleSubmit} >
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input ref={email} id="email" type="email" name="email"  />
          {emailIsInvalid && <div className="control-error" >Please enter a valid email address.</div>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input ref={password} id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button type="button" className="button button-flat">Reset</button>
        <button type="submit" className="button" >Login</button>
      </p>
    </form>
  );
}
