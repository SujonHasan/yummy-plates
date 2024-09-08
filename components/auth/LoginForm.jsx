"use client";

import { performLogin } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

function LoginForm() {
  
  const { setAuth } = useAuth();
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const found = await performLogin(formData);

      if (found) {
        setAuth(found);
        toast.success(`${found.firstName} Login successfully`);
        router.push("/");
      } else {
        toast.error("Please provide a valid login Information")
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
        >
          Login
        </button>
      </form>
    </>
  );
}

export default LoginForm;
