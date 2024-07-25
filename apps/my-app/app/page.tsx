import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle";

export default function Home() {
  return (
    <main>
      <h1 className="underline">Hello World</h1>
      <Button>Click</Button>
      <ModeToggle />
    </main>
  );
}
