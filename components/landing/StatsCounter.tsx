'use client';

import React, { useEffect, useRef, useState } from 'react';

interface StatItemProps {
  end: number;
  label: string;
  suffix?: string;
}

function StatItem({ end, label, suffix = '+' }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;
          const duration = 2000;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl lg:text-6xl font-bold text-[#0F172A] mb-2">
        {count}
        <span className="text-[#F97316]">{suffix}</span>
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
}

export default function StatsCounter() {
  const stats = [
    { end: 15, label: 'Years of Experience', suffix: '+' },
    { end: 1200, label: 'Projects Delivered', suffix: '+' },
    { end: 100, label: 'Happy Clients', suffix: '+' },
    { end: 3200, label: 'Team Members', suffix: '+' },
  ];

  return (
    <section className="bg-[#FDF7F2] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              end={stat.end}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
