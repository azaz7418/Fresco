const Menu = () => {
  return (
    <div>
        {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}
      <div
        className=" relative bg-no-repeat bg-center bg-cover brightness-50"
        style={{
          backgroundImage:
            "url(https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2020/01/dine-out.jpg)",
        }}
      >
        <div className="px-8 py-32 z-30" >
          <div className="pl-6 ">
            <h1 className="text-7xl font-bold mb-5">Menu.</h1>
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

export default Menu;
