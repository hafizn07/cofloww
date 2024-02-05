import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-y-4">
        This is a screen for authenticatied users only
      </div>
      <div>
        <UserButton />
      </div>
    </main>
  );
}
