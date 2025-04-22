import { Meme, memeList } from "@/config/defaultMemeList.ts";

export const getMemes = (): Meme[] => {
  let memes = localStorage.getItem("memes");

  if (!memes) {
    saveMemes(memeList);

    return memeList;
  }

  return JSON.parse(memes);
};

export const saveMemes = (memes: Meme[]): void => {
  localStorage.setItem("memes", JSON.stringify(memes));
};
