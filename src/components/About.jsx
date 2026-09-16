import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Border from "./Border";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        Software developer from Greece, based in Germany since 2022, with
        experience in web and mobile development. Passionate about technology,
        continuous learning, and the evolution of software development, from
        traditional approaches to modern workflows. Always looking for new
        challenges to expand my knowledge and grow as a developer.
      </motion.p>

      <motion.div
        variants={fadeIn("", "", 0.1, 3)}
        className="flex-col flex items-center"
      >
        <Border />
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
