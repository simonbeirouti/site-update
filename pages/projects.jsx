import { useSession } from "@supabase/auth-helpers-react";
import MetaHead from "../components/utilities/MetaHead";
import Hero from "../components/Hero";
import Header from "../components/utilities/Header";
import AuthBox from "../components/utilities/AuthBox";
import ProjectList from "../components/ProjectList";

export default function Projects() {
  const session = useSession();
  return (
    <>
      <MetaHead
        title="Simon Beirouti | Projects"
        description="This is the projects page"
      />
      {!session ? (
        <AuthBox />
      ) : (
        <>
          <Header />
          <Hero
            intro="Projects"
            text="The various projects I'm creating a link directly to them"
          />
          <ProjectList />
        </>
      )}
    </>
  );
}
