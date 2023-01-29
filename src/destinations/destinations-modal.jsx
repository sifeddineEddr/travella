import { useState } from "react";

export default function DestinationsModal({ visible, modalClose, content }) {
  const [modalContent, setModalContent] = useState({});
  const handleDestination = (title) => {
    setModalContent(
      content.filter((destination) => destination.title === title)[0]
    );
  };
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10">
      <div className="relative bg-white w-3/4 h-[60%] flex flex-col justify-around md:h-[80%]">
        <button
          style={{ top: "10px", right: "20px" }}
          className="absolute text-cyanBlue font-semibold text-xl"
          onClick={() => {
            modalClose();
            setModalContent({});
          }}
        >
          &times;
        </button>
        <div className="flex w-full h-full">
          <div className="w-1/3">
            {content.map((destination) => {
              return (
                <div
                  className="flex cursor-pointer flex-col border-2 border-cyanBlue h-1/2 p-2 justify-center text-center text-cyanBlue text-lg font-semibold"
                  onClick={() => handleDestination(destination.title)}
                >
                  <p>{destination.title}</p>
                </div>
              );
            })}
          </div>
          <div className="border-2 border-cyanBlue pt-8 p-2 w-2/3 flex flex-col">
            <div className="h-1/2 flex flex-col justify-around">
              <p className="text-cyanBlue text-2xl text-center font-semibold">
                Desctiption
              </p>
              <p>{modalContent.description}</p>
            </div>
            <div className="h-1/2 flex flex-col justify-around">
              <p className="text-cyanBlue text-2xl text-center font-semibold">
                Location
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
