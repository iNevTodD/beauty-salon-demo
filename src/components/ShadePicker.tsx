import css from "./ShadePicker.module.css";
import type { Shade } from "../data";

interface ShadePickerProps {
  shades: Shade[];
  selected: Shade;
  onSelect: (shade: Shade) => void;
}

export default function ShadePicker({
  shades,
  selected,
  onSelect,
}: ShadePickerProps) {
  return (
    <div className={css.shadeCard}>
      <div>
        <span className={css.shadeHint}>Try a shade</span>
        <strong className={css.shadeName}>{selected.name}</strong>
      </div>

      <div className={css.swatches}>
        {shades.map((item) => (
          <button
            key={item.name}
            className={
              item.name === selected.name
                ? `${css.swatch} ${css.active}`
                : css.swatch
            }
            style={{ background: item.color }}
            aria-label={item.name}
            onClick={() => onSelect(item)}
          />
        ))}
      </div>
    </div>
  );
}
