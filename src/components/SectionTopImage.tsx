import type { JSX } from "react";

interface Props {
  imgSrc: string;
  imgAlt: string;
  imgWidth?: number;
  imgHeight?: number;
  tag?: keyof JSX.IntrinsicElements;
  lazy?: boolean;
}

export default function SectionTopImage({
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  tag: Wrapper = "h3",
  lazy = true,
}: Props) {
  return (
    <Wrapper className="-mb-1.5">
      <img src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} loading={lazy ? "lazy" : "eager"} />
    </Wrapper>
  );
}
