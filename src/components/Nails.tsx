import css from "./Nails.module.css";
import { nailsSizes } from "../data";

export default function Nails() {
  return (
    <div className={css.nails}>
      {nailsSizes.map((nail, index) => (
        <span
          className={css.nail}
          key={index}
          style={{ width: nail.w, height: nail.h }}
        ></span>
      ))}
    </div>
  );
}
