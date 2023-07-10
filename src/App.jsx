import React from 'react';

import GetBookmarkAPI from './function/GetBookmarkAPI';
import Homepage from './pages/Homepage';
import MakeMap from './function/MakeMap';

function App() {
  return (
    <div className="App">
      <GetBookmarkAPI />
      <MakeMap />
      <Homepage />
    </div>
  );
}

export default App;
