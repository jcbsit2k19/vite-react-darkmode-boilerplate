import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@components/error-handler/error-boundary";
import MainLayout from "@layouts/mainlayout";
import { navRoutes } from "@utils/nav-routes";
import "./App.css";
import Signin from "@pages/signin";
import ErrorComponent from "@components/errors/errorcomponent";

function App() {
  return (
    <div className="h-screen w-screen font-montserrat overflow-y-auto">
      <ErrorBoundary>
        <BrowserRouter basename="/erscbu">
          <Routes>
            <Route path="/" element={<Signin />} />

            {navRoutes.flatMap((routeItem) => {
              if (routeItem.menu) {
                return routeItem.menu.map((subMenuItem) => (
                  <Route
                    key={subMenuItem.id}
                    path={subMenuItem.path}
                    element={
                      <MainLayout>
                        {renderElement(subMenuItem.element)}
                      </MainLayout>
                    }
                  />
                ));
              } else {
                return (
                  <Route
                    key={routeItem.id}
                    path={routeItem.path}
                    element={
                      <MainLayout>
                        {renderElement(routeItem.element)}
                      </MainLayout>
                    }
                  />
                );
              }
            })}

            <Route path="*" element={<ErrorComponent code={404} />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

const renderElement = (Component) => {
  return Component ? <Component /> : <ErrorComponent code={503} />;
};

export default App;
