import Link from "next/link";
import React from "react"



export default function Navabar()
{

    return (
        
            
            <div className="flex justify-between" id="navmain">
                <div id="navbar" className="w-full h-[74px]">
        
                    <div className=" w-[339px] h-[15px] p-6 ml-20 flex flex-row">
                        <Link href={"./Welcome"} className="p-3">
                            Home
                        </Link>
                        <Link href={"./Single"} className=" p-3">
                            Single_Prduct
                        </Link>
                        <Link href={"./Product"} className="p-3">Product</Link>
                        <Link href={"./Contact"} className="p-3">Contact</Link>
                        <Link href={"./About"} className="p-3">About  </Link>
                    </div>
                </div>
                <div className="flex p-5 mr-8">
                    <p id="navp" className="h-[15px]">Contact: </p>
                    <p className="text-black">(808) 555-0111</p>
                </div>
            </div>
    )
}