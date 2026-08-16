export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Global Services SARL</h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Global Services SARL is a Congolese-owned, multi-sector company established to support 
              the rapid development of key industries within the Democratic Republic of Congo. Since 
              its establishment, we have steadily expanded our service portfolio and operational reach.
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Through a client-focused approach and strong understanding of local market conditions, 
              we have positioned ourselves as a trusted service provider capable of handling complex 
              projects and transactions across the DRC.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">Our Vision & Mission</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Vision</h4>
                <p className="text-gray-700">
                  To be a leading Congolese multi-sector services company, recognized for excellence, 
                  integrity, and meaningful contribution to sustainable development.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Mission</h4>
                <p className="text-gray-700">
                  To provide high-quality supplies, construction services, and professional facilitation 
                  by leveraging local expertise, strong partnerships, and commitment to compliance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-linear-to-r from-blue-50 to-white p-8 rounded-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="font-bold text-gray-900 mb-2">Integrity</h4>
              <p className="text-gray-700 text-sm">Honest and transparent business practices</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⭐</div>
              <h4 className="font-bold text-gray-900 mb-2">Quality</h4>
              <p className="text-gray-700 text-sm">Reliable products and services</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">👔</div>
              <h4 className="font-bold text-gray-900 mb-2">Professionalism</h4>
              <p className="text-gray-700 text-sm">Competence and accountability</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤗</div>
              <h4 className="font-bold text-gray-900 mb-2">Partnership</h4>
              <p className="text-gray-700 text-sm">Long-term relationships</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌱</div>
              <h4 className="font-bold text-gray-900 mb-2">Sustainability</h4>
              <p className="text-gray-700 text-sm">Responsible growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
