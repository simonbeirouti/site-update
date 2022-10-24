import { Suspense } from "react";
import CTA from "./CTA";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

export default function AuthBox() {
  const supabase = useSupabaseClient();
  return (
    <>
      <CTA />
      <div className="max-w-lg mx-auto content-center p-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: "orange",
                    brandAccent: "red",
                    brandButtonText: "black",
                  },
                },
              },
            }}
            theme="light"
          />
        </Suspense>
      </div>
    </>
  );
}
