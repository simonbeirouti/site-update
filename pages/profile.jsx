import { useSession } from "@supabase/auth-helpers-react";
import MetaHead from "../components/utilities/MetaHead";
import Hero from "../components/Hero";
import Header from "../components/utilities/Header";
import AuthBox from "../components/utilities/AuthBox";
import Account from "../components/utilities/Account";

export default function Projects() {
  const session = useSession();
  return (
    <>
      <MetaHead
        title="Simon Beirouti | Profile"
        description="This is the visitor profile page"
      />
      {!session ? (
        <AuthBox />
      ) : (
        <>
          <Header />
          <Hero
            intro="Profile"
            text="Edit some of your information so I can get to know you better"
          />
          <Account session={session} />
        </>
      )}
    </>
  );
}
