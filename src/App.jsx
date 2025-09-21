import "./App.css";
import Header from "./components/Header";
import DesignerCard from "./components/DesignerCard";
import UserProfileHeader from "./components/UserProfileHeader";
import AfterProfileHeader from "./components/AfterProfileHeader";
import GalleryGlimpse from "./components/GalleryGlimpse";
import FullLandingPageView from "./components/FullLandingPageView";
import WorkEnquiry from "./components/WorkEnquiry";
import AfterWorkEnquiry from "./components/AfterWorkEnquiry";
import Footer from "./components/Footer";
import AboveFooter from "./components/AboveFooter";
function App() {
  return (
    <>
      <Header />
      <DesignerCard />
      <UserProfileHeader />
      <AfterProfileHeader />
      <GalleryGlimpse />
      <FullLandingPageView />
      <WorkEnquiry />
      <AfterWorkEnquiry />
      <AboveFooter />
      <Footer />
    </>
  );
}

export default App;
