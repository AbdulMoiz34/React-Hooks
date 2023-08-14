import { useMemo, useState } from "react";

const Memo = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const incrementOne = () => {
        console.log("called");
        return setNum1(num1 + 1);
    }
    const isEven = useMemo(() => {
        for (let i = 0; i < 100000000; i++) { }; // just create minor problem its effect num2.
        return num1 % 2 === 0;
    }, [num1]);
    const incrementTwo = () => {
        return setNum2(num2 + 1);
    }
    return (
        <>
            <h3 className="heading">Solved performance problem through useMemo</h3>
            <p>Increm 1 takes some time because during this ,it perform extra calculation but don't affect num2 performance.</p>
            <div>
                {isEven ? "Even" : "Odd"}<br />
                <button onClick={incrementOne}>Increm 1</button>
                <span>{num1}</span>
            </div>
            <hr />
            <div>
                <button onClick={incrementTwo}>Increm 2</button>
                <span>{num2}</span>
            </div>
            <p style={{ textAlign: "center" , fontWeight: "bold" }}>Thanks for visiting &copy;</p>
        </>
    );
}
export default Memo;