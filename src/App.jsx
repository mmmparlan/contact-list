import { useState } from 'react'

import './App.css'
import ContactList from './components/ContactList.jsx'
//import ContactRow from './components/ContactRow.jsx'
import SelectedContact from './components/SelectedContact.jsx'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  // useEffect(() => {},[]);
  // setSelectedContactId(selectedContactId);
  // onClick={() => {setCount((count) = count + 1)}

  return (
    <>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId}/>
      )}
  
    </>
  );
}

export default App
