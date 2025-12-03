const Footer = () => {
  return (
    <div
      className="py-8 px-4 sm:py-12 sm:px-6 md:py-16 md:px-7 lg:py-20 lg:px-8 bg-cover bg-center flex flex-col gap-4 sm:gap-6 items-center z-10"
      style={{
        backgroundImage:
          "url(https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2021/01/Prepare-dish-image.jpg)",
      }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider font-berkshire mt-4 sm:mt-6">
        Call for All Your Reservations
      </h1>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">+123-456-1010</h1>
      <p className="text-sm sm:text-base text-center">
        Copyright © 2025 Italian Restaurant | Powered by Italian Restaurant
      </p>
    </div>
  );
};

export default Footer;
