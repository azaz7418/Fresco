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
            <h1 className="md:text-7xl text-3xl text-center md:text-start md:font-bold font-semibold font-berkshire mb-5">About Us.</h1>
            <img
              src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/frill-free-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
