import { useState } from "react";

import { Meme } from "@/config/defaultMemeList.ts";
import MemeCard from "@/components/memeCard.tsx";
import { getMemes } from "@/store/store.ts";

const MemeList = () => {
  const [items] = useState(getMemes);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
      {items.map((item: Meme) => (
        <MemeCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MemeList;
