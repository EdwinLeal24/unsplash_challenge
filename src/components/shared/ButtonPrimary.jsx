import { button } from "./ButtonPrimary.module.css";

export default function ButtonPrimary({ text, click }) {
  return (
    <button className={button} onClick={click}>
      <strong>{text}</strong>
    </button>
  );
}
