import useToggleText from "../hooks/useToggleText"

const ToggleText = () => {
    const {text,toggleText} = useToggleText();

    return(
        <div>
            <h2>{text}</h2>
            <button type="button" onClick={toggleText}>hahaha</button>
        </div>
    )


}
export default ToggleText