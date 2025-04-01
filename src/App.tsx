import React from "react";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import AppRoutes from "./Routes/AppRoutes";

export const App = () => (
  <FluentProvider theme={webLightTheme}>
      <AppRoutes />
  </FluentProvider>
);


