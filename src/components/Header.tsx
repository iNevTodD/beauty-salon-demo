import { Menu } from "lucide-react";
import css from "./Header.module.css";
import Button from "./Button";
import Container from "./Container";

export default function Header() {
  return (
    <Container>
      <header className={css.header} id="header">
        <span className={css.logo}>mandle.</span>
        <div className={css.headerBtns}>
          <Button variant="primary" children="Book now" />
          <button className={css.burgerMenu} aria-label="Открыть меню">
            <Menu size={22} />
          </button>
        </div>
      </header>
    </Container>
  );
}
