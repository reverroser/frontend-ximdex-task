import { useEffect, useState } from 'react';

import AddSectionButton from './components/AddSectionButton/AddSectionButton';
import SectionPanel from './components/SectionPanel/SectionPanel';

const App = () => {
  const [sections, setSections] = useState([]);

  const fetchSections = () => {
    fetch('sections.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then((response) => response.json())
      .then(setSections);
  };

  useEffect(() => {
    fetchSections();
  }, []);

  return (
    <div className="container">
      {sections.map((section, i) => <SectionPanel key={i} section={section} />)}
      <AddSectionButton onAdd={(section) => {
        setSections([
          ...sections,
          section,
        ])
      }} />
    </div>
  );
}

export default App;
