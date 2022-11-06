import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Layout from "components/common/Layout";

const Home = React.lazy(() =>
  import(
    /* webpackChunkName: "HomePage" */
    "./pages/Home"
  )
);

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading home</div>}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
