import GaleryLeft from "./GaleryLeft";
import GaleryRigth from "./GaleryRigth";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
const Partfolio = () => {
  const { scrollY } = useScroll();
  const springScrollY = useSpring(scrollY, { damping: 30, bounce: 1 });

  const someBorders = [3900, 4200];
  const op = [0, 1];
  const scale = [0, 2];
  const top = [100, -100];

  const motionOpasity = useTransform(springScrollY, someBorders, op);
  const motionScale = useTransform(springScrollY, someBorders, scale);
  const motionTop = useTransform(springScrollY, someBorders, top);

  const MGaleryLeft = motion(GaleryLeft);
  const MGaleryRigth = motion(GaleryRigth);
  return (
    <div className="portfolio">
      <div className="container">
        <main className="gallery">
          <MGaleryLeft />
          <MGaleryRigth />
        </main>
        <motion.h4
          className="contined"
          style={{ opacity: motionOpasity, y: motionTop }}
        >
          To be contined
        </motion.h4>
      </div>
    </div>
  );
};
export default Partfolio;
