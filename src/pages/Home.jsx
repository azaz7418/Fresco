/* eslint-disable react/no-unescaped-entities */

const Home = () => {
  return (
    <div
      className="relative bg-no-repeat bg-cover bg-fixed"
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
          <h1 className="text-[160px] font-bold text-white">Fresco.</h1>
          <p className="text-accent text-[28px]">Italian Specialities</p>
          <h4 className="text-[1.866rem] font-semibold">
            <span className="h-1 w-6 bg-white"></span>Good Food | Good wine
          </h4>
        </div>
        <img
          className="h-full"
          src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/knife-free-imge.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
