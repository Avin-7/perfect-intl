import React from "react";
import v1 from "@/assets/v1.avif";
import v2 from "@/assets/v2.avif";
import v3 from "@/assets/v3.avif";
import v4 from "@/assets/v4.avif";
import v5 from "@/assets/v5.avif";
import v6 from "@/assets/v6.avif";
import v7 from "@/assets/v7.avif";
import v8 from "@/assets/v8.avif";
import v9 from "@/assets/v9.avif";
import v10 from "@/assets/v10.avif";
import v11 from "@/assets/v11.avif";
import v12 from "@/assets/v12.avif";
import v13 from "@/assets/v13.avif";
import v14 from "@/assets/v14.avif";
import v15 from "@/assets/v15.avif";
import v16 from "@/assets/v16.avif";

function ProductsFor() {
  const data = [
    {
      image: v1,
      name: "Skid Steer Loaders",
    },
    {
      image: v2,
      name: "Roller Compactors",
    },
    {
      image: v3,
      name: "Port & Container Handlers",
    },
    {
      image: v4,
      name: "Backhoe Loaders",
    },
    {
      image: v5,
      name: "Wheel Loaders",
    },
    {
      image: v6,
      name: "Sweeper & Scrubbers",
    },
    {
      image: v7,
      name: "Aerial Platforms",
    },
    {
      image: v8,
      name: "Tele Handlers",
    },
    {
      image: v9,
      name: "Cranes",
    },
    {
      image: v10,
      name: "Generators",
    },
    {
      image: v11,
      name: "Forklifts",
    },
    {
      image: v12,
      name: "Club & Golf Carts",
    },
    {
      image: v13,
      name: "Trucks & Trailer Parts",
    },
    {
      image: v14,
      name: "Transmission System",
    },
    {
      image: v15,
      name: "Tractors",
    },
    {
      image: v16,
      name: "Ground Service Equipments",
    },
  ];
  return (
    <section className="py-20">
      <div className="text-center mb-14">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
          Equipments & Machineries
        </h2>
        <p className="text-muted-foreground mt-3 max-w-3xl mx-auto">
          We can supply Spare Parts for all the below Equipment's of Any Origin,
          Make & Model.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          lg:grid-cols-4 
          gap-4 md:gap-6
        "
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="
                relative 
                rounded-2xl 
                overflow-hidden 
                shadow-md 
                hover:shadow-lg 
                transition-all
                flex justify-center
                bg-white
              "
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="w-3/4 h-72 sm:h-80 md:h-96 object-contain"
                loading="lazy"
              />

              {/* BOTTOM OVERLAY */}
              <div
                className="
                absolute 
                bottom-0 
                left-0 
                w-full 
                px-3 py-2
                bg-gradient-to-tl 
                from-sky-500/30 
                via-blue-50/30
                to-transparent
              "
              >
                <p className="text-primary text-lg font-semibold truncate">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsFor;
