import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import coffeeBeans from "../../data/data";

const MainPage = lazy(() => import("../pages/MainPage"));
const Page404 = lazy(() => import("../pages/404"));
const OurCoffeePage = lazy(() => import("../pages/OurCoffeePage"));
const SingleCoffeePage = lazy(() => import("../pages/SingleCoffeePage"));
const ForYourPleasurePage = lazy(() => import("../pages/ForYourPleasurePage"));


const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Suspense fallback="loading...">
          <Routes>
            <Route path="/" element={<MainPage data={coffeeBeans} />} />
            <Route path="coffee/" element={<OurCoffeePage />} />
            <Route path="pleasure/" element={<ForYourPleasurePage />} />
            <Route path="coffee/:id" element={<SingleCoffeePage data={coffeeBeans}/>} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
