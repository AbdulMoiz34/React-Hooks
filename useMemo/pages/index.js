import Link from "next/link";
import { useMemo, useState } from "react";

const Memo = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const incrementOne = () => {
        console.log("called");
        return setNum1(num1 + 1);
    }
    const isEven = () => {
        for (let i = 0; i < 100000000; i++) { }; // just create minor problem its effect num2.
        return num1 % 2 === 0;
    }
    const incrementTwo = () => {
        return setNum2(num2 + 1);
    }
    return (
        <>
            <h1>useMemo hook in react js || practice</h1>
            <h3>Problem without useMemo</h3>
            <p>Increm 1 takes some time because during this ,it perform extra calculation but its affect increm 2 , this is not true</p>
            <div>
                {isEven() ? "Even" : "Odd"}
                <button onClick={incrementOne}>Increm 1</button>
                <span>{num1}</span>
            </div>
            <hr />
            <div>
                <button onClick={incrementTwo}>Increm 2</button>
                <span>{num2}</span>
            </div>
            <hr />
            <Link href="/memo">Solve Problem</Link>
        </>
    );
}
export default Memo;