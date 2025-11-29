/* eslint-disable react/no-unescaped-entities */
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: (
      <a href="tel:+123-456-1010" className="hover:text-accent transition-colors">
        +123-456-1010
      </a>
    ),
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: (
      <a href="mailto:info@fresco.com" className="hover:text-accent transition-colors">
        info@fresco.com
      </a>
    ),
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "123 Italian Street, Food District, City 12345",
  },
  {
    icon: <FaClock />,
    title: "Hours",
    description: "Mon-Sat: 11AM-10PM, Sun: 12PM-9PM",
  },
];

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-no-repeat bg-center bg-cover brightness-50"
        style={{
          backgroundImage:
            "url(https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/pic28-free-img.jpg)",
        }}
      >
        <div className="px-4 md:px-8 py-20 md:py-32 z-30">
          <div className="pl-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-berkshire mb-5 text-white">Contact Us</h1>
            <img
              src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/frill-free-img.png"
              alt=""
              className="mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Make a Reservation</h2>
                <p className="text-gray-600 mb-8">
                  Ready for an unforgettable Italian dining experience? Reserve your table now and let us take you on a
                  culinary journey through authentic Italian flavors.
                </p>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-black"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-black"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-black"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="Number of Guests"
                        min="1"
                        max="20"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-black"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-black"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="time"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-black"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <textarea
                      placeholder="Special Requests or Dietary Restrictions"
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none text-black"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    Reserve Table
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                  <p className="text-gray-600 mb-8">
                    Have questions about our menu, wine selection, or special events? We'd love to hear from you. Reach
                    out through any of the channels below.
                  </p>
                </div>

                <div className="space-y-6">
                  {info.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-xl">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <div className="text-gray-600">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Find Us</h3>
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <FaMapMarkerAlt className="text-4xl text-accent mx-auto mb-2" />
                      <p className="text-gray-600">Interactive Map Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
