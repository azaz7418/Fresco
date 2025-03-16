import { menuData } from "./MenuItem";

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
        <div className="px-8 py-32 z-30">
          <div className="pl-6 ">
            <h1 className="text-7xl font-bold mb-5">Menu.</h1>
            <img
              src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/frill-free-img.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* part 02 */}

      <div className=" bg-gray-100 px-20 py-10 flex items-center justify-center ">
        <div className=" flex items-center justify-center gap-5 w-[75%]">
          {/* Left Image Section */}
          <div className=" w-[45%] ">
            <img src={menuData.image} alt="Pasta" className="rounded-xl" />
          </div>
          {/* Right Menu Section */}
          <div className=" w-[55%] p-6 h-full">
            <div className=" space-y-5 py-5">
              <h2 className="text-4xl text-black font-bold font-serif mb-4">Pasta</h2>
              <div className=" w-[25%]">
                <img src={menuData.underLine} alt="" />
              </div>
            </div>
            <div className="space-y-7">
              {/* Menu Items */}
              {menuData.items?.map((it, index) => {
                return (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl mb-3 text-black font-semibold">{it.title}</h3>
                      <p className="text-gray-500 text-sm">{it.description}</p>
                    </div>
                    <span className="text-xl text-black font-bold">{it.price}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
