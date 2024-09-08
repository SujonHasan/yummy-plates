'use client';

import { registerUser } from "@/app/actions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


function RegistrationForm() {

  const router = useRouter();

  async function handleSubmit(event) {

    event.preventDefault();


    try {
      const formData = new FormData(event.currentTarget);

      const found = await registerUser(formData);

      if (found) {
        toast.success(`${found.firstName} Registration successfully`);
        router.push("/login");
      } else {
        toast.error("this email already has been used")
      }
    } catch (error) {
      toast.error(error.message);
    }

  }

  

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="fname" />
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lname" />
      </div>
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
        Create Account
      </button>
    </form>
  );
}

export default RegistrationForm;
