import { useContext } from "react";

import { ModeContext } from "../context/ModeContext";

import PageTitle from "./common/PageTitle";
import SmallContentCard from "./common/SmallContentCard";

const AboutUs = () => {
  const {mode} = useContext(ModeContext);
  const lightMode = mode === "light";

  return (
    <div className="m-2 p-2">
      <PageTitle>Privacy Policy</PageTitle>
      <div className={`text-center text-lg ${lightMode ? "text-gray-700" : "text-gray-200"}`}>
        <p>
        We value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data.
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row">
              <SmallContentCard title="Information We Collect">
                <ul>
                  <li>
                  ✔️ When you purchase a product, we collect your name, email address, and sometimes your contact number.
                  </li>
                  <li>
                  ✔️ Information is also gathered when you subscribe, comment, or reach out to us.
                  </li>
                </ul>
              </SmallContentCard>
              <SmallContentCard title="How We Use Your Information">
                <ul>
                  <li>
                  ✔️ To send updates on new posts, tutorials, or products.
                  </li>
                  <li>
                  ✔️ To resolve technical issues.
                  </li>
                  <li>
                  ✔️ To enhance customer service.
                  </li>
                </ul>
              </SmallContentCard>
            </div>
            <div className="flex flex-col md:flex-row">
              <SmallContentCard title="Data Protection">
                <ul>
                  <li>
                  ✔️ Your information is secured through regular security scans and is accessible only to authorized personnel.
                  </li>
                  <li>
                  ✔️ Sensitive information is encrypted using SSL technology. Transactions are processed through a secure gateway and are not stored on our servers.
                  </li>
                </ul>
              </SmallContentCard>
              <SmallContentCard title="Third-Party Disclosure and Links">
                <ul>
                  <li>
                  ✔️ We do not share your personal information with any third parties, except for site administrators.
                  </li>
                  <li>
                  ✔️ Our site may contain links to third-party services, which are governed by their own privacy policies. We are not responsible for their practices.
                  </li>
                </ul>
              </SmallContentCard>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
