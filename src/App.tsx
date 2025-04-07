import { useTranslation } from "react-i18next";
import { CacheProvider } from "@emotion/react";
import { cacheRtl } from "./utils/Language";
import Routers from "routers";

export default function MyApp() {
  const { i18n } = useTranslation();
  return (
    <>
      {i18n.language === "ar" ? (
        <CacheProvider value={cacheRtl}>
          <Routers/>
        </CacheProvider>
      ) : (
        <Routers/>
      )}
      
    </>
  );
}
