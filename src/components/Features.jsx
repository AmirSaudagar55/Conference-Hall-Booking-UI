import React from 'react';

function Features() {
  const features = ["Layers", "Sispyhus", "Capsule", "Catalog", "Spherule"];
  return (
    <section className="grid grid-cols-2 md:grid-cols-5 gap-4 p-8">
      {features.map((feature) => (
        <div key={feature} className="flex flex-col items-center text-center text-gray-600">
          <span className="text-xl">{feature}</span>
        </div>
      ))}
    </section>
  );
}

export default Features;
