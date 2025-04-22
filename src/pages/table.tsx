import { title } from "@/components/primitives";
import MemeTable from "@/components/memeTable.tsx";

export default function TablePage() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-10 px-4 sm:px-6 md:px-10">
      <div className="w-full max-w-6xl text-center">
        <h1 className={title()}>Popular memes</h1>
        <MemeTable />
      </div>
    </section>
  );
}
