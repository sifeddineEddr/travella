export default function Footer() {
  return (
    <div className="flex justify-around items-center bg-darkBlue py-2">
      <p className="font-bold text-3xl text-white">TRAVELLA</p>
      <div className="flex w-2/5 justify-around md:w-1/3 md:py-1">
        <a href="http://www.facebook.com" target="_blank" rel="noreferrer">
          <img className="w-2/3" src="./images/fb-icon.svg" alt="fb-icon" />
        </a>
        <a href="http://www.instagram.com" target="_blank" rel="noreferrer">
          <img className="w-2/3" src="./images/ig-icon.svg" alt="ig-icon" />
        </a>
        <a href="http://www.twitter.com" target="_blank" rel="noreferrer">
          <img className="w-2/3" src="/./images/tw-icon.svg" alt="tw-icon" />
        </a>
      </div>
    </div>
  );
}
