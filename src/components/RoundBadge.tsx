import { ArrowRight } from "lucide-react";
import css from "./RoundBadge.module.css";

export default function RoundBadge() {
  return (
    <div className={css.badge}>
      <svg className={css.badgeText} viewBox="0 0 120 120" aria-hidden="true">
        <path
          id="ring"
          d="M60 60 m-42 0 a42 42 0 1 1 84 0 a42 42 0 1 1 -84 0"
          fill="none"
        />
        <text fontSize="11.5" fontWeight="700" letterSpacing="4.5">
          <textPath href="#ring">BOOK ONLINE · NO CALLS ·</textPath>
        </text>
      </svg>
      <ArrowRight size={22} />
    </div>
  );
}
