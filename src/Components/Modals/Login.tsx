"use client";
import { authModalState } from "@/atoms/authModelAtom";
import { userState } from "@/atoms/userStateAtom";
import { ValidationErrors } from "@/utils/types/types";
import { validateForm } from "@/utils/validations";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useSetRecoilState } from "recoil";
import FormErrorMessage from "../errors/FormErrorMessage";
import { AuthApi } from "@/apis/auth-api";
import { toast } from "react-toastify";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const setUser = useSetRecoilState(userState);
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check for Form data validation
    const validationErrors = validateForm("login", inputs);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Form Data Validation Error.", {theme : "dark"});
      return;
    }

    try {
      setLoading(true);
      const { user, token } = (await AuthApi.loginUser(inputs)).data;

      if (!!user && !!token) {
        setUser(user);

        //  TODO ADD PROPER ERROR HANDLING.
      } else {
        throw new Error("Registration failed: Invalid response");
      }
      router.push("/");
      toast.success("SUCCESSFULLY LOGIN.", { position: "top-center", autoClose: 3000, theme: "dark" });
    } catch (error) {
      throw new Error();
    } finally {
      setLoading(false);
    }
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const handleClick = (type: "login" | "register" | "forgotPassword") => {
    setAuthModalState((prev) => ({ ...prev, type }));
  };
  return (
    <form className="space-y-6 px-6 pb-4" onSubmit={handleLogin}>
      <h3 className="text-xl font-medium text-white" >Sign in to LeetClone</h3>
      <div>
        <label htmlFor="email" className="text-sm font-medium block mb-2 text-gray-300" >Your Email</label>
        <input 
          onChange={handleInputChange}
          type="email"
          name="email"
          id="email"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-gray-600 border-gray-500 placeholder-gray-400 text-white "          placeholder="name@company.com"
        />
        <FormErrorMessage msg={errors.email} />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Your Password
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
        <FormErrorMessage msg={errors.password} />
      </div>

      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
                text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
            "
      >
        {loading ? "Loading..." : "Log In"}
      </button>
      <button
        className="flex w-full justify-end"
        onClick={() => handleClick("forgotPassword")}
      >
        <a
          href="#"
          className="text-sm block text-brand-orange hover:underline w-full text-right"
        >
          Forgot Password?
        </a>
      </button>
      <div className="text-sm font-medium text-gray-300">
        Not Registered?{" "}
        <a
          href="#"
          className="text-blue-700 hover:underline"
          onClick={() => handleClick("register")}
        >
          Create account
        </a>
      </div>
    </form>
  );
};
export default Login;
