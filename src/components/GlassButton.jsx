const GlassButton = ({ children, type = "button", ...props }) => {
  return (
    <button type={type} {...props}
      className="
        group relative inline-flex items-center gap-3
        px-8 py-3 rounded-full
        text-sm font-medium text-white
        backdrop-blur-xl
        overflow-hidden
        transition-all duration-300 ease-out
        hover:-translate-y-[1px]
        active:translate-y-[1px]
      "
    >
      <span className="absolute inset-0 rounded-full button-bg" />

      <span className="absolute inset-0 rounded-full pointer-events-none">
        <span className="border-runner" />
      </span>

      <span className="relative z-10 flex items-center gap-2 text-md">
        {children}
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </button>
  );
}
export default GlassButton;
