export default function Services() {
  const services = [
    {
      title: "Mining, Industrial & Chemical Supplies",
      items: ["Sulfuric Acid & Sulfur", "Grinding Balls", "Industrial Pumps", "Cement & Construction Materials"],
      icon: "⛏️"
    },
    {
      title: "Petroleum, Safety & Medical Supplies",
      items: ["Diesel & Petrol", "Spare Parts for Heavy Machinery", "Personal Protective Equipment", "Medical Equipment"],
      icon: "🛡️"
    },
    {
      title: "Construction & Civil Works",
      items: ["Road Construction", "Bridge Construction", "Drainage Systems", "Infrastructure Development"],
      icon: "🏗️"
    },
    {
      title: "Industrial Installation & Engineering",
      items: ["Air Conditioning Systems", "HDPE Piping Systems", "Metal Construction", "Borehole Drilling"],
      icon: "⚙️"
    },
    {
      title: "Agropastoral & Agricultural Services",
      items: ["Agricultural Inputs Supply", "Agropastoral Products", "Farm Development Projects"],
      icon: "🌾"
    },
    {
      title: "Mining Facilitation & Advisory",
      items: ["Mineral Trade Facilitation", "Legal Advisory", "Regulatory Compliance Guidance"],
      icon: "📊"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Our Services</h2>
        <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto">
          Comprehensive solutions across mining, construction, agriculture, and professional services 
          delivered with expertise, reliability, and compliance.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Unique Selling Points */}
        <div className="mt-20 bg-white p-12 rounded-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">The GS Difference</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-blue-600 text-lg mb-3">Local Expertise</h4>
              <p className="text-gray-700">Deep knowledge of DRC's business and regulatory environment</p>
            </div>
            <div>
              <h4 className="font-bold text-red-600 text-lg mb-3">Multi-Sector</h4>
              <p className="text-gray-700">Operates across mining, chemicals, construction, and agriculture</p>
            </div>
            <div>
              <h4 className="font-bold text-blue-600 text-lg mb-3">Reliability</h4>
              <p className="text-gray-700">Ensures commitments, timelines, and confidentiality</p>
            </div>
            <div>
              <h4 className="font-bold text-red-600 text-lg mb-3">Strong Network</h4>
              <p className="text-gray-700">Leverages local and international partnerships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
