import MetaHead from "../components/MetaHead";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <MetaHead
        title="Simon Beirouti | Home"
        description="This is the home page"
      />
      <CTA />
    </div>
  );
}
