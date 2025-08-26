interface Props {
	forHTML: string;
	text: string;
}

export default function LabelAuth({forHTML, text}:Props) {
  return (
    <label
      className="block mb-2 text-sm font-medium text-white"
      htmlFor={forHTML}
    >
      {text}
    </label>
  );
}
