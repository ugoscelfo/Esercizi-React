import React from 'react';
import Container from './Container';
import DisplayLanguage from './DisplayLanguage';
import { LanguageContext } from './LanguageContext';

 class App extends React.Component {
  state = {
    language: "en"
  }

  handlanguageChange = (event) => {
    this.setState({
      language: event.target.value
    })
  }

  render() {
    return (
      <div>
        <select value={this.state.language} onChange={this.handlanguageChange}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <Container title="My app">
            <DisplayLanguage />
          </Container>
        </LanguageContext.Provider>
      </div>
    )
  }
  
}

export default App;
