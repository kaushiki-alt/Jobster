import { Routes, Route } from "react-router-dom";
import { Landing, Register, Error, SharedLayout, Stats, AllJobs, AddJob, Profile, ProtectedRoute } from "./pages";
import { Toaster } from "./components/ui/sonner";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
        } >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-jobs" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Toaster position="top-center" richColors />
    </>
  )
}

export default App;
