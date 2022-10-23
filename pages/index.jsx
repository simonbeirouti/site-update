import MetaHead from "../components/utilities/MetaHead";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Header from "../components/utilities/Header";
import AuthBox from "../components/utilities/AuthBox";
import { useSession } from "@supabase/auth-helpers-react";

export default function Home() {
  const session = useSession();
  return (
    <>
      <MetaHead
        title="Simon Beirouti | Staging"
        description="This is the home page"
      />
      {!session ? (
        <AuthBox />
      ) : (
        <>
          <Header />
          <Hero
            intro="Welcome and thank you for visiting my website."
            text="Recent updates for you below!"
          />
          <Content />
        </>
      )}
    </>
  );
}
