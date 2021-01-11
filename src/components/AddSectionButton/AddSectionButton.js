import { useState } from 'react';

import AddSectionModal from '../AddSectionModal/AddSectionModal';

import './AddSectionButton.css'

const AddSectionButton = ({ onAdd = () => { } }) => {
  const [isModalOpen, setIsModalOpen] = useState();

  return (
    <>
      <AddSectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={onAdd} />
      <button
        className="add-section-button button is-link"
        onClick={() => setIsModalOpen(true)}>
        Add section
      </button>
    </>
  );
};

export default AddSectionButton;