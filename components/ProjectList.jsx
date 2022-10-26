import ProjectCard from "./reuse/ProjectCard";

const data = [
  {
    title: "How to write content about your photographs",
    date: "April 09, 2022",
    snippet:
      "Lorem ipsum dolor sit amet, consec tetur adip iscing elit quis auctor...",
    image:
      "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/4/thumbnail-1.png",
  },
  {
    title: "How to write content about your photographs",
    date: "April 09, 2022",
    snippet:
      "Lorem ipsum dolor sit amet, consec tetur adip iscing elit quis auctor...",
    image:
      "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/4/thumbnail-2.png",
  },
  {
    title: "How to write content about your photographs",
    date: "April 09, 2022",
    snippet:
      "Lorem ipsum dolor sit amet, consec tetur adip iscing elit quis auctor...",
    image:
      "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/4/thumbnail-3.png",
  },
  {
    title: "How to write content about your photographs",
    date: "April 09, 2022",
    snippet:
      "Lorem ipsum dolor sit amet, consec tetur adip iscing elit quis auctor...",
    image:
      "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/4/thumbnail-4.png",
  },
];

export default function Dynamic() {
  return (
    <section className="py-6 sm:py-8 lg:py-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((item) => (
            <ProjectCard
              key={item.title}
              title={item.title}
              date={item.date}
              snippet={item.snippet}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
