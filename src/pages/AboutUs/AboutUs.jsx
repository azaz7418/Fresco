import { chefs } from "../menu/MenuItem";

const AboutUs = () => {
  return (
    <div>
      <div
        className=" relative bg-no-repeat bg-center bg-cover brightness-50"
        style={{
          backgroundImage:
            "url(https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/About-us-banner.jpg)",
        }}
      >
        <div className="md:px-8 md:py-32 z-30">
          <div className="pl-6 grid items-center justify-center md:justify-start ">
            <h1 className="md:text-7xl text-3xl text-center md:text-start md:font-bold font-semibold font-berkshire mb-5">
              About Us.
            </h1>
            <img
              src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/frill-free-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* section 02 */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="lg:w-1/2">
          <img
            src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2021/03/parcelli.png"
            alt="Leaf Icon"
            className=" mb-4"
          />
          <h2 className="text-2xl md:text-2xl text-black font-bold mb-4">
            Our Restaurant Is A Collective Of Amazing People Striving To Build Delightful Italian Cuisine.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Lectus fringilla occaecat iste pretium fugiat convallis a, veniam conubia qui leo quod sodales! Nemo
            hendrerit laborum, error! Reiciendis, voluptas officiis. Placerat ratione blanditiis! Habitasse dui proin
            cupidatat fringilla, ipsum dolor quidem, convallis nam.
          </p>
          <p className="text-orange-500 text-5xl font-serif float-left mr-2">R</p>
          <p className="text-gray-600 leading-relaxed">
            el nulla pulvinar montes suspendisse, turpis. Elementum nibh, autem nulla ullam. Proident, hac ratione
            platea! Libero nam, harum quisque turpis fames sollicitudin blanditiis est aliquam aptent blandit class.
          </p>
        </div>

        {/* Right: Images Grid */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          <img
            src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/elementor/thumbs/Serving-chef-oi0astk6nghnyuecvvcnt5rykkia9bojiq7x4xk93k.jpg"
            alt="Chef Cooking"
            className="rounded-2xl w-full h-full object-cover"
          />
          <div className=" grid gap-5">
            <img
              src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/elementor/thumbs/Red-wine-img-oi0ax5le5ycf75e9wdefnj8f9aw7dn02gr1co2i16w.jpg"
              alt="Wine Glasses"
              className="rounded-2xl w-full h-72 object-cover"
            />
            <img
              src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/elementor/thumbs/pic34-free-img-o8mber8yudr26qzmrtm45h9j0sz2g5ol7km7c8jeko.jpg"
              alt="Restaurant Dining"
              className="rounded-2xl w-full h-72 object-cover "
            />
          </div>
        </div>
      </section>
      {/* section 03 */}
      <section
        // className=" text-white py-12 px-6"
        className=" relative bg-no-repeat bg-center bg-cover py-4 px-5 md:px-20 md:py-10"
        style={{
          backgroundImage:
            "url(https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/About-us-banner.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="text-center mb-8">
          <h2 className=" relative text-3xl font-semibold">Our Chefs</h2>
        </div>
        <div className=" relative grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
          <div className="col-span-1 md:col-span-3 grid grid-cols-3 ">
            {chefs.slice(0, 3).map((chef, index) => (
              <div key={index} className="relative bg-black  border-2 border-orange-500">
                <img src={chef.image} alt={chef.name} className="w-full h-full object-cover opacity-80" />
                <div
                  className="absolute bottom-0 left-0 flex flex-col items-center justify-end w-full h-2/4 p-4"
                  style={{
                    backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)",
                  }}
                >
                  <h3 className="text-lg font-bold">{chef.name}</h3>
                  <p className="text-sm italic">{chef.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2  ">
            <div className="relative bg-black  overflow-hidden border-2 border-orange-500">
              <img src={chefs[3].image} alt={chefs[3].name} className="w-full h-full object-cover opacity-80" />
              <div
                className="absolute bottom-0 left-0 flex flex-col items-center justify-end w-full h-2/4 p-4"
                style={{
                  backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)",
                }}
              >
                <h3 className="text-lg font-bold">{chefs[3].name}</h3>
                <p className="text-sm italic">{chefs[3].role}</p>
              </div>
            </div>
            <div className="relative bg-black  overflow-hidden border-2 border-orange-500 flex items-center justify-center">
              <img
                src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2020/02/chef05-free-img.jpg"
                alt="Interns"
                className="w-full h-64 object-cover opacity-80"
              />
              <div
                className="absolute bottom-0 left-0 flex flex-col items-center justify-end w-full h-2/4 p-4"
                style={{
                  backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)",
                }}
              >
                <h3 className="text-lg font-bold">Looking For Management Interns</h3>
                <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded">Apply Today!</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
