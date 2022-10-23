import MetaHead from "../components/utilities/MetaHead";
import AuthBox from "../components/utilities/AuthBox";
import { useSession } from "@supabase/auth-helpers-react";

export default function ErrorPage() {
  const session = useSession();
  return (
    <>
      <MetaHead
        title="Simon Beirouti | 404"
        description="This is the 404 page. An error was made!"
      />
      {!session && <AuthBox />}
    </>
  );
}
