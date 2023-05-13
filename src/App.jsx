import React from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./Utilities/SharedLayout";
import Home from "./Components/Landing/Home";
import Loading from "./Utilities/Loading";
import Error from "./Utilities/Error";

const LazyStats = React.lazy(() =>
  import("./Components/Statistics/Statistics")
); //these are dynamic imports for lazy loading

const LazyReadings = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Components/DataTable/Readings")), 1000);
  });
});

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route
          path="readings"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyReadings />
            </React.Suspense>
          }
        />
        <Route
          path="statistics"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyStats />
            </React.Suspense>
          }
        />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
