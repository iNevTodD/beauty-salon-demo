import css from "./Facts.module.css";

export default function Facts() {
  return (
    <ul className={css.facts}>
      <li className={css.fact}>
        <span className={css.factValue}>3 weeks</span>
        <span className={css.factLabel}>the nail polish lasts</span>
      </li>
      <li className={css.fact}>
        <span className={css.factValue}>1:1</span>
        <span className={css.factLabel}>master and client</span>
      </li>
      <li className={css.fact}>
        <span className={css.factValue}>120+</span>
        <span className={css.factLabel}>shades</span>
      </li>
    </ul>
  );
}
