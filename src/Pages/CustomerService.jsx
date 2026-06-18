import {
  FaBox,
  FaUndo,
  FaMapMarkerAlt,
  FaCrown,
  FaCreditCard,
  FaUserCog,
  FaTabletAlt
} from "react-icons/fa";

function CustomerService() {
  const services = [
    {
      icon: <FaBox />,
      title: "Your Orders",
      desc1: "Track packages",
      desc2: "Edit or cancel orders",
    },
    {
      icon: <FaUndo />,
      title: "Returns and Refunds",
      desc1: "Return or exchange items",
      desc2: "Print return mailing labels",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Manage Addresses",
      desc1: "Update your addresses",
      desc2: "Add address, landmark details",
    },
    {
      icon: <FaCrown />,
      title: "Manage Prime",
      desc1: "View your benefits",
      desc2: "Membership details",
    },
    {
      icon: <FaCreditCard />,
      title: "Payment Settings",
      desc1: "Add or edit payment methods",
      desc2: "Change expired debit or credit card",
    },
    {
      icon: <FaUserCog />,
      title: "Account Settings",
      desc1: "Change your email or password",
      desc2: "Update login information",
    },
    {
      icon: <FaTabletAlt />,
      title: "Digital Services and Device Support",
      desc1: "Find device help and support",
      desc2: "Troubleshoot device issues",
    },
  ];

  return (
    <div className="customer-service-page">
      <h1>Hello. What can we help you with?</h1>

      <h2>Some things you can do here</h2>

      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc1}</p>
            <p>{service.desc2}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerService;