import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { CheckBadgeIcon } from '@heroicons/react/24/outline';

const goals = [
  { label: 'Launch 3 start-ups', achieved: false },
  { label: 'Build the best financial app', achieved: false },
  { label: 'Pitch the start-up to 10 founders', achieved: false },
  { label: 'Get 1000 users', achieved: false },
  { label: 'Grow the team to 10 people', achieved: false },
  { label: 'Raise $1M', achieved: false },
  { label: 'Learn how to build financial apps', achieved: false },
  { label: 'Learn investment banking', achieved: false },
  { label: 'Build a £100M business', achieved: false },
  { label: 'Make 20 friends rich', achieved: false },
  { label: 'Meet someone with 100M+ net worth', achieved: false },
  { label: 'Build a castle', achieved: false },
];

export default function WhySection() {
  return (
    <section id="why" className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#ffffff] px-4 md:px-12 py-12">
      {/* Left: About/Values */}
      <div className="flex-1 flex flex-col justify-center items-start max-w-lg mb-12 md:mb-0 md:mr-16">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center zen">Why I Code?</h2>
        <p className="text-xl text-gray-800 leading-relaxed zen">
          For me, software engineering is about more than just code—it's about creating tools that empower people, foster connection, and make the world 
          a little more accessible. I thrive on solving real problems, learning new technologies, and collaborating with diverse teams. My goal is to build 
          products that are not only functional, but delightful and inclusive for everyone. Every line of code is a step toward a future where technology 
          uplifts, educates, and inspires.
        </p>
      </div>
      {/* Right: Dream Tracker */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl">
        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center zen">Dreams Tracker</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 w-full">
          {goals.map((goal, idx) => (
            <li key={idx} className="flex items-center space-x-4 zen text-xl">
              <span>
                {goal.achieved ? (
                  <CheckBadgeIcon className="w-6 h-6 text-green-600" aria-label="Achieved" />
                ) : (
                  <CheckBadgeIcon className="w-6 h-6 text-gray-400" aria-label="In progress" />
                )}
              </span>
              <span className={`whitespace-nowrap ${goal.achieved ? 'text-green-900' : 'text-gray-500'}`}>{goal.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}