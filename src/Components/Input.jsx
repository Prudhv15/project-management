import { forwardRef } from "react";
const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "w-full px-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <div className="mx-4 mt-4">
      <section className="flex flex-col">
        <label>{label}</label>
        {textarea ? (
          <textarea ref={ref} {...props} className={classes} />
        ) : (
          <input ref={ref} {...props} className={classes} />
        )}
      </section>
    </div>
  );
});

export default Input;
