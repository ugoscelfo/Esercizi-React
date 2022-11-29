import React, { useState } from 'react';
import Container from './Container';
import { LanguageContext } from './LanguageContext';

import Welcome from './Welcome';

export default function App() {
  const [language, setLanguage] = useState("en")

  function handleChangeLanguage(event) {
    setLanguage(event.target.value)
  }

  return (
    <div>
      <select value={language} onChange={handleChangeLanguage}>
        <option value="en">EN</option>
        <option value="it">IT</option>
      </select>
      <LanguageContext.Provider value={language}>
        <Container title="My app">
          <Welcome name={"ugo"}/>
        </Container>
      </LanguageContext.Provider>
    </div>
  )
}
