import { menuData, menuItems, menuItems2 } from "./MenuItem";

const Menu = () => {
  return (
    <div>
      <div
        className=" relative bg-no-repeat bg-center bg-cover brightness-50"
        style={{
          backgroundImage:
            "url(https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2020/01/dine-out.jpg)",
        }}
      >
        <div className="px-8 py-32 z-30">
          <div className="pl-6 ">
            <h1 className="text-7xl font-bold font-berkshire mb-5">Menu.</h1>
            <img
              src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/frill-free-img.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* part 02 */}
      {menuData.map((itm, index) => {
        return index % 2 == 0 ? (
          <div key={index} className=" bg-primary py-4 px-5 md:px-20 md:py-10 flex items-center justify-center ">
            <div className=" flex items-center justify-center gap-5 md:w-[75%] flex-col md:flex-row">
              {/* Left Image Section */}
              <div className=" md:w-[45%] w-[80%] ">
                <img src={itm.image} alt="Pasta" className="rounded-xl shadow-2xl shadow-slate-500" />
              </div>
              {/* Right Menu Section */}
              <div className=" md:w-[55%] p-6 h-full">
                <div className=" space-y-5 py-5">
                  <h2 className="text-4xl text-black mb-4  font-berkshire">{itm.category}</h2>
                  <div className=" w-[25%]">
                    <img src={itm.underLine} alt="" />
                  </div>
                </div>
                <div className="space-y-7">
                  {/* Menu Items */}
                  {itm.items?.map((it, index) => {
                    return (
                      <div key={index} className="flex justify-between items-center gap-4">
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
        ) : (
          <div key={index} className=" bg-orange-50 md:px-20 md:py-10 py-4 px-5 flex items-center justify-center">
            <div className=" flex items-center justify-center gap-5 md:w-[75%] md:flex-row  flex-col-reverse">
              {/* Left Menu Section */}
              <div className=" md:w-[55%] p-6 h-full">
                <div className=" space-y-5 py-5">
                  <h2 className="text-4xl text-black mb-4  font-berkshire">{itm.category}</h2>
                  <div className=" w-[25%]">
                    <img src={itm.underLine} alt="" />
                  </div>
                </div>
                <div className="space-y-7">
                  {/* Menu Items */}
                  {itm.items?.map((it, index) => {
                    return (
                      <div key={index} className="flex flex-col md:flex-row justify-between items-center gap-4">
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
              {/* Right Image Section */}
              <div className=" md:w-[45%] w-[80%]">
                <img src={itm.image} alt="Pasta" className="rounded-xl shadow-2xl shadow-slate-500" />
              </div>
            </div>
          </div>
        );
      })}
      {/* Part 03 */}
      <div
        className="flex flex-col items-center bg-cover bg-center bg-gray-100 px-20 py-10"
        style={{
          backgroundImage:
            "url('https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/pic28-free-img.jpg')",
        }}
      >
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Six Tasty Lunches for $9</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[menuItems, menuItems2].map((menu, index) => (
            <div
              key={index}
              className="bg-cover bg-center rounded-2xl shadow-lg"
              style={{
                backgroundImage:
                  "url('https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/12/Pasta.jpg')",
              }}
            >
              <div className=" relative p-6 inset-0 rounded-2xl bg-black opacity-80 ">
                <div className="z-10">
                  {menu.map((item, idx) => (
                    <div key={idx} className="flex items-start  gap-4 mb-4">
                      <img className="text-2xl" src={item.icon} alt="" />
                      <span></span>
                      <div>
                        <h3 className="text-lg font-bold text-white">{item.category}</h3>
                        <p className="text-sm text-gray-200">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
