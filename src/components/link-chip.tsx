import { Chip } from "@nextui-org/chip";
import { Link } from "@nextui-org/link";

export function LinkChip(props: { content: string; link: string }) {
  const { content, link } = props;
  return (
    <Chip
      as={Link}
      href={link}
      classNames={{
        base: "w-1/4 m-1 border dark:border-white/50",
      }}
      variant="flat"
    >
      {content}
    </Chip>
  );
}
