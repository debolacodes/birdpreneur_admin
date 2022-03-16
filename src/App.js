import React, {useContext} from 'react'


import Modal from './components/Modal';

import {mainFunctions} from "./providers/MainProvider";
import AllRoutes from './route/AllRoutes';

function App() {
  const {
    showModal
  } = useContext(mainFunctions)

  return (
    <div className="App">
      {showModal &&
        <Modal />
      }
      <AllRoutes />
      </div>
  );
}

export default App;
