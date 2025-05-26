import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  startCounting: boolean;
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2000,
  startCounting,
}) => {
  const [count, setCount] = useState(0);
  const startTimestamp = useRef<number | null>(null);

  useEffect(() => {
    if (!startCounting) {
      setCount(0);
      startTimestamp.current = null;
      return;
    }

    const step = (timestamp: number) => {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const progress = timestamp - startTimestamp.current;
      const progressRatio = Math.min(progress / duration, 1);
      setCount(Math.floor(progressRatio * end));
      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);

    return () => {
      startTimestamp.current = null;
    };
  }, [startCounting, end, duration]);

  return <>{count.toLocaleString()}</>;
};

const About: React.FC = () => {
  const metricsRef = useRef<HTMLDivElement | null>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (!metricsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true);
            observer.disconnect(); // start once
          }
        });
      },
      {
        threshold: 0.3, // 30% of element visible triggers animation
      }
    );

    observer.observe(metricsRef.current);

    return () => observer.disconnect();
  }, []);

  // Define your data with numeric values
  const metrics = [
    { label: "PROPERTY SOLD", value: 100000 },
    { label: "KHALSA PROPERTY DEALERS TEAM", value: 50 },
    { label: "HAPPY CUSTOMERS", value: 150000 },
    { label: "PROJECT HANDLED", value: 25 },
  ];

  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-12 px-6 md:px-20"
      style={{ backgroundImage: "url('/your-background.jpg')" }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left Text Column */}
        <div className="md:w-1/2 text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D7B865] mb-6">
            ABOUT KHALSA PROPERTY DEALERS
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-black">
            KHALSA PROPERTY DEALERS Properties is an accomplished best property
            dealer in Delhi operational in
            <strong> Rohini and Pitampura, New Delhi</strong> since 1982. With
            35+ years of experience and 8+ offices in Delhi and NCR, we’ve
            delivered millions of projects on time. We believe home is not a
            place—it’s a feeling. Our mission is to connect buyers, sellers, and
            agents through a next-gen platform, empowering them with the right
            tools at every step of the process. Whether you're buying your dream
            home or selling, we’ll help you make the most informed decision.
          </p>
          <a
            href="#"
            className="inline-block bg-[#D7B865] text-white font-semibold py-2 px-6 rounded shadow-md"
          >
            Read More
          </a>
        </div>

        {/* Metrics Section */}
        <div
          ref={metricsRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-1/2"
        >
          {metrics.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 text-[#D7B865] border border-[#D7B865] p-6 rounded shadow-md text-center"
            >
              <h3 className="text-2xl font-bold mb-2">
                <CountUp end={item.value} startCounting={startCount} />
                {item.value > 1000 ? "+" : ""}
              </h3>
              <p className="text-lg font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
