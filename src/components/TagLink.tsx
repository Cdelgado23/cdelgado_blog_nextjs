import Link from "next/link";
import { TagContent } from "../lib/tags";
import { Chip } from '@mui/material';

type Props = {
  tag: TagContent;
};
export default function Tag({ tag }: Props) {
  return (
    <Link href={"/posts/tags/[[...slug]]"} as={`/posts/tags/${tag.slug}`}>
      <Chip label={"#" + tag.name} variant="outlined"/>
    </Link>
  );
}
