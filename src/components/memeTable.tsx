import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { useCallback, useState } from "react";
import { useDisclosure } from "@heroui/modal";
import { Button } from "@heroui/react";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { getMemes, saveMemes } from "@/store/store.ts";
import { Meme } from "@/config/defaultMemeList.ts";
import { columns } from "@/config/tableConfigs.ts";
import EditModal from "@/components/modal.tsx";

type ColumnKey = (typeof columns)[number]["key"];

const MemeTable = ({}) => {
  const [memes, setMemes] = useState<Meme[]>(getMemes());
  const [selectedItem, setSelectedItem] = useState<Meme | null>(null);

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleSave = (updatedItem: Meme) => {
    const updatedMemes = memes.map((meme) =>
      meme.id === updatedItem.id ? updatedItem : meme,
    );

    setMemes(updatedMemes);
    saveMemes(updatedMemes);
    onClose();
  };

  const renderCell = useCallback((item: Meme, columnKey: ColumnKey) => {
    switch (columnKey) {
      case "actions":
        return (
          <Button
            color="primary"
            onPress={() => {
              setSelectedItem(item);
              onOpen();
            }}
          >
            Edit
          </Button>
        );

      case "image":
        return (
          <div className="max-w-full overflow-hidden">
            <Link
              isExternal
              className="block truncate whitespace-nowrap overflow-hidden text-ellipsis hover:underline"
              color="foreground"
              href={item.image}
              title={item.image}
              underline="none"
            >
              {item.image}
            </Link>
          </div>
        );

      default:
        return item[columnKey as keyof Meme];
    }
  }, []);

  const imageColumnCellClass =
    "w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] truncate";

  return (
    <>
      <Table
        aria-label="Meme table"
        classNames={{
          wrapper: "w-full overflow-x-auto mt-4",
          table: "min-w-full max-w-full table-auto",
        }}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={memes}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell
                  className={clsx({
                    [imageColumnCellClass]: columnKey === "image",
                  })}
                >
                  {renderCell(item, columnKey as ColumnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>

      {selectedItem && (
        <EditModal
          isOpen={isOpen}
          item={selectedItem}
          onOpenChange={onOpenChange}
          onSave={handleSave}
        />
      )}
    </>
  );
};

export default MemeTable;
