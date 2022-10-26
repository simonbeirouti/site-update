import InterestCard from "./reuse/InterestCard";

const data = [
  {
    status: "High",
    summary: "Good coffee and vibes",
    date: "Jan 17, 2022",
    name: "Juno Eatery",
  },
  {
    status: "Medium",
    summary: "Good coffee and vibes",
    date: "Jan 17, 2022",
    name: "Juno Eatery",
  },
  {
    status: "Low",
    summary: "Good coffee and vibes",
    date: "Jan 17, 2022",
    name: "Juno Eatery",
  },
  {
    status: "Low",
    summary: "Good coffee and vibes",
    date: "Jan 17, 2022",
    name: "Juno Eatery",
  },
  {
    status: "Low",
    summary: "Good coffee and vibes",
    date: "Jan 17, 2022",
    name: "Juno Eatery",
  },
];

export default function InterestsList() {
  return (
    <div className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden bg-white border border-gray-200 rounded-xl">
            <div className="divide-y divide-gray-200">
              {data.map((item) => (
                <InterestCard
                  key={item.name}
                  status={item.status}
                  summary={item.summary}
                  date={item.date}
                  name={item.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
