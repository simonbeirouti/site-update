import ExperienceCard from "./reuse/ExperienceCard";

const data = [
  {
    status: "High",
    summary:
      "Good coffee and vibes amongst other things, just the change to chat and connect ",
    date: "Jan 17, 2022",
    name: "Juno Eatery",
  },
  {
    status: "Medium",
    summary:
      "Good coffee and vibes amongst other things, just the change to chat and connect ",
    date: "Jan 17, 2022",
    name: "Juno Eatery",
  },
  {
    status: "Low",
    summary:
      "Good coffee and vibes amongst other things, just the change to chat and connect ",
    date: "Jan 17, 2022",
    name: "Juno Eatery",
  },
  {
    status: "Low",
    summary:
      "Good coffee and vibes amongst other things, just the change to chat and connect ",
    date: "Jan 17, 2022",
    name: "Juno Eatery",
  },
  {
    status: "Low",
    summary:
      "Good coffee and vibes amongst other things, just the change to chat and connect ",
    date: "Jan 17, 2022",
    name: "Juno Eatery",
  },
];

export default function ExperienceList() {
  return (
    <section className="py-6 sm:py- lg:py-10 xl:py-12">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flow-root max-w-5xl mx-auto mt-12 space-y-20 sm:mt-16 lg:mt-20">
          <div className="-my-10 divide-y divide-gray-800">
            {data.map((item) => (
              <ExperienceCard
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
    </section>
  );
}
