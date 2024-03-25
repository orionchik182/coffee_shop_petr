import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import coffeeBeans from "../../data/data";
import coffeeBeansTwo from "../../data/data2";

const MainPage = lazy(() => import("../pages/MainPage"));
const Page404 = lazy(() => import("../pages/404"));
const OurCoffeePage = lazy(() => import("../pages/OurCoffeePage"));
const SingleCoffeePage = lazy(() => import("../pages/SingleCoffeePage"));
const ForYourPleasurePage = lazy(() => import("../pages/ForYourPleasurePage"));

const App = () => {
	
  const allData = { ...coffeeBeans, ...coffeeBeansTwo };

  return (
    <BrowserRouter>
      <div className="app">
        <Suspense fallback="loading...">
          <Routes>
            <Route path="/" element={<MainPage data={coffeeBeans} />} />
            <Route
              path="coffee/"
              element={<OurCoffeePage data={coffeeBeansTwo} />}
            />
            <Route
              path="pleasure/"
              element={<ForYourPleasurePage data={coffeeBeansTwo} />}
            />
            <Route
              path="coffee/:id"
              element={<SingleCoffeePage data={allData} />}
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
