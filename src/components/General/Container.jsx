const Container = ({ className, children, ...props }, ref) => {
  return (
    <section
      className={
        "w-full py-16 md:py-20 2xl:py-24" + (className ? ` ${className}` : "")
      }
      ref={ref}
      {...props}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        {children}
      </div>
    </section>
  );
};

Container.displayName = "Container";

export default Container;
