const Footer = () => {
  return (
    <div
      className=" md:py-16 md:px-7 px-4 py-8  bg-cover bg-center flex flex-col gap-6 items-center z-10"
      style={{
        backgroundImage:
          "url(https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2021/01/Prepare-dish-image.jpg)",
      }}
    >
      <h1 className="text-4xl tracking-wider font-berkshire mt-6">Call for All Your Reservations</h1>
      <h1 className="text-4xl  font-semibold">+123-456-1010</h1>
      <p>Copyright © 2025 Italian Restaurant | Powered by Italian Restaurant</p>
    </div>
  );
};

export default Footer;
