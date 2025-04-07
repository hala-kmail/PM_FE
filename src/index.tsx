import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import en from "./localization/en.json";
import ar from "./localization/ar.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

i18next.init({
  lng: "ar", // Set the default language
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  fallbackLng: "ar", // Fallback language if translation is not available
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
      {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
