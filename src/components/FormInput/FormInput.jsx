export default function FormInput({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  required,
  name,
  ...rest
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs text-dark-gray-2 font-semibold">
        {label} {required ? <span className="text-primary">*</span> : null}
      </span>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-[60px] w-full bg-light-gray-3 rounded px-4 text-sm text-dark-gray-2 placeholder:text-light-gray-2 outline-none focus:ring-2 focus:ring-primary/30"
        {...rest}
      />
    </label>
  );
}
