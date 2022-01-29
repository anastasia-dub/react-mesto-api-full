import React from 'react';

function PopupWithForm({
  title,
  name,
  children,
  isOpen,
  onClose,
  onSubmit,
  submitText,
}) {
  return (
        <div className={`popup popup_name_${name}${isOpen ? ' popup_opened' : ''}`}>
            <div className="popup__container">
                <h2 className="popup__title">{title}</h2>
                <form name={name} className="popup__form" onSubmit={onSubmit}>
                    {children}
                    <button
                        type="button"
                        className="popup__form-button-close"
                        onClick={onClose}
                    />
                    <button
                        type="submit"
                        className="popup__form-button-submit"
                    >{submitText}</button>
                </form>
            </div>
        </div>
  );
}

export default PopupWithForm;
