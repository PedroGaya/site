import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";

export function ButtonChip(props: { content: string; onClick: () => void }) {
  const { content, onClick } = props;
  return (
    <Chip
      as={Button}
      onClick={onClick}
      classNames={{
        base: "w-1/4 m-1 border dark:border-white/50",
      }}
      variant="flat"
    >
      {content}
    </Chip>
  );
}
