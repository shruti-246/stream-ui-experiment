import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";

import Recruiter from "./pages/Recruiter";
import Skills from "./pages/Req/Skill";
import WorkPermit from "./pages/Req/Work_permit";
import Experience from "./pages/Req/Exp";
import Certifications from "./pages/Req/Cert";
import Recommendations from "./pages/Req/Recom";
import Projects from "./pages/Req/Proj";
import Contact from "./pages/Req/Cont";
import InProgress from "./components/InProgress";

import Developer from "./pages/Developer";
import ProjDev from "./pages/dev/ProjDev";
import OssDev from "./pages/dev/ossDev";
import ToolsDev from "./pages/dev/toolsDev";
import ContactDev from "./pages/dev/ContactDev";
import BlogDev from "./pages/dev/BlogDev";

import Researcher from "./pages/Researcher";
import InterestsResearcher from "./pages/res/InterestRes";
import LiteratureResearcher from "./pages/res/LiteratureRes";
import ToolsResearcher from "./pages/res/ToolsRes";
import ContactRes from "./pages/res/ContactRes";

import StalkerHome from "./pages/Stalker";
import Hobbies from "./pages/stalk/hobbies";
import ContactStalker from "./pages/stalk/ContactStalker";
import ArtAndCraft from "./pages/stalk/ArtAndCraft";
import Singing from "./pages/stalk/Singing";
import Click_Pic from "./pages/stalk/Click_Pic";
import GoodMemories from "./pages/stalk/GoodMemories";
import PeopleILove from "./pages/stalk/PeopleILove";
import Family from "./pages/stalk/Family";
import Friends from "./pages/stalk/Friends";
import InterestBucketList from "./pages/stalk/InterestBucketList";
import RandomFacts from "./pages/stalk/RandomFacts";
import Milestones from "./pages/stalk/Milestones";
import AboutMe from "./pages/stalk/AboutMe";
//import Secrets from "./pages/Secrets";

import { ManifestProvider } from "./manifest/context";
import FrontPage from "./pages/FrontPage";
import FrontPageStudio from "./studio/FrontPageStudio";
import StudioGate from "./pages/StudioGate";

const STUDIO_ENABLED = import.meta.env.VITE_STUDIO_ENABLED === "true";

export default function App() {
  return (
    <ManifestProvider>
      {/* If your local URL is /fun_portfolio/, keep basename.
         If not, remove the basename prop. */}
        <Routes>
          {/* ---- Home (pick ONE) ---- */}
          {/* Option A: your original landing */}
          {/* <Route path="/" element={<Landing />} /> */}

          {/* Option B: the new data-driven front page */}
          <Route path="/" element={<FrontPage />} />

          {/* ---- Recruiter ---- */}
          <Route path="/recruiter" element={<Recruiter />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work-permit" element={<WorkPermit />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          {/* ---- Developer ---- */}
          <Route path="/developer" element={<Developer />} />
          <Route path="/dev/projects" element={<ProjDev />} />
          <Route path="/dev/oss" element={<OssDev />} />
          <Route path="/dev/blog" element={<BlogDev />} />
          <Route path="/dev/tools" element={<ToolsDev />} />
          <Route path="/dev/contact" element={<ContactDev />} />

          {/* ---- Researcher ---- */}
          <Route path="/researcher" element={<Researcher />} />
          <Route path="/res/interests" element={<InterestsResearcher />} />
          <Route path="/res/literature" element={<LiteratureResearcher />} />
          <Route path="/res/tools" element={<ToolsResearcher />} />
          <Route path="/res/contact" element={<ContactRes />} />

          {/* ---- Stalker section ---- */}
          <Route path="/stalker" element={<StalkerHome />} />
          <Route path="/stalker/hobbies" element={<Hobbies />} />
          <Route path="/stalker/contact" element={<ContactStalker />} />
          <Route path="/stalker/art-craft" element={<ArtAndCraft />} />
          <Route path="/stalker/singing" element={<Singing />} />
          <Route path="/stalker/click_pic" element={<Click_Pic />} />
          <Route path="/stalker/memories" element={<GoodMemories />} />
          <Route path="/stalker/people" element={<PeopleILove />} />
          <Route path="/stalker/people/family" element={<Family />} />
          <Route path="/stalker/people/friends" element={<Friends />} />
          <Route path="/stalker/interests-bucket-list" element={<InterestBucketList />} />
          <Route path="/stalker/facts" element={<RandomFacts />} />
          <Route path="/stalker/about" element={<AboutMe />} />
          <Route path="/stalker/milestones" element={<Milestones />} />

          {/* ---- Studio (guarded) ---- */}
          <Route
            path="/studio/front-page"
            element={
              <StudioGate enabled={STUDIO_ENABLED}>
                <FrontPageStudio />
              </StudioGate>
            }
          />

          {/* ---- Catch-all ---- */}
          <Route path="*" element={<InProgress />} />
        </Routes>
    </ManifestProvider>
  );
}