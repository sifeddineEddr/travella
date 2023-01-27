import { useState } from "react";

export default function Dropdown ({ plan, price, divContent }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="relative">
        <button
          className={`${
            isOpen ? "bg-cyanBlue" : "bg-white"
          } flex justify-between w-full py-2 px-8 border border-black cursor-pointer font-medium rounded-t-xl w-[250px]`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className={`${isOpen ? "text-white" : "text-black"}`}>{plan}</p>
          <p className={`${isOpen ? "text-white" : "text-cyanBlue"} font-bold`}>
            {price}
          </p>
        </button>
        <div className={isOpen ? "block" : "hidden"}>
          <div className="bg-white border border-t-0 border-black rounded-b-xl shadow-lg p-4">
            <div className="text-md">
              <ul className="list-disc pl-4">
                {divContent.map((prop) => {
                  return <li>{prop}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };