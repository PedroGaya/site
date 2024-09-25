import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type BlogPost = {
  createdAt: Date;
  key: string;
  title: string;
  subtitle: string | null;
  content: string;
  category: string | undefined;
  series: string | undefined;
  tags: string[];
};
