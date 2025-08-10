interface Props {
  children: React.ReactNode;
}

export default function SectionTopText({ children }: Props) {
  return (
    <div className="-mx-4 flex min-h-80 items-center justify-center bg-[var(--white)] px-4 py-8 sm:mx-0 sm:px-8 md:p-20">
      <p className="max-w-3xl text-justify text-xl">{children}</p>
    </div>
  );
}
