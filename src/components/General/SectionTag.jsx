export default function SectionTag({ label, className, ...props }) {
  return (
    <div
      className={
        "flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1" +
        (className ? ` ${className}` : "")
      }
      {...props}
    >
      <span className="body3 font-medium">{label}</span>
    </div>
  );
}
