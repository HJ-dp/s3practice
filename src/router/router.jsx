import { Route, Routes } from "react-router-dom";
import { PageURL } from "./pageURL";

// 페이지
import ErrorPage from "../components/pages/errorPage";
import PreviewPage from "../components/pages/previewPage";

// 레이아웃
import DefaultLayout from "../layouts/defaultLayout";

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path={PageURL.Main} element={<PreviewPage />}></Route>
        <Route path={PageURL.Error404} element={<ErrorPage />}></Route>
      </Route>
    </Routes>
  );
}

export default Router;
