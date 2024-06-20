import { useState } from 'react';

import Navbar from './components/Navbar';
import Contacts from './components/contact/Contacts';

import './App.css';

function App() {

  const [getcontacts, setContacts] = useState([])

  return (
    <div className="App">
        <Navbar />
        <Contacts contacts={getcontacts} />
    </div>
  );
}

export default App;
