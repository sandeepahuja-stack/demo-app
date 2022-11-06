import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

const Home = React.lazy(() =>
  import(
    /* webpackChunkName: "HomePage" */
    "./pages/Home"
  )
);

function App() {
  return (
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
  );
}

export default App;
