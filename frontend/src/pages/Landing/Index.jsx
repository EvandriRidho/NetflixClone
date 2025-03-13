import DefaultLayout from "../../components/Layouts/DefaultLayout/Index";
import Jumbotron from "../../components/modules/Jumbotron";
import SectionDownload from "../../components/modules/SectionContent/SectionDownload";
import SectionEnjoy from "../../components/modules/SectionContent/SectionEnjoy";
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
    </DefaultLayout>
  );
}

export default Landing;
