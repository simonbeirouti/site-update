import "../styles/globals.css";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useSession } from "@supabase/auth-helpers-react";
import Layout from "../components/Layout";
import CTA from "../components/CTA";

function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  const session = useSession();

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      {session ? (
        <CTA />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </SessionContextProvider>
  );
}

export default MyApp;
