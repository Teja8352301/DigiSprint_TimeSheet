import React from "react";
import { BrowserRouter, Route, Routes as Routess } from "react-router-dom";

export const Routes = () => {
  return (
    <BrowserRouter basename="/">
      <Routess>
        <Route
          path="/"
          render={() => {
            return <h1>A girl Has no name</h1>;
          }}
        />
      </Routess>
    </BrowserRouter>
  );
};
