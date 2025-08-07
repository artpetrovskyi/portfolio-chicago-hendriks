import type { JSX } from "react";

interface Props {
  imgSrc: string;
  imgAlt: string;
  imgWidth?: number;
  imgHeight?: number;
  children: string;
  tag?: keyof JSX.IntrinsicElements;
}

export default function SectionHeader({
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  children,
  tag: Wrapper = "h3",
}: Props) {
  return (
    <div>
      <Wrapper>
        <img src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />
      </Wrapper>

      <div className="-mx-4 -mt-2 flex min-h-80 items-center justify-center bg-[var(--white)] px-4 py-8 sm:mx-0 sm:px-8 md:p-20">
        <p className="max-w-3xl text-justify text-xl">{children}</p>
      </div>
    </div>
  );
}
