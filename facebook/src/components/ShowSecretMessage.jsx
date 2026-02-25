function ShowSecretMessage() {
    let is_true = true;
    if (is_true == true){
        return (
            <div>
                <h1>"This is a secret message"</h1>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={is_true = true}>Click me</button>
                <h1></h1>
            </div>
        )
    }
}
export default ShowSecretMessage