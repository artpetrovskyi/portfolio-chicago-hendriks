import type { JSX } from "react";

interface Props {
  imgSrc: string;
  imgAlt: string;
  imgWidth?: number;
  imgHeight?: number;
  tag?: keyof JSX.IntrinsicElements;
}

export default function SectionTopImage({
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  tag: Wrapper = "h3",
}: Props) {
  return (
    <Wrapper className="-mb-2.5">
      <img src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />
    </Wrapper>
  );
}
