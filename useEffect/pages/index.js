import { useEffect, useState } from "react";
const Home = () => {
  const [isValid, setValid] = useState(false);
  const [value, setValue] = useState("");
  const [show, setShow] = useState(true);
  const onChangeHandler = e => setValue(e.target.value);

  useEffect(() => {
    // console.log("use effect call");
    const timeout = setTimeout(() => {
      // console.log("use effect setTimeout call");
      (value.length > 5) ? setValid(true) : setValid(false);
    }, 600);
    return () => { // useEffect cleanUp function 
      clearTimeout(timeout);
    }
  }, [value]);
  const showPassword = () => {
    show ? setShow(false) : setShow(true);
    const inpElem = document.getElementById("inputElem");
    if (inpElem.type === "password") {
      inpElem.type = "text";
    } else {
      inpElem.type = "password";
    }
  }
  return (
    <>
      <h1 className="heading">useEffect , conditional styling Practice</h1>
      <label htmlFor="inputElem">Enter password:</label>
      <input id="inputElem" type="password" placeholder="atleast 6 values" onChange={onChangeHandler} />
      <p className={`validate ${isValid ? "valid" : "inValid"}`}>
        {isValid ? "valid" : "Invalid"}
      </p>
      <br />
      <button onClick={showPassword}>{show ? "show" : "hide"}</button>
    </>
  );
}
export default Home;