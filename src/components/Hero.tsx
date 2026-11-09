import css from "./Hero.module.css";
import Container from "./Container";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import HeroVisual from "./HeroVisual";
import Facts from "./Facts";
import type { Shade } from "../data";

interface HeroProps {
  selected: Shade;
  onSelect: (shade: Shade) => void;
}

function Hero({ selected, onSelect }: HeroProps) {
  return (
    <Container>
      <section className={css.hero} id="hero">
        <div className={css.heroTextContent}>
          <p className={css.eyebrow}>Nail Salon · Prague 2, Vinohrady</p>
          <h1 className={css.title}>
            A manicure that{" "}
            <span className={css.titleAccent}>makes you want</span> to look at
            your hands
          </h1>
          <p className={css.heroText}>
            A neat finish, sterile tools, and a manicure that lasts up to three
            weeks. No rush: one technician per client.
          </p>
          <div className={css.heroBtns}>
            <Button>
              Book online <ArrowRight size={18} />
            </Button>
            <Button variant="outline">Prices</Button>
          </div>
          <Facts />
        </div>
        <HeroVisual selected={selected} onSelect={onSelect}/>
      </section>
    </Container>
  );
}

export default Hero;
