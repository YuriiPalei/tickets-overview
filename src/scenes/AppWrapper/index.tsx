import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { paths } from "common/urls";
import PageLayout from "scenes/AppWrapper/PageLayout";
import TicketsOverview from "scenes/TicketsOverview";

const AppWrapper = () => {
  return (
    <Fragment>
      <Routes>
        <Route
          path={paths.HOME}
          element={
            <PageLayout>
              <TicketsOverview />
            </PageLayout>
          }
        />
      </Routes>
    </Fragment>
  );
};

export default AppWrapper;
