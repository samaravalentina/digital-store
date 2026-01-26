export default function FilterGroup({
  title,
  inputType,
  options,
}) {
  return (
    <div className="flex flex-col gap-3">

      <h4 className="text-sm text-dark-gray-2 font-medium">
        {title}
      </h4>

      <div className="flex flex-col gap-2">
        {options.map((option, index) => (
          <label
            key={index}
            className="flex items-center gap-3 text-sm text-dark-gray-2 cursor-pointer"
          >
            <input
              type={inputType}
              value={option.value || option.text}
              className="w-[22px] h-[22px] accent-primary"
            />
            {option.text}
          </label>
        ))}
      </div>
    </div>
  );
}
