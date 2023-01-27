import { useState } from "react";
import BookingCategories from "./booking-categories";

export default function Booking() {
  const Dropdown = ({ plan, price, divContent }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="relative">
        <button
          className={`${
            isOpen ? "bg-cyanBlue" : "bg-white"
          } flex justify-between w-full py-2 px-8 border border-black cursor-pointer font-medium text-gray-700 rounded-t-xl w-[250px]`}
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
  return (
    <div id="booking" className="py-4">
      <div className="text-xl font-semibold text-center md:text-2xl">
        Choose Your Plan
      </div>
      <hr className="border-2 border-cyanBlue w-20 rounded-lg mx-auto" />
      <div className="flex flex-col items-center">
        <div className="my-4 flex flex-col gap-8 h-full py-4 md:flex-row">
          {BookingCategories.map((category) => {
            return (
              <Dropdown
                plan={category.title}
                price={category.price}
                divContent={category.properties}
              />
            );
          })}
        </div>
        <button className="px-4 py-2 border-2 border-cyanBlue rounded-3xl text-cyanBlue text-lg font-semibold">
          Book a reservation
        </button>
      </div>
    </div>
  );
}
