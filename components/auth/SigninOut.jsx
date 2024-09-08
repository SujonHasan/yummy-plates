
'use client';

import { useAuth } from "@/app/hooks/useAuth"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function SigninOut() {

    const {auth, setAuth} = useAuth();
    const router = useRouter();

    const HandleLogout = () =>{
      setAuth(null);
      toast.success("Logout successfully")
      router.push("/login");
    }


  return (
    <div className="my-2">

      {auth ? (
        <>
          <span className="mx-2">hello , <span className="font-bold">{auth.firstName}</span> </span>
          <a className="cursor-pointer py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center" onClick={HandleLogout} >Logout</a>
        </>
      ) : (
        <Link href="/login" className="py-2 bg-[#287436] px-6 rounded-md text-white content-center"> login </Link>
      )}
    </div>
  )
}

export default SigninOut