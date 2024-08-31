"use client";
import { authModalState } from "@/atoms/authModelAtom";
import { validateForm } from "@/utils/validations";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useSetRecoilState } from "recoil";
import FormErrorMessage from "../errors/FormErrorMessage";
import { ValidationErrors,FormData } from "@/utils/types/types";
import { registerUser } from "@/apis/auth-api";
import { useRouter } from "next/navigation";
import { userState } from "@/atoms/userStateAtom";

type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const setUser = useSetRecoilState(userState)
  const router = useRouter();
  
  const [inputs, setInputs] = useState<FormData>({
    email: "",
    displayName: "",
    password: "",
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [loading, setLoading] = useState(false);


  const handleRegister = async(event: FormEvent<HTMLFormElement>) => {
	event.preventDefault();

	// Check for Form data validation
	const validationErrors = validateForm("signup", inputs);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
	  return ;
    } 

	try {
    setLoading(true);
    const {user, token} = await registerUser(inputs);

    if(!!user && !! token ){
      setUser({...user, token});
    
    } else {
      throw new Error('Registration failed: Invalid response');
    }
    router.push("/")
		
	} catch (error) {
		throw new Error();
	}finally{
    setLoading(false);
  }


  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, type: "login" }));
  };

  return (
    <form className="space-y-6 px-6 pb-4" onSubmit={handleRegister}>
      <h3 className="text-xl font-medium text-white">Register to LeetClone</h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Email
        </label>
        <input
          onChange={handleInputChange}
          type="email"
          name="email"
          id="email"
          className="
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    "
          placeholder="name@company.com"
        />
		{/* Show the validtion error if available */}
		<FormErrorMessage msg={errors.email} />


      </div>
      <div>
        <label
          htmlFor="displayName"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Display Name
        </label>
        <input
          onChange={handleInputChange}
          type="displayName"
          name="displayName"
          id="displayName"
          className="
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    "
          placeholder="John Doe"
        />
			{/* Show the validtion error if available */}
			<FormErrorMessage msg={errors.displayName} />

      </div>
      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Password
        </label>
        <input
          onChange={handleInputChange}
          type="password"
          name="password"
          id="password"
          className="
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        bg-gray-600 border-gray-500 placeholder-gray-400 text-white
    "
          placeholder="*******"
        />

			{/* Show the validtion error if available */}
			<FormErrorMessage msg={errors.password} />

      </div>

      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
        "
      >
        {loading ? "Registering..." : "Register"}
      </button>

      <div className="text-sm font-medium text-gray-300">
        Already have an account?{" "}
        <a
          href="#"
          className="text-blue-700 hover:underline"
          onClick={handleClick}
        >
          Log In
        </a>
      </div>
    </form>
  );
};
export default Signup;
