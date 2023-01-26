import BookingCategories from "./booking-categories";

export default function Booking() {
  return (
    <div id="booking" className="py-4">
      <div className="text-xl font-semibold text-center md:text-2xl">
        Choose Your Plan
      </div>
      <hr className="border-2 border-cyanBlue w-20 rounded-lg mx-auto" />
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center">
          
        </div>
        <button className="px-4 py-2 border-2 border-cyanBlue rounded-3xl text-cyanBlue text-xl font-semibold">
          Book a reservation
        </button>
      </div>
    </div>
  );
}
