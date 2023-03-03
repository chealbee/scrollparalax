import Image from "next/image";
import img3 from "../public/img/work/3.jpg";
import img4 from "../public/img/work/4.jpg";
import img5 from "../public/img/work/5.jpg";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
const GaleryRigth = () => {
  const { scrollY } = useScroll();
  const MImage = motion(Image);

  const springMotionTranslate = useSpring(scrollY, {
    damping: 70,
  });

  const springMotionTranslate1 = useSpring(scrollY, {
    damping: 15,
  });

  const someBordersTaranslate = [800, 4000];
  const translateValue = [0, -200];
  const motionTranslate = useTransform(
    springMotionTranslate,
    someBordersTaranslate,
    translateValue
  );

  const someBordersExit = [700, 1150, 1300, 1500];
  const someBordersExit1 = [950, 1400, 1750, 2350];
  const someBordersExit2 = [1750, 2300, 3050, 3750];
  const someBordersExit3 = [3050, 3650, 3850, 4250];
  const opExit = [0, 1, 1, 0];
  const rtaXright = [50, 0, 0, 50];

  const notionTranslateExit = useTransform(
    springMotionTranslate1,
    someBordersExit,
    rtaXright
  );
  const motionOpasityExit = useTransform(
    springMotionTranslate1,
    someBordersExit,
    opExit
  );

  const notionTranslateExit1 = useTransform(
    springMotionTranslate1,
    someBordersExit1,
    rtaXright
  );
  const motionOpasityExit1 = useTransform(
    springMotionTranslate1,
    someBordersExit1,
    opExit
  );

  const notionTranslateExit2 = useTransform(
    springMotionTranslate1,
    someBordersExit2,
    rtaXright
  );
  const motionOpasityExit2 = useTransform(
    springMotionTranslate1,
    someBordersExit2,
    opExit
  );

  const notionTranslateExit3 = useTransform(
    springMotionTranslate1,
    someBordersExit3,
    rtaXright
  );
  const motionOpasityExit3 = useTransform(
    springMotionTranslate1,
    someBordersExit3,
    opExit
  );

  return (
    <motion.div className="gallery__right" style={{ y: motionTranslate }}>
      <motion.div
        className="text-block gallery__item"
        style={{ opacity: motionOpasityExit, translateX: notionTranslateExit }}
      >
        <h2 className="text-block__h">
          Creative floating scroll with amazing parallax effect
        </h2>
        <p className="text-block__p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor amount scrolling.
        </p>
      </motion.div>

      <MImage
        className="gallery__item"
        src={img4}
        alt="Alt"
        style={{
          opacity: motionOpasityExit1,
          translateX: notionTranslateExit1,
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5 }}
      />
      <MImage
        className="gallery__item"
        src={img5}
        alt="Alt"
        style={{
          opacity: motionOpasityExit2,
          translateX: notionTranslateExit2,
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5 }}
      />
      <MImage
        className="gallery__item"
        src={img3}
        alt="Alt"
        style={{
          opacity: motionOpasityExit3,
          translateX: notionTranslateExit3,
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};
export default GaleryRigth;
