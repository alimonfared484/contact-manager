import { useState } from 'react';

import Navbar from './components/Navbar';
import Contacts from './components/contact/Contacts';

import './App.css';

function App() {
  const [loading, setLoading] = useState(false)
  const [getcontacts, setContacts] = useState([])

  return (
    <div className="App">
        <Navbar />
        <Contacts contacts={getcontacts} loading={loading} />
    </div>
  );
}

export default App;
