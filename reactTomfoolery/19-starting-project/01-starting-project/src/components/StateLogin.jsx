import Input from "./Input";
import { isEmail, isNotEmpty, isEqualsToOtherValue, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function StateLogin() {
  const {value: emailValue, handleInput: handleEmailInput, handleInputBlur: handleEmailBlur, hasError: emailHasError} = useInput("", (value) => {
    return isEmail(value) && isNotEmpty(value);
  });

  const {value: passwordValue, handleInput: handlePasswordInput, handleInputBlur: handlePasswordBlur, hasError: passwordHasError} = useInput("", (value) => {
    return hasMinLength(value, 6)
  });
  
   function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, passwordValue);
    
  }




  return (
    <form onSubmit={handleSubmit} >
      <h2>Login</h2>

      <div className="control-row">
        <Input 
          label="Email"
          type = "email"
          name="email"
          id="email"
          onBlur={handleEmailBlur}
          value={emailValue}
          onChange={handleEmailInput}
          error={emailHasError && "Please enter a valid email!"}
        />
        <Input 
          label="Password"
          type = "password"
          name="password"
          id="password"
          onBlur={handlePasswordBlur}
          value={passwordValue}
          onChange={handlePasswordInput}
          error={passwordHasError && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type="button" className="button" >Login</button>
      </p>
    </form>
  );
}
