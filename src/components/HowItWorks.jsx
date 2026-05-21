"use client";

import { Card } from "@heroui/react";
import { FaLightbulb, FaShareAlt, FaUsers } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaLightbulb size={40} />,
      title: "Capture Your Ideas",
      description:
        "Write down your thoughts instantly before they disappear. Every big project starts with a small idea.",
    },
    {
      icon: <FaShareAlt size={40} />,
      title: "Share with Others",
      description:
        "Publish your ideas and let others discover, appreciate, and engage with your creativity.",
    },
    {
      icon: <FaUsers size={40} />,
      title: "Collaborate & Grow",
      description:
        "Connect with like-minded people, receive feedback, and turn concepts into reality.",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-4 text-mauve-600 dark:text-mauve-300">How Idea Vault Works</h2>
        <p className="text-mauve-400 max-w-2xl mx-auto">
          A simple place to collect your creativity, share inspiration, and
          collaborate with others.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <Card
            key={index}
            className="shadow-lg hover:scale-105 transition duration-300 bg-linear-to-t from-pink-100 via-mauve-200 to-mauve-300"
          >
            <div className="text-center p-8">
              <div className="flex justify-center mb-5 text-mauve-600">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-mauve-600">{step.title}</h3>
              <p className="text-mauve-400">{step.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;