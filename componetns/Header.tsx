import Image from "next/image";
import hero from "../public/img/hero.png";

import { useScroll, motion, useTransform, useSpring } from "framer-motion";

const Header = () => {
  const { scrollY } = useScroll();
  const springScrollY = useSpring(scrollY, { damping: 60 });

  const someBorders = [0, 1000];
  const translateValues = [0, 250];
  const translateValues2 = [0, 100];
  const opasityValues1 = [1, 0];

  const translate = useTransform(springScrollY, someBorders, translateValues);
  const translate2 = useTransform(springScrollY, someBorders, translateValues2);
  const opasity = useTransform(springScrollY, someBorders, opasityValues1);

  const MImage = motion(Image);
  return (
    <header className="hero-section">
      <MImage
        className="hero"
        src={hero}
        alt="hero"
        style={{ translateY: translate2, opacity: opasity }}
      />
      <div className="container">
        <div className="main-header">
          <motion.h1
            className="main-title"
            style={{ translateY: translate, opacity: opasity }}
          >
            creative scroll
          </motion.h1>
        </div>
      </div>
    </header>
  );
};
export default Header;
