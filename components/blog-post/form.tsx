import { ChangeEvent, SyntheticEvent, useState } from "react";
import Input from "../input";
import style from "@/styles/form.module.css";

type FormData = {
  name: string;
  text: string;
};

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    text: "",
  });

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      formData.name
        ? `Name is ${formData.name} and text is ${formData.text}`
        : `Text is ${formData.text}`
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <form className={style.formContainer} onSubmit={handleSubmit}>
      <h3>Write a new comment</h3>
      <Input
        label="Name"
        name="name"
        value={formData?.name}
        onChange={handleChange}
      />
      <Input
        label="Text"
        name="text"
        required={true}
        value={formData?.text}
        onChange={handleChange}
      />
      <button className={style.submitButton} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
