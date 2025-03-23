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
    </div>
  );
};

export default AboutUs;
