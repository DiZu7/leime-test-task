export type Meme = {
  id: number;
  name: string;
  image: string;
  likes: number;
};

export const memeList: Meme[] = [
  {
    id: 1,
    name: "meme 1",
    image:
      "https://img.tsn.ua/cached/581/tsn-5158ca2e1423d82bb1a288ac9a4ee131/thumbs/x/f6/c0/23bdc0415d325ed1c00c1d5e7658c0f6.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 2,
    name: "meme 2",
    image:
      "https://img.tsn.ua/cached/585/tsn-5158ca2e1423d82bb1a288ac9a4ee131/thumbs/x/9c/d5/ab4674199d74800e279aa0075367d59c.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 3,
    name: "meme 3",
    image:
      "https://img.tsn.ua/cached/581/tsn-5158ca2e1423d82bb1a288ac9a4ee131/thumbs/608xX/bc/37/7306ca249def1471e550f31f244a37bc.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 4,
    name: "meme 4",
    image:
      "https://rau.ua/wp-content/uploads/2022/12/320401666_447928947381218_2337701617383848219_n.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 5,
    name: "meme 5",
    image:
      "https://nus.org.ua/wp-content/uploads/2022/12/73520541-de52e02fdae6c184e87a0bcc659db0bc-1-e1672410811845.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 6,
    name: "meme 6",
    image: "https://nus.org.ua/wp-content/uploads/2022/12/word-image-62.jpeg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 7,
    name: "meme 7",
    image: "https://nus.org.ua/wp-content/uploads/2022/12/word-image-71.jpeg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 8,
    name: "meme 8",
    image: "https://nus.org.ua/wp-content/uploads/2022/12/word-image-72.jpeg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 9,
    name: "meme 9",
    image:
      "https://cdn4.suspilne.media/images/resize/1040x1.78/e97d0453bb4b23e6.jpg",
    likes: Math.floor(Math.random() * 100),
  },
  {
    id: 10,
    name: "meme 10",
    image:
      "https://www.watchmojo.com/uploads/thumbs720/Fi-T-Top10-TV-Scenes-That-Became-Memes-720p30.jpg",
    likes: Math.floor(Math.random() * 100),
  },
];
