import { useState } from "react";
const style = { textAlign: "center", fontFamily: "sans-serif", fontSize: "25px" };
const Home = () => {
  const [num, setNum] = useState(0);
  const onClickHandler = () => {
    // setNum(oldData => { //if we need updated value
    //   const sum = oldData + 1;
    //   console.log(sum);
    //   return sum;
    // });

    setNum(num + 1); //if no need updated value
  };
  return (
    <>
      <h1 style={style}>UseState Practice</h1>
      <button onClick={onClickHandler}>you clicked {num}</button>
    </>
  );
}
export default Home;