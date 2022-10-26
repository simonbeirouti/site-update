import { useSession } from "@supabase/auth-helpers-react";
import MetaHead from "../components/utilities/MetaHead";
import Hero from "../components/Hero";
import Header from "../components/utilities/Header";
import AuthBox from "../components/utilities/AuthBox";
import HomeContent from "../components/HomeContent";

export default function Home() {
  const session = useSession();
  return (
    <>
      <MetaHead
        title="Simon Beirouti | Home"
        description="This is the home page"
      />
      {!session ? (
        <AuthBox />
      ) : (
        <>
          <Header />
          <Hero intro="Lives updates" text="Recent updates for you below!" />
          <HomeContent />
        </>
      )}
    </>
  );
}
