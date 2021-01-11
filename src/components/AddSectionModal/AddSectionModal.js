import { useEffect, useState, useRef } from 'react';

const AddSectionModal = ({
  isOpen,
  onClose = () => { },
  onSubmit = () => { },
}) => {
  const titleRef = useRef();

  const descriptionRef = useRef();

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({});

  const handleClose = () => {
    titleRef.current.value = '';
    descriptionRef.current.value = '';
    setErrors({});
    setFormData({});
    onClose();
  }

  const handleFieldChange = (type, value) => {
    setErrors({
      [type]: null
    });

    setFormData({
      ...formData,
      [type]: value
    });
  };

  const handleSave = () => {
    if (!formData.title) {
      setErrors({
        title: 'Title is required'
      })
      return;
    }

    if (!formData.description) {
      setErrors({
        description: 'Description is required'
      })
      return;
    }

    onSubmit(formData);

    handleClose();
  };

  useEffect(() => {
    if (isOpen) {
      titleRef.current?.focus();
    }
  }, [isOpen])

  return (
    <div className={`modal${isOpen ? ' is-active' : ''}`}>
      <div className="modal-background" onClick={handleClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Add section</p>
          <button className="delete" aria-label="close" onClick={handleClose}></button>
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                ref={titleRef}
                className={`input${errors.title ? ' is-danger' : ''}`}
                type="text"
                placeholder="Title of the section"
                onChange={(e) => handleFieldChange('title', e.target.value)} />
            </div>
            {errors.title && <p className="help is-danger">{errors.title}</p>}
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                ref={descriptionRef}
                className={`textarea${errors.description ? ' is-danger' : ''}`}
                placeholder="Description of the section"
                onChange={(e) => handleFieldChange('description', e.target.value)}></textarea>
            </div>
            {errors.description && <p className="help is-danger">{errors.description}</p>}
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-link" onClick={handleSave}>Save changes</button>
          <button className="button" onClick={handleClose}>Cancel</button>
        </footer>
      </div>
    </div>
  );
};

export default AddSectionModal;