import { useSession } from "@supabase/auth-helpers-react";
import MetaHead from "../components/utilities/MetaHead";
import Hero from "../components/Hero";
import Header from "../components/utilities/Header";
import AuthBox from "../components/utilities/AuthBox";
import InterestsList from "../components/InterestsList";

export default function Interests() {
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
          <Hero
            intro="My interests"
            text="Truthful ratings on different things that I experience in life."
          />
          <InterestsList />
        </>
      )}
    </>
  );
}
