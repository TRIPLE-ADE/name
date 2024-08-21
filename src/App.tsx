import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactQueryClientProvider from "@/providers/ReactQueryClientProvider";
import ErrorPage from "./error-page";
import { Streaming, Dashboard, Login, Reports } from "./pages";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "./components/ui/toaster";
import ProtectedRoute from "@/routes/ProtectedRoute"; // Import the ProtectedRoute component
import Settings from "./pages/Settings";
import AddOfficer from "./pages/AddOfficer";
import Officers from "./pages/Officers";
import AllNotifications from "./components/AllNotifications";

function App() {
  return (
    <Router>
      <ReactQueryClientProvider>
        <AuthProvider>
          <Toaster />
          <Routes>
            <Route path="/auth/signin" element={<Login />} />
            <Route path="*" element={<ErrorPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/streaming" element={<Streaming />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/notifications" element={<AllNotifications />} />
              <Route path="/officers">
                <Route path="/officers/" element={<Officers />} />
                <Route path="add" element={<AddOfficer />} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </ReactQueryClientProvider>
    </Router>
  );
}

export default App;
