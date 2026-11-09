import css from "./HeroVisual.module.css";
import RoundBadge from "./RoundBadge";
import { shades, type Shade } from "../data";
import Nails from "./Nails";
import ShadePicker from "./ShadePicker";

interface HeroVisualProps {
  selected: Shade;
  onSelect: (shade: Shade) => void;
}

export default function HeroVisual({ selected, onSelect }: HeroVisualProps) {
  return (
    <div className={css.visual}>
      <RoundBadge />
      <Nails />
      <ShadePicker shades={shades} selected={selected} onSelect={onSelect} />
    </div>
  );
}
