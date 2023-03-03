import Image from "next/image";
import img1 from "../public/img/work/1.jpg";
import img2 from "../public/img/work/2.jpg";
import img6 from "../public/img/work/6.jpg";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
const GaleryLeft = () => {
  const { scrollY } = useScroll();
  const MImage = motion(Image);

  const springMotionTranslate = useSpring(scrollY, {
    damping: 70,
  });

  const springMotionTranslate1 = useSpring(scrollY, {
    damping: 15,
  });

  const someBordersTaranslate = [1100, 4000];
  const translateValue = [0, 530];
  const motionTranslate = useTransform(
    springMotionTranslate,
    someBordersTaranslate,
    translateValue
  );

  const someBordersExit = [1050, 1550, 1900, 2300];
  const someBordersExit1 = [1550, 2000, 3000, 3250];
  const someBordersExit2 = [2850, 3100, 3650, 4050];
  const someBordersExit3 = [3050, 3550, 3950, 4200];
  const opExit = [0, 1, 1, 0];
  const rtaXright = [-50, 0, 0, -50];

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
    <motion.div className="gallery__left" style={{ y: motionTranslate }}>
      <MImage
        className="gallery__item"
        src={img1}
        alt="Alt"
        style={{ opacity: motionOpasityExit, translateX: notionTranslateExit }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5 }}
      />
      <MImage
        className="gallery__item"
        src={img2}
        alt="Alt"
        style={{
          opacity: motionOpasityExit1,
          translateX: notionTranslateExit1,
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="text-block gallery__item"
        style={{
          opacity: motionOpasityExit2,
          translateX: notionTranslateExit2,
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5 }}
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
        src={img6}
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
export default GaleryLeft;
