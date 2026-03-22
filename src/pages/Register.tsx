import { useEffect, useState } from "react"
import type { RegisterData } from "../types"
import { RegisterForm } from "@/components"
import { toast } from "sonner"; 
import { useLoginUser, useRegisterUser } from "@/hooks/auth";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/context/UserContext";
;


const initialState: RegisterData = {
  name: '',
  email: '',
  password: '',
  isMember: false,
}


function Register() {
    const navigate = useNavigate();

  const registerMutation = useRegisterUser();
  const loginMutation = useLoginUser();

  const {user} = useUser()

  const [formData, setFormData] = useState<RegisterData>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const toggleMember = () => {
    setFormData({ ...formData, isMember: !formData.isMember });
  };

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password, isMember } = formData;

    if (!email || !password || (!isMember && !name)) {
      toast.error("Please Fill Out All Fields");
      return;
    }

    if (isMember) {
      loginMutation.mutate({
        email, password,
      })
      return;
    }
    registerMutation.mutate({
      name, email, password
    })
  }

    useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);


  return (
    <>
      <RegisterForm values={formData} changefn={handleChange} submitfn={onSubmit} memberTogglefn={toggleMember} />

    </>
  )
}

export default Register;
