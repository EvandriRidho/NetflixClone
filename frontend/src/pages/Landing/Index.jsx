import DefaultLayout from "../../components/Layouts/DefaultLayout/Index";
import Footer from "../../components/modules/Footer";
import Jumbotron from "../../components/modules/Jumbotron";
import SectionDownload from "../../components/modules/SectionContent/SectionDownload";
import SectionEnjoy from "../../components/modules/SectionContent/SectionEnjoy";
import SectionFAQ from "../../components/modules/SectionContent/SectionFAQ";
import SectionProfile from "../../components/modules/SectionContent/SectionProfile";
import SectionWatch from "../../components/modules/SectionContent/SectionWatch";

function Landing() {
  return (
    <DefaultLayout>
      <Jumbotron/>
      <SectionEnjoy/>
      <SectionDownload/>
      <SectionWatch/>
      <SectionProfile/>
      <SectionFAQ/>
      <Footer/>
    </DefaultLayout>
  );
}

export default Landing;
