import React from 'react'

const page = () => {
  return (
    <div>  
       <div className="flex items-center justify-center flex-col lg:flex-row lg:justify-around lg:items-center lg:h-[300px] h-auto min-h-screen w-full space-y-10 lg:space-y-0  ">
  <div className="bg-white w-10/12 h-[450px] rounded-xl shadow-2xl text-center lg:w-5/12 flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105">
    <h1 className="text-4xl font-bold">
        Login
    </h1>
    <div className="flex flex-col w-2/3 space-y-3">
  <label htmlFor="" className="text-start font-semibold">Name</label>
  <input type="text" className="p-1 text-lg border-black rounded-md bg-gray-200" />
  
  <label htmlFor="" className="text-start font-semibold">Password</label>
  <input type="password" className="p-1 text-lg border-black rounded-md bg-gray-200" />
</div>
  </div>
</div>

    </div>
  )
}

export default page