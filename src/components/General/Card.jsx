export default function Card({ className, children, ...props }) {
  return (
    <div
      className={
        "bg-gray rounded-xl shadow-md dark:bg-gray-100 dark:shadow-2xl" +
        (className ? ` ${className}` : "")
      }
      {...props}
    >
      {children}
    </div>
  );
}
