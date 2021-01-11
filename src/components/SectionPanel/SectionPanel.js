import { useState } from 'react';

import './SectionPanel.css';

const SectionPanel = ({ section }) => {
  const [isOpen, setIsOpen] = useState();

  return (
    <div class={`section-panel card${isOpen ? ' is-open' : ''}`}>
      <header class="card-header" onClick={() => setIsOpen(!isOpen)}>
        <div class="card-header-title">
          {section.title}
        </div>
        <div class="card-header-icon">
          <span class="icon card-header-icon">
            <i class={`fas fa-angle-${isOpen ? 'up' : 'down'}`} aria-hidden="true"></i>
          </span>
        </div>
      </header>
      <div class="card-content">
        {section.description}
      </div>
    </div>
  );
};

export default SectionPanel;