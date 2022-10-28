import PostCard from "./reuse/PostCard";

const data = [
  {
    image:
      "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/2/thumbnail-1.png",
    title: "How to write content about your photographs",
    snippet:
      "Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Sit quis auctor odio arcu et dolor.",
    category: "Growth",
    date: "April 09, 2022",
  },
  {
    image:
      "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/2/thumbnail-2.png",
    title: "How to write content about your photographs",
    snippet:
      "Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Sit quis auctor odio arcu et dolor.",
    category: "Growth",
    date: "April 09, 2022",
  },
  {
    image:
      "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/2/thumbnail-3.png",
    title: "How to write content about your photographs",
    snippet:
      "Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Sit quis auctor odio arcu et dolor.",
    category: "Growth",
    date: "April 09, 2022",
  },
  {
    image:
      "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/2/thumbnail-4.png",
    title: "How to write content about your photographs",
    snippet:
      "Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Sit quis auctor odio arcu et dolor.",
    category: "Growth",
    date: "April 09, 2022",
  },
  {
    image:
      "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/2/thumbnail-5.png",
    title: "How to write content about your photographs",
    snippet:
      "Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Sit quis auctor odio arcu et dolor.",
    category: "Growth",
    date: "April 09, 2022",
  },
  {
    image:
      "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-list/2/thumbnail-6.png",
    title: "How to write content about your photographs",
    snippet:
      "Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Sit quis auctor odio arcu et dolor.",
    category: "Growth",
    date: "April 09, 2022",
  },
];

export default function PostsList() {
  return (
    <section className="py-6 sm:py-8 lg:py-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 mx-auto sm:gap-6 xl:max-w-none xl:grid-cols-2 ">
          {data.map((item) => (
            <PostCard
              key={item.title}
              image={item.image}
              title={item.title}
              snippet={item.snippet}
              category={item.category}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
