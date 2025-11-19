import React from "react";
// FIX 1: tailwind-merge এখানে কাজ করবে না, তাই একটি সাধারণ twMerge হেল্পার ব্যবহার করা হলো।
const twMerge = (...classes) => classes.filter(Boolean).join(' ');


export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}) {
  const calculatedDuration = duration / speed;

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="absolute inset-0 pointer-events-none w-full h-full"
        >
          <circle
            className="stroke-1 stroke-white/20" // সামান্য উজ্জ্বল কক্ষপথ
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}

      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;

        return (
          <div
            key={index}
            style={{
              // FIX 2: সমস্ত CSS variable-এ (s, px) ইউনিট যোগ করা হলো
              "--duration": `${calculatedDuration}s`,
              "--radius": `${radius}px`,
              "--angle": angle,
              // FIX 3: Dynamic Sizing এর জন্য নতুন CSS variable
              "--size": `${iconSize}px`,
              width: `var(--size)`, 
              height: `var(--size)`,
            }}
            className={twMerge(
              // FIX 4: Orbit animation সঠিকভাবে সেট করা হলো
              `absolute flex transform-gpu items-center justify-center rounded-full 
               animate-[orbit_var(--duration)_linear_infinite]`,
              reverse ? "[animation-direction:reverse]" : "",
              className
            )}
            {...props}
          >
            {/* FIX 5: এখানে সরাসরি child রেন্ডার করা হলো (div/planet) */}
            {child}
          </div>
        );
      })}
    </>
  );
}