interface Props {
	text: string;
}

function Button({ text }: Props) {
  return (
	<button className={`py-2 px-8 text-amber-50 rounded-md bg-blue-400`}>{text}</button>
  )
}
export default Button