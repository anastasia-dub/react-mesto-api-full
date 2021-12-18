import { useRef } from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    const nameInputRef = useRef();
    const linkInputRef = useRef();

    function handleAddPlaceSubmit(e) {
        e.preventDefault();

        onAddPlace({
            name: nameInputRef.current.value,
            link: linkInputRef.current.value
        });
    }

    return (
        <PopupWithForm
            name="add-card"
            title="Новое место"
            isOpen={isOpen}
            onClose={onClose}
            submitText="Создать"
            onSubmit={handleAddPlaceSubmit}
        >
            <div className="popup__form-inputs">
                <div className="popup__form-field">
                    <input ref={nameInputRef} id="card-name" name="name" type="text" placeholder="Название" className="popup__form-input" minLength="2" maxLength="30" required />
                    <span className="popup__form-input-error card-name-error"></span>
                </div>
                <div className="popup__form-field">
                    <input ref={linkInputRef} id="card-link" name="link" type="url" placeholder="Ссылка на картинку" className="popup__form-input" required />
                    <span className="popup__form-input-error card-link-error" />
                </div>
            </div>
        </PopupWithForm>
    )
}

export default AddPlacePopup;