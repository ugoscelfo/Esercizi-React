import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
  en: {
   CURRENT_LANGUAGE: "Language is English"
  },
  it: {
   CURRENT_LANGUAGE: "La lingua è Italiano"
  }
 }

export function DisplayLanguage() {
  const language = useContext(LanguageContext)

  return(
    <div>
      <h3>{Strings[language].CURRENT_LANGUAGE}</h3>
    </div>
  )
}