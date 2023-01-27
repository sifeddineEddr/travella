import { useState } from "react";
import BookingModal from "./booking-modal";
import BookingCategories from "./booking-categories.js";
import Dropdown from "./dropdown-toggle";

export default function Booking() {
  const [displayModal, setDisplayModal] = useState(false);
  const modalClosing = () => setDisplayModal(false);
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
        <button
          className="px-4 py-2 border-2 border-cyanBlue rounded-3xl text-cyanBlue text-lg font-semibold"
          onClick={() => setDisplayModal(true)}
        >
          Book a reservation
        </button>
      </div>
      <BookingModal visible={displayModal} modalClose={modalClosing}/>
    </div>
  );
}
