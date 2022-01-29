import React from 'react';
import successIcon from '../images/SuccessIcon.svg';
import failIcon from '../images/FailIcon.svg';

function InfoTooltip({ isOpen, isSuccess, onClose }) {
  return (
    <div
      className={`popup popup_type_tooltip ${isOpen ? 'popup_opened' : ''}`}
    >
      <div className="popup__container">
        <div className="popup__tooltip-content">
            <img
              src={isSuccess ? successIcon : failIcon}
              alt={isSuccess ? 'Регистрация прошла успешно.' : 'Регистрация не была выполнена.'}
              className="popup__tooltip_image"
            />
            <p className="popup__tooltip_message">
              {isSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так. Попробуйте ещё раз!'}
            </p>
        </div>
        <button
            type="button"
            className="popup__form-button-close popup__form-button-close_size popup__faded-in"
            onClick={onClose}
        />
      </div>
    </div>
  );
}

export default InfoTooltip;
