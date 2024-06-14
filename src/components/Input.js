import React, { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, isTextArea, width = "w-4/4", ...props },
  ref
) {
  return (
    <p className="flex flex-col my-4">
      <label>{label}</label>
      {isTextArea && (
        <textarea
          className="w-4/4 bg-zinc-300 h-16 px-2 py-1 rounded"
          ref={ref}
          {...props}
        />
      )}
      {!isTextArea && (
        <input
          className={`bg-zinc-300 h-8 px-2 rounded ${width}`}
          ref={ref}
          {...props}
        />
      )}
    </p>
  );
});

export default Input;
