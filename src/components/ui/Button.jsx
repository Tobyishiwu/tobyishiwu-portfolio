import clsx from "clsx";
import { Link } from "react-router-dom";

function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const styles = clsx(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
    {
      "bg-violet-600 text-white hover:bg-violet-500": variant === "primary",
      "border border-white/10 bg-white/5 text-white hover:bg-white/10":
        variant === "secondary",
      "text-violet-400 hover:text-violet-300": variant === "ghost",
    },
    className
  );

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={styles} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}

export default Button;
