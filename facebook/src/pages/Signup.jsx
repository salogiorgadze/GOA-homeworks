import useForm from "../hooks/useForm"

function Signup(){
    const {handleChange,handleSubmit,formData} = useForm({
        email:"",
        pass:"",
        fullname:""
    })
    return(
        <>
            <form>
                <input type="text" name="fullname" onChange={handleChange} value={formData.fullname} placeholder="fullname"/>
                <input type="email" name="email" onChange={handleChange} value={formData.email} placeholder="email"/>
                <input type="password" name="pass" onChange={handleChange} value={formData.pass} placeholder="password"/>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
            <h1>{formData.email}</h1>
        </>
    )
}
export default Signup
