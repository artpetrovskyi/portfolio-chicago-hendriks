interface Props {
  children: string;
}

export default function SectionTopText({ children }: Props) {
  return (
    <div className="-mx-4 sm:mx-0 flex min-h-80 items-center justify-center bg-[var(--white)] px-4 py-8  sm:px-8 md:p-20">
      <p className="max-w-3xl text-justify text-xl">{children}</p>
    </div>
  );
}
