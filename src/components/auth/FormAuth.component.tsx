import InputAuth from "./InputAuth.component";
import LabelAuth from "./LabelAuth.component";

interface Field {
  text: string;
  inputName: string;
  type: string;
  placeHolder: string;
}

interface Props {
  formFields: Field[];
  formType: string;
}

export default function FormAuth({ formFields, formType }: Props) {
  return (
    <form className="space-y-6">
      {formFields.map((field, i) => (
        <div key={i}>
          <LabelAuth forHTML={field.inputName} text={field.text} />
          <InputAuth
            name={field.inputName}
            type={field.type}
            placeholder={field.placeHolder}
          />
        </div>
      ))}
      <button className="w-full bg-blue-700 rounded-lg p-2 text-white font-medium focus:ring-4 focus:outline-none focus:ring-blue-800" type="submit">
        {formType === "register" ? "Create account" : "Login to your account"}{" "}
      </button>
    </form>
  );
}
