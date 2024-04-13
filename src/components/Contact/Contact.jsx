import { BsPersonFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import css from "../Contact/Contact.module.css";

export default function Contact({ data }) {
  return (
    <>
      <div>
        <p className={css.text}>
          <BsPersonFill className={css.icon} /> {data.name}
        </p>
        <p className={css.text}>
          <BsTelephoneFill className={css.icon} /> {data.number}
        </p>
      </div>
      <div>
        <button className={css.button}>Delete</button>
      </div>
    </>
  );
}
