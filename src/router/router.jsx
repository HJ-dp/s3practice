import { Route, Routes } from "react-router-dom";
import { PageURL } from "./pageURL";

// 페이지
import MainPage from "../components/pages/mainPage";
import ErrorPage from "../components/pages/errorPage";

// 레이아웃
import DefaultLayout from "../layouts/defaultLayout";

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path={PageURL.Main} element={<MainPage />}></Route>
        <Route path={PageURL.Error404} element={<ErrorPage />}></Route>
      </Route>
    </Routes>
  );
}

export default Router;
