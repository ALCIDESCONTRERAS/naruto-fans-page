import FormAuth from "../../components/auth/FormAuth.component";

export const LoginPage = () => {
 const registerFields = [
     {text: "Email:", inputName:"email", type: "email", placeHolder: "example@gmail.com"},
     {text: "Password:", inputName:"password", type: "password", placeHolder: "********"},
   ];
 
   return (
     <main className="w-full max-w-sm mx-auto my-40 p-4 rounded-lg shadow-sm sm:p-6 md:p-8 bg-gray-800 border-gray-700">
       <FormAuth formFields={registerFields} formType="login" />
     </main>
   );
 };