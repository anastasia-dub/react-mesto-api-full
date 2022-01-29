import React from 'react';

function ImagePopup({ onClose, card }) {
  if (!card) {
    return null;
  }

  return (
        <div className={`popup popup_name_show-image${card ? ' popup_opened' : ''}`}>
            <div className="popup__image-container">
                <img className="popup__image" src={card.link} alt="Картинка" />
                <p className="popup__image-title">{card.name}</p>
                <button
                    type="button"
                    className="popup__form-button-close"
                    onClick={onClose}
                />
            </div>
        </div>
  );
}

export default ImagePopup;
