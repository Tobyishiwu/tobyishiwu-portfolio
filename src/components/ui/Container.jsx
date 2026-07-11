import clsx from "clsx";

function Container({ children, className = "" }) {
  return (
    <div className={clsx("mx-auto w-[92%] max-w-7xl", className)}>
      {children}
    </div>
  );
}

export default Container;
