import { useState } from "react";

const useForm = () => {
    const [formData,setFormData] = useState({
            email:"",
            pass:""
        })
        const handleChange = (e) => {
            const {name,value} = e.target;
            setFormData({...formData,[name]:value})
        }
        const handleSubmit = () => {
            const values = Object.values(formData);
            if (values.some(v => !v)){
                alert('fill out all field');
            }
            console.log(formData);
            return;
        }
        return {handleChange,handleSubmit,formData};
}
export default useForm;