"use client";

import { Card } from "@heroui/react";

const StatsSection = () => {
  const stats = [
    {
      number: "12K+",
      label: "Ideas Shared",
    },
    {
      number: "4.8K+",
      label: "Active Creators",
    },
    {
      number: "950+",
      label: "Collaborations",
    },
    {
      number: "99%",
      label: "Creative Satisfaction",
    },
  ];

  return (
    <section className="py-20 px-6 bg-content2 container mx-auto w-[80%]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4 text-mauve-600 dark:text-mauve-300">Our Community in Numbers</h2>
          <p className="text-default-500 max-w-2xl mx-auto text-mauve-500">
            Thousands of creators trust Idea Vault to save, share, and grow
            their best ideas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-mauve-500">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="shadow-md hover:shadow-xl transition duration-300 bg-linear-to-t from-pink-100 via-mauve-200 to-mauve-300"
            >
              <Card className="text-center py-10 bg-linear-to-t from-pink-100 via-mauve-200 to-mauve-300">
                <h3 className="text-4xl font-bold text-mauve-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-default-500">{stat.label}</p>
              </Card>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;