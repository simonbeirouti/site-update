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
    <section className="py-6 sm:py-8 lg:py-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-4">
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
    </section>
  );
}
