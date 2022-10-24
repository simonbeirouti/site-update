import { useSession } from "@supabase/auth-helpers-react";
import MetaHead from "../components/utilities/MetaHead";
import Hero from "../components/Hero";
import Header from "../components/utilities/Header";
import AuthBox from "../components/utilities/AuthBox";
import PostsList from "../components/PostsList";

export default function Posts() {
  const session = useSession();
  return (
    <>
      <MetaHead
        title="Simon Beirouti | Posts"
        description="This is the posts page"
      />
      {!session ? (
        <AuthBox />
      ) : (
        <>
          <Header />
          <Hero intro="Posts" text="Just some posts about different things!" />
          <PostsList />
        </>
      )}
    </>
  );
}
