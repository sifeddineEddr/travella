import Data from './destinations-data.js';

export default function Destinations() {
  const categoriesListing = Data.map((category) => {
    return (
      <div
        style={{ backgroundImage: category.image }}
        className="cursor-pointer bg-center bg-cover bg-no-repeat bg-image-url w-4/5 h-full my-8 flex items-center justify-center mx-auto py-4 rounded-sm drop-shadow-md"
        // onClick={() => destinationsDisplay(category.category_title)}
      >
        <p className='font-semibold text-3xl text-white'>{category.category_title}</p>
      </div>
    );
  });

  return (
    <div id="destinations" className="py-4">
      <div className="text-xl font-semibold text-center md:text-2xl">
        Destinations
      </div>
      <hr className="border-2 border-cyanBlue w-20 rounded-lg mx-auto" />
      <div className="md:flex gap-5 w-5/6 mx-auto">{categoriesListing}</div>
    </div>
  );
}
