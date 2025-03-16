import {  FaFacebookF, FaGooglePlusG, FaQuoteLeft, FaQuoteRight, FaTwitter } from "react-icons/fa";

/* eslint-disable react/no-unescaped-entities */
const testimonials = [
  {
    name: "Shamika Smith",
    image: "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/pic49-free-img.png",
    quote:
      "Aliquip habitant ea suscipit ea varius cras habitasse ligula doloremque cepteur vehicula iste nibh, mattis assumenda massa",
  },
  {
    name: "Jose Hatts",
    image: "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/pic50-free-img.png",
    quote:
      "Aliquip habitant ea suscipit ea varius cras habitasse ligula doloremque. Fuga reprehenderit quis unde soluta.",
  },
  {
    name: "Monica Tata",
    image: "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/pic51-free-img.png",
    quote: "Aliquip habitant ea suscipit ea varius cras habitasse ligula doloremque",
  },
];
const Home = () => {
  return (
    <div
      className="relative bg-no-repeat bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url(https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2020/01/fresco-pizza-top.jpg)",
      }}
    >
      {/* Overlay to control background brightness */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content Section */}
      <div className="relative flex items-center justify-around py-40 px-20">
        <img
          className="h-full"
          src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/fork-free-img.png"
          alt=""
        />
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/frill-free-img.png"
            alt=""
          />
          <h1 className="text-[160px] font-bold font-berkshire text-primary">Fresco</h1>
          <p className="text-accent text-[28px]">Italian Specialities</p>
          <div className=" flex items-center w-full max-w-4xl">
            <div className="flex-1 border-t border-gray-300"></div>
            <h2 className="px-6 text-primary text-2xl font-semibold tracking-widest">Good Food | Good Wine</h2>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
        </div>
        <img
          className="h-full"
          src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/knife-free-imge.png"
          alt=""
        />
      </div>

      {/* section 02 */}
      <div
        className="relative bg-cover bg-center bg-fixed bg-no-repeat py-20 px-5 "
        style={{
          backgroundImage:
            "url('https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/pic28-free-img.jpg')",
        }}
      >
        <div className="   mx-auto px-6 items-center grid grid-cols-7 ">
          {/* Left Content */}
          <div className="absolute inset-0 bg-white opacity-60"></div>
          <div className=" relative flex flex-col pl-7 col-span-3 gap-5 ">
            <p className="text-lg font-semibold italic text-gray-700">{"Country's Most Loved!"}</p>
            <h1 className="text-5xl font-bold text-gray-900 mt-2">Welcome</h1>
            <p className="text-2xl font-semibold text-gray-900 mt-4">
              We Are Locally Crafted Food & Wine Serving Since 1978.
            </p>
            <p className="text-gray-600 mt-4">
              Congue, gravida. Placeat nibh sunt semper elementum anim! Integer lectus debitis auctor. Molestias vivamus
              eligendi ut, cupidatat nisl iaculis etiam! Laboris aenean.
            </p>
            <button className="mt-6 bg-accent hover:bg-accent-hover text-white font-bold py-3 px-6 rounded-full flex items-center w-fit">
              ➜ More About Us
            </button>
          </div>

          {/* Right Content */}
          <div className=" grid grid-flow-col grid-cols-7 gap-6 mt-10 md:mt-0 col-span-4">
            {/* Image 1 */}
            <img
              className="shadow-lg w-full h-full col-span-3  relative"
              src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Pizza-slice.jpg"
              alt="Delicious Pizza"
            />

            {/* Image 2 with Overlay */}
            <div className="relative w-full col-span-4 ">
              <img
                className="shadow-lg w-full h-full"
                src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/food-table-meet.jpg"
                alt="Restaurant Dining"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end items-center text-white py-10 px-5">
                <h2 className="text-5xl font-bold">Hours</h2>
                <p className="mt-5 text-lg font-semibold">Monday - Saturday | 9AM - 1PM</p>
                <p className="mb-10 text-lg font-semibold">Saturday - Sunday | 9AM - 4AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

                                    {/* section 04 */}
      {/* part 01 */}
      <div className="bg-primary relative px-20 grid grid-cols-2 h-fit">
        <div className="relative w-full">
          <img
            className="w-full h-full"
            src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/pic34-free-img.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center   ">
            <div
              className=" w-full"
              style={{
                backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)",
              }}
            >
              <p className="text-2xl text-white font-semibold w-full py-3 text-center ">Good Food | Good Wine</p>
            </div>
          </div>
        </div>
        <div className="bg-primary flex flex-col items-start justify-around relative bg-opacity-50 px-10 text-black ">
          <h1 className="text-xl font-bold mb-4">Wednesday's Means</h1>
          <h2 className="text-5xl font-semibold my-8">Happy Hours!</h2>
          <p className="text-xl mb-4">
            Half Price Bottles of Wine and Six Tasty <br />
            Lunches for $9
          </p>
          <p className="text-sm mb-4">
            Congue, gravida. Placcat nibh sunt semper elementum animi Integer lectus debitis auctor. Nunc quisquam
            adipisicing leo, tempora ipsam pede nostrum. Turpis tempus fusce, sed, orci eligendi
          </p>

          <button className="bg-accent hover:bg-accent-hover text-white px-6 py-2 mt-10 rounded-full text-lg">
            Discover Offer
          </button>
        </div>
      </div>


      {/* part 02 */}
      <div
        className=" mx-auto  relative bg-white text-black py-10 bg-no-repeat px-5"
        style={{
          backgroundImage:
            "url('https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/quotes2-free-img.png')",
          backgroundPosition: "top left",
          // opacity: 0.1,
        }}
      >
        <div className="absolute inset-0 bg-white opacity-60"></div>
        <div className=" flex flex-col items-center justify-center">
          <img
            className=" relative"
            src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2021/03/parcelli.png"
            alt=""
          />
          <h2 className=" relative text-3xl font-bold text-center mb-8">Happy Customers!</h2>
          <div className=" relative max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg mb-6 flex items-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mr-6" />
                <div>
                  <div className="flex items-center text-gray-600">
                    <FaQuoteLeft className="mr-2" />
                    <p className="italic">{testimonial.quote}</p>
                    <FaQuoteRight className="ml-2" />
                  </div>
                  <p className="text-right mt-4 font-semibold">- {testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className=" relative text-center text-black font-bold pb-6">
            <h1>Check Out Our Reviews</h1>
            <div className="flex items-center justify-center text-white gap-5">
              <div className=" p-3 bg-accent hover:bg-accent-hover rounded-full">
                <FaFacebookF />
              </div>
              <div className=" p-3 bg-accent hover:bg-accent-hover rounded-full">
                <FaTwitter  />
              </div>
              <div className=" p-3 bg-accent hover:bg-accent-hover rounded-full">
                <FaGooglePlusG  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
