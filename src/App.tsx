import { Navigate, Route, Routes } from "react-router-dom";

import TablePage from "@/pages/table.tsx";
import ListPage from "@/pages/list.tsx";
import DefaultLayout from "@/layouts/default.tsx";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<TablePage />} />
        <Route element={<ListPage />} path="/list" />
        <Route element={<Navigate replace to="/" />} path="*" />
      </Route>
    </Routes>
  );
}

export default App;
