import Card from "./Card";

const cardData = [
  {
    date: "May 20, 2021",
    snippet: "How To Optimize Progressive Web Apps: Going Beyond The Basics",
    imageSrc:
      "https://cdn.rareblocks.xyz/collection/clarity/images/blog/1/blog-1.png",
    imageAlt: "Image of older women sitting with one of them showing a phone.",
    url: "/blog/1",
  },
  {
    date: "November 16, 2021",
    snippet: "How To Optimize Progressive Web Apps: Going Beyond The Basics",
    imageSrc:
      "https://cdn.rareblocks.xyz/collection/clarity/images/blog/1/blog-2.png",
    imageAlt: "Image of a lady doing a yoga pose with the beach begind her.",
    url: "/blog/2",
  },
];

export default function Content() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flow-root max-w-5xl mx-auto mt-12 space-y-20 sm:mt-16 lg:mt-20">
          <div className="-my-10 divide-y divide-gray-800">
            {cardData.map((card) => (
              <Card
                key={card.date}
                date={card.date}
                snippet={card.snippet}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                url={card.url}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
