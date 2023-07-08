import React from 'react';

{
  /*}
import { Routes, Route, Link } from 'react-router-dom';
*/
}

import Homepage from './pages/Homepage';
import Bookmarkpage from './pages/Bookmarkpage';
import MakeMap from './function/MakeMap';

function App() {
  return (
    <div className="App">
      <MakeMap />
      <div className="InitPage">
        <Homepage />
      </div>
      <Bookmarkpage />
      {/*}
      <nav>
        <Link to="/bookmark">Bookmark</Link>
      </nav>
      <Routes>
        <Route path="/bookmark" element={<Bookmarkpage />} />
      </Routes>
  */}
    </div>
  );
}

export default App;
