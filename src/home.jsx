export default function Home() {
  return (
    <div
      style={{ backgroundImage: "url('/images/landing-img.png')" }}
      className="bg-center bg-cover bg-no-repeat bg-image-url w-full h-full py-20"
      id="home"
    >
      <div
        id="header"
        className="w-full absolute flex justify-around md:items-baseline"
        style={{ top: ".5rem" }}
      >
        <div
          id="hamburger-menu"
          className="flex flex-col justify-around cursor-pointer md:hidden"
        >
          <img src="/images/bar.svg" className="my-1" alt="bar" />
          <img src="/images/bar.svg" className="my-1" alt="bar" />
          <img src="/images/bar.svg" className="my-1" alt="bar" />
        </div>
        <p className="font-bold text-white text-4xl">TRAVELLA</p>
        <div className="hidden md:flex md:justify-around text-white gap-5 items-center font-bold text-xl">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#destinations">Destinations</a>
          <a href="#booking">Booking</a>
        </div>
      </div>

      <div id="body">
        <p className="text-center font-bold text-3xl text-white drop-shadow-lg shadow-black">
          Welcome To Travella
        </p>
        <p className="text-center text-lg text-white drop-shadow-lg shadow-black">
          The Moroccan Beauty Awaits You
        </p>
      </div>
    </div>
  );
}
