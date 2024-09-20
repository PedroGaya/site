import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type BlogPost = {
  title: string;
  subtitle: string | null;
  content: string;
  tags: string[];
};
