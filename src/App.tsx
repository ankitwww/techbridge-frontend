import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/_layout";
import { Home } from "./components/home";
import { Profile } from "./components/profile";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/profile/:username"
        element={
          <Layout>
            <Profile />
          </Layout>
        }
      />
      <Route
        path="/search"
        element={
          <Layout>
            <Profile />
          </Layout>
        }
      />
    </Routes>
  );
}
