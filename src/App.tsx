import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/_layout";
import { Home } from "./components/home";

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
    </Routes>
  );
}
