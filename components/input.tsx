import { ChangeEvent } from "react";
import style from "@/styles/form.module.css";

type InputProps = {
  label: string;
  required?: boolean;
  value: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, required, value, name, onChange }: InputProps) => {
  return (
    <div className={style.inputContainer}>
      <label className={style.label}>{label}</label>
      <input
        type="text"
        value={value}
        name={name}
        onChange={onChange}
        required={required}
        className={style.input}
      />
    </div>
  );
};

export default Input;
