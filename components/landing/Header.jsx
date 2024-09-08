import Link from "next/link"
import logo from '../../assets/images/logo.png'
import Image from "next/image"
import SigninOut from "../auth/SigninOut"

function HeaderPage() {
  return (
    <nav>
    <div className="container flex justify-between py-6">
      <Link href="/">
        {/* <Image src={logo} alt="logo" className="object-cover h-[40px]" /> */}
        <h1 className="text-4xl font-bold text-green-800 font-sans">Yummy Plates</h1>
      </Link>

      <ul className="flex gap-4 text-sm text-gray-500">
        <li className="py-2 active">
          <Link href="/">Home</Link>
        </li>

        <li className="py-2">
          <Link href="/">Recipe</Link>
        </li>

        <li className="py-2">
          <Link href="/">About us</Link>
        </li>

        {/* <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
          <a href="/login">Login</a>
        </li> */}
        <li> <SigninOut/> </li>
      </ul>
    </div>
  </nav>
  )
}

export default HeaderPage