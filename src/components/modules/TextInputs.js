import { p2e } from "@/utils/replaceNumbers";

function TextInputs({
  data,
  setData,
  name,
  label,
  textArea = false,
  type = "text",
}) {
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: p2e(value) });
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label} :</label>
      {textArea ? (
        <textarea
          type={type}
          name={name}
          id={name}
          value={data[name]}
          onChange={changeHandler}
          rows={3}
          maxLength={1500}
          className="text-gray-900 p-2 rounded-md bg-slate-300 text-lg"
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          value={data[name]}
          onChange={changeHandler}
          className="text-gray-900 p-2 rounded-md bg-slate-300 text-lg"
        />
      )}
    </div>
  );
}

export default TextInputs;
