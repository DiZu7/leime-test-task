import { Card, CardHeader, CardBody, Image, Link } from "@heroui/react";
import { Button } from "@heroui/button";

import { Meme } from "@/config/defaultMemeList.ts";
import { HeartIcon } from "@/components/icons.tsx";

type MemeCardProps = {
  item: Meme;
};

const MemeCard: React.FC<MemeCardProps> = ({ item }) => (
  <Card key={item.id} className="py-4">
    <CardHeader className="pb-0 pt-2 px-4 flex justify-between items-start">
      <h4 className="font-bold text-large">{item.name}</h4>
      <div className="flex gap-2 items-center">
        <Button
          isIconOnly
          className="text-default-900/60 -translate-y-2 translate-x-2"
          radius="full"
          variant="light"
        >
          <HeartIcon fill="none" />
        </Button>
        {item.likes}
      </div>
    </CardHeader>

    <CardBody className="overflow-visible py-2">
      <Image
        alt="meme image"
        className="w-full h-64 object-cover rounded"
        src={item.image}
        width={300}
      />
      <Link
        isBlock
        isExternal
        className="mt-2"
        color="foreground"
        href={item.image}
      >
        Click to enlarge image
      </Link>
    </CardBody>
  </Card>
);

export default MemeCard;
