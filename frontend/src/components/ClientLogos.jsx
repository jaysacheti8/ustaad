import React from 'react';

const ClientLogos = () => {
  const clients = [
    "Danone",
    "Novo Nordisk",
    "Alkem Laboratories",
    "Asian Paints",
    "Fintoo",
    "Future Generali",
    "Lodha Group",
    "Godrej Tyson Foods",
    "Cipla",
    "Schbang",
    "SISL"
  ];

  // Duplicate for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-light text-center text-gray-900">
          Trusted by Leading Brands
        </h2>
      </div>

      <div className="relative">
        <div className="flex animate-scroll hover:pause-animation">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="flex-shrink-0 px-8 md:px-12 flex items-center justify-center"
              style={{ minWidth: '200px' }}
            >
              <div className="text-2xl md:text-3xl font-light text-gray-400 hover:text-gray-900 transition-colors duration-300 cursor-default">
                {client}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
