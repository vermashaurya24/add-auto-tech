import { useContext } from "react";

import { ModeContext } from "../context/ModeContext";

import PageTitle from "./common/PageTitle";
import SmallContentCard from "./common/SmallContentCard";

const AboutUs = () => {
  const {mode} = useContext(ModeContext);
  const lightMode = mode === "light";
  return (
    <div className="m-2 p-2">
      <PageTitle>About Us</PageTitle>
      <div className={`text-center text-lg ${lightMode ? "text-gray-700" : "text-gray-200"}`}>
        <p>
          At ADDAUTO TECHNOLOGY PRIVATE LIMITED, we are proud to be part of
          India's transformative journey under the ‘Make In India’ initiative.
          Our mission is to spearhead a technological revolution in automation,
          empowering industries and individuals alike with innovative solutions
          that elevate everyday life.
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col">
              <SmallContentCard title="Our Vision">
                In a rapidly evolving technological landscape, we envision a future
                where automation seamlessly integrates into every aspect of our lives.
                From smart homes to agricultural advancements and medical innovations,
                we aim to ‘Add Automation’ across diverse sectors, making life not
                just easier but smarter for everyone.
              </SmallContentCard>
              <SmallContentCard title="Why choose us?">
                While many companies operate in the automation space, we stand out
                with our unwavering passion for innovation and our dedication to
                serving the people of India. Our team is driven by a collective vision
                of fostering technological advancement that is accessible to all. We
                believe that automation should not be a privilege but a right, and we
                work tirelessly to make it affordable and practical for everyone.
              </SmallContentCard>
              <SmallContentCard title="Join Us on Our Journey">
                As we embark on this exciting venture, we invite you to join us on our
                journey toward a smarter, more automated future. Together, let’s
                harness the power of technology to create solutions that inspire
                change and improve lives. With ADDAUTO TECHNOLOGY, you are not just
                choosing a service provider; you are becoming a part of a movement
                dedicated to innovation, accessibility, and excellence.
              </SmallContentCard>
            </div>
            <div className="flex flex-col">
              <SmallContentCard title="What We Do">
                ADDAUTO TECHNOLOGY operates through two main pillars:
                <ul className="text-ellipsis">
                  <li className="mb-3">
                    ✔️
                    Sourcing Electronic Components: We recognize the challenges faced
                    by students, researchers, and innovators in sourcing quality
                    electronic components at competitive prices. Our user-friendly
                    e-commerce platform simplifies this process, allowing anyone—from
                    hobbyists to professionals—to order a wide range of electronic
                    parts with ease. We strive to eliminate barriers in sourcing
                    components, ensuring that everyone has access to the materials
                    they need to fulfill their ideas.
                  </li>
                  <li>
                    ✔️
                    Automation Solutions: Our commitment to innovation extends beyond
                    components. We specialize in developing automatic solutions
                    tailored to various industries, including smart home technology,
                    urban infrastructure, agriculture, healthcare, and aerospace. Our
                    goal is to create affordable, state-of-the-art automated machines
                    that enhance efficiency and productivity, empowering individuals
                    and businesses to thrive in a competitive market.
                  </li>
                </ul>
              </SmallContentCard>
              <SmallContentCard title="A word from Our CEO">
                As we embark on this exciting venture, we invite you to join us on our
                journey toward a smarter, more automated future. Together, let’s
                harness the power of technology to create solutions that inspire
                change and improve lives. With ADDAUTO TECHNOLOGY, you are not just
                choosing a service provider; you are becoming a part of a movement
                dedicated to innovation, accessibility, and excellence.
                Welcome to the future. Welcome to ADDAUTO TECHNOLOGY.
              </SmallContentCard>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
