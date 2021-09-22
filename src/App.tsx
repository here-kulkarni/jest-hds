import * as React from 'react';

import './App.css';
import "@here/hds-base/src/hds-styles.scss";
import { HDSButton } from "@here/hds-react-components";



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <HDSButton
                size="small"
                type="button"
                variant="primary"
                width="150px"
                title="pk"
                onClick={() => console.log('i am')}
              >
              PK
              </HDSButton>
      </header>
    </div>
  );
}

export default App;
