
import "./Spinner.css";
import { SpinnerProps } from "./SpinnerTypes";

function Spinner({show}:SpinnerProps) {
    return show ?(
    <div className="lds-roller"
    style={{position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"}}>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    ) : (
        <div></div>
    )
}

export default Spinner;