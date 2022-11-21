import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
 en: {
  CURRENT_LANGUAGE: "Language is English"
 },
 it: {
  CURRENT_LANGUAGE: "La lingua è Italiano"
 }
}

class DisplayLanguage extends React.Component{
  render(){
    return(
      <div>
        <LanguageContext.Consumer>
          {language => {
            return(
              <div>
                <h1>{Strings[language].CURRENT_LANGUAGE}</h1>
              </div>
            )
          }}
        </LanguageContext.Consumer> 
      </div>
    )
  }
};

export default DisplayLanguage;