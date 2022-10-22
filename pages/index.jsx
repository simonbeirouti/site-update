import MetaHead from "../components/utilities/MetaHead";
import Hero from "../components/Hero";
import Content from "../components/Content";

export default function Home() {
  return (
    <>
      <MetaHead
        title="Simon Beirouti | Home"
        description="This is the home page"
      />
      <Hero
        intro="Welcome and thank you for visiting my website."
        text="Recent updates for you below!"
      />
      <Content />
    </>
  );
}
