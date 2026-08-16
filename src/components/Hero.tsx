export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Your Trusted Partner in Mining, Industrial, and Infrastructure Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          Delivering high-quality chemical and industrial supplies, civil works, machinery services, 
          and multi-sector solutions across the Democratic Republic of Congo with integrity, safety, 
          and operational excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
            Explore Services
          </button>
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-50 transition">
            Get in Touch
          </button>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <div>
            <div className="text-3xl font-bold text-blue-600">12+</div>
            <p className="text-gray-600 mt-2">Service Lines</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-600">Multi-Sector</div>
            <p className="text-gray-600 mt-2">Capabilities</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">Local</div>
            <p className="text-gray-600 mt-2">Expertise</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-600">Reliable</div>
            <p className="text-gray-600 mt-2">Partnerships</p>
          </div>
        </div>
      </div>
    </section>
  );
}
