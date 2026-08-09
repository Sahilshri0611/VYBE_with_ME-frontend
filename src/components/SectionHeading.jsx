export default function SectionHeading({ eyebrow, title, action }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-5">
      <div>
        {eyebrow && <p className="mb-2 text-xs uppercase tracking-[.22em] text-zinc-500">{eyebrow}</p>}
        <h2 className="display-font text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      </div>
      {action}
    </div>
  );
}