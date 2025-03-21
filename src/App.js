import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import JobDetail from "./components/JobDetail";
import JobLandingPage from "./components/JobLandingPage";
import AuthPage from "./components/AuthPage";
import ResumeUpload from "./components/ResumeUpload";
import AccountSetting from "./components/AccountSetting";
import JobSearchRecommendation from "./components/JobSearchRecommendation";
import JobRecommendation from "./components/JobRecommendation";
// import Navbar from "./components/Navbar"; // If you have a Navbar

function App() {
  return (
    <Router>
      {/* <Navbar /> Keep Navbar on all pages */}
      <Routes>
        <Route path="/" element={<JobLandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobid" element={<JobDetail />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/resume-upload" element={<ResumeUpload />} />
        <Route path="/account-settings" element={<AccountSetting />} />
        <Route
          path="/job-search-recommendation"
          element={<JobSearchRecommendation />}
        />
        <Route path="/job-recommendations" element={<JobRecommendation />} />
      </Routes>
    </Router>
  );
}

export default App;
