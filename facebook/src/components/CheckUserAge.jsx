function CheckUserAge(){
    let age = 16;
    return (age >= 18 ? <div><h1>'You are an adult'</h1></div> : <div><h1>'You are a kid'</h1></div>)
}
export default CheckUserAge