interface Props {
  name: string;
  type: string;
  placeholder: string;
}

export default function InputAuth({ name, placeholder, type }: Props) {
  return (
    <input
      type={type}
      className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
      name={name}
      id={name}
      placeholder={placeholder}
    />
  );
}
