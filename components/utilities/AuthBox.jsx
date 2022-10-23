import CTA from "./CTA";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

export default function AuthBox() {
  const supabase = useSupabaseClient();
  return (
    <>
      <CTA />
      <div className="max-w-md mx-auto content-center p-10 ">
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
      </div>
    </>
  );
}
