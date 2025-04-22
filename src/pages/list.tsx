import { title } from "@/components/primitives";
import MemeList from "@/components/memeList.tsx";

export default function ListPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-7xl text-center justify-center">
        <h1 className={title()}>Popular memes</h1>
        <MemeList />
      </div>
    </section>
  );
}
