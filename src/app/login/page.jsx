import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  return (
    <div>
      <div className="flex items-center flex-col lg:flex-row lg:justify-around lg:items-center lg:h-[538px] h-auto w-full space-y-10 lg:space-y-0 mt-4 mb-6">
        
        {/* User Card */}
        <div className=" w-10/12 h-[350px] rounded-xl  text-center lg:w-3/12 flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105">
          <Link href="/login-page">
            <Image
              src="/user.png"
              width={200}
              height={200}
              alt="User"
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold">User</h1>
          </Link>
        </div>

        {/* Admin Card */}
        <div className=" w-10/12 h-[350px] rounded-xl  text-center lg:w-3/12 flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105">
          <Link href="/login-page">
            <Image
              src="/admin2.png"
              width={200}
              height={200}
              alt="Admin"
              className="h-6/12"
            />
            <h1 className="text-2xl font-bold">Admin</h1>
          </Link>
        </div>

        {/* Staff Card */}
        <div className=" w-10/12 h-[350px] rounded-xl  text-center lg:w-3/12 flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105">
          <Link href="/login-page">
            <Image
              src="/Staff2.png"
              width={200}
              height={200}
              alt="Staff"
              className="h-6/12"
            />
            <h1 className="text-2xl font-bold">Staff</h1>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Page
