import { useSession } from "@supabase/auth-helpers-react";
import MetaHead from "../components/utilities/MetaHead";
import Hero from "../components/Hero";
import Header from "../components/utilities/Header";
import AuthBox from "../components/utilities/AuthBox";
import ExperienceList from "../components/ExperienceList";

export default function Experience() {
  const session = useSession();
  return (
    <>
      <MetaHead
        title="Simon Beirouti | Experiences"
        description="This is the home page"
      />
      {!session ? (
        <AuthBox />
      ) : (
        <>
          <Header />
          <Hero
            intro="Experiences"
            text="Truthful ratings on different things that I experience in life."
          />
          <ExperienceList />
        </>
      )}
    </>
  );
}
