import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { CheckBadgeIcon } from '@heroicons/react/24/outline';

const goals = [
  { label: 'Build a castle', achieved: false },
  { label: 'Get a tattoo', achieved: false },
  { label: 'Go to the moon', achieved: false },
  { label: 'Create art for me', achieved: false },
  { label: 'Launch 3 start-ups', achieved: false },
  { label: 'Build the best financial app', achieved: false },
  { label: 'Get 1000 users', achieved: false },
  { label: 'Grow the team to 10 people', achieved: false },
  { label: 'Raise $1M', achieved: false },
  { label: 'Find a co-founder', achieved: false },
  { label: 'Make 20 friends rich', achieved: false },
  { label: 'Network $100M+ net worth', achieved: false },
];

export default function WhySection() {
  return (
    <section id="why" className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#ffffff] px-4 md:px-12 py-12">
      {/*Dream Tracker */}
      <div className="flex-1 flex flex-col items-start justify-center w-full max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-900 mb-8 zen">Dreams Tracker</h3>
        <ul className="flex flex-wrap w-full" style={{ rowGap: '2px', columnGap: '0px' }}>
          {goals.map((goal, idx) => (
            <li
              key={idx}
              className="flex items-center space-x-4 zen text-xl transition-transform duration-150 hover:translate-x-[3px]"
              style={{width: 'calc(50% - 0.75rem)'}}
            >
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