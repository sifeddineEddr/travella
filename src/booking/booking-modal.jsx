import { useState, useEffect } from "react";
import BookingCategories from "./booking-categories.js";
import Data from "./../destinations/destinations-data.js";

export default function BookingModal({ visible, modalClose }) {
  const [submission, setSubmission] = useState(false);
  useEffect(() => {}, [submission]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    destination: "",
    departureDate: new Date().toISOString().slice(0, 10),
    plan: "Standard Plan",
  });

  const [returnDate, setReturnDate] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
    let newDate;
    if (name === "departureDate") {
      newDate = new Date(value);
    } else if (name === "plan") {
      newDate = new Date(formData.departureDate);
    }
    switch (formData.plan) {
      case "Basic Plan":
        newDate.setDate(newDate.getDate() + 2);
        break;
      case "Standard Plan":
        newDate.setDate(newDate.getDate() + 3);
        break;
      case "Premium Plan":
        newDate.setDate(newDate.getDate() + 5);
        break;

      default:
        break;
    }
    const finalDate = newDate.toISOString().slice(0, 10);
    setReturnDate(finalDate);
  };

  const handleSubmit = (event) => {
    alert("Your booking have been stored successfully");
    setSubmission(true);
  };

  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="relative bg-white p-4 w-3/4 h-[60%] flex flex-col justify-around md:h-[80%]">
        <button
          style={{ top: "10px", right: "20px" }}
          className="absolute text-cyanBlue font-semibold text-xl"
          onClick={modalClose}
        >
          &times;
        </button>
        <p className="font-bold text-center text-cyanBlue text-2xl">
          Book Your Next Travel
        </p>
        <form
          className="h-[85%] flex flex-col justify-around items-center"
          onSubmit={handleSubmit}
        >
          <div className="h-[35%] md:w-3/5 flex flex-col justify-around items-center md:flex-row md:flex-wrap">
            <input
              required
              className="bg-softCyanBlue border border-b-2 border-b-cyanBlue rounded-tl-xl rounded-tr-xl px-3 py-1 border-2 border-b-2 border-b-2 border-b-cyanBlue rounded-tl-xl rounded-tr-xl px-3 py-1 placeholder-cyanBlue focus:outline-cyanBlue"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              name="firstName"
              value={formData.firstName}
            />
            <input
              required
              className="bg-softCyanBlue border border-b-2 border-b-cyanBlue rounded-tl-xl rounded-tr-xl px-3 py-1 border-2 border-b-2 border-b-2 border-b-cyanBlue rounded-tl-xl rounded-tr-xl px-3 py-1 placeholder-cyanBlue focus:outline-cyanBlue"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              name="lastName"
              value={formData.lastName}
            />
            <input
              required
              className="bg-softCyanBlue border border-b-2 border-b-cyanBlue rounded-tl-xl rounded-tr-xl px-3 py-1 border-2 border-b-2 border-b-2 border-b-cyanBlue rounded-tl-xl rounded-tr-xl px-3 py-1 placeholder-cyanBlue focus:outline-cyanBlue"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
            <input
              required
              className="bg-softCyanBlue border border-b-2 border-b-cyanBlue rounded-tl-xl rounded-tr-xl px-3 py-1 placeholder-cyanBlue focus:outline-cyanBlue"
              type="text"
              placeholder="Phone Number"
              onChange={handleChange}
              name="phoneNumber"
              value={formData.phoneNumber}
              pattern="(^(212)[6|7|8|9]{1}[0-9]{7}$)|(^(06)[0-9]{8}$)"
            />
          </div>

          <div className="flex justify-between w-3/5">
            <div className="flex justify-between flex-col w-2/5">
              <label className="text-cyanBlue ml-1">Destinations</label>
              <select
                required
                className="bg-softCyanBlue border border-b-2 border-b-cyanBlue rounded-tl-xl rounded-tr-xl px-3 py-1 focus:outline-cyanBlue"
                value={formData.destination}
                onChange={handleChange}
                name="destination"
                placeholder="Destination"
              >
                <option value=""></option>
                {Data.map((category) => {
                  let options = category.destinations.map((des) => {
                    return (
                      <option
                        value={`${category.category_title} - ${des.title}`}
                      >{`${category.category_title} - ${des.title}`}</option>
                    );
                  });
                  return options;
                })}
              </select>
            </div>
            <div className="flex justify-between gap-2 flex-col w-2/5">
              <label className="text-cyanBlue ml-1">Plan</label>
              <select
                required
                className="bg-softCyanBlue border border-b-2 border-b-cyanBlue rounded-tl-xl rounded-tr-xl px-3 py-1 focus:outline-cyanBlue"
                value={formData.plan}
                onChange={handleChange}
                name="plan"
                placeholder="Plan"
              >
                <option value=""></option>
                {BookingCategories.map((category) => {
                  return (
                    <option value={category.title}>{category.title}</option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="flex gap-4 justify-between w-4/5 md:w-[60%]">
            <input
              required
              className="bg-softCyanBlue border border border-b-2 border-b-cyanBlue rounded-tl-xl rounded-tr-xl px-3 py-1 border-2 border-b-2 border-b-2 border-b-cyanBlue rounded-tl-xl rounded-tr-xl px-3 py-1 text-cyanBlue focus:outline-cyanBlue"
              type="date"
              min={new Date().toISOString().slice(0, 10)}
              value={formData.departureDate}
              onChange={handleChange}
              name="departureDate"
            />
            <input
              className="bg-softCyanBlue border border-b-2 border-b-cyanBlue rounded-tl-xl rounded-tr-xl px-3 py-1 border-2 border-b-2 border-b-2 border-b-cyanBlue rounded-tl-xl rounded-tr-xl px-3 py-1 text-cyanBlue"
              type="date"
              value={returnDate}
              onChange={handleChange}
              name="returnDate"
              disabled
            />
          </div>
          <button
            className="px-4 py-2 border-2 border-cyanBlue rounded-3xl text-cyanBlue text-md font-semibold"
            type="submit"
          >
            Confirm My Booking
          </button>
        </form>
      </div>
    </div>
  );
}
