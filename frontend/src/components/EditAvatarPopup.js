import { useRef } from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ onUpdateAvatar, isOpen, onClose }) {
    const avatarInputRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateAvatar({
          avatar: avatarInputRef.current.value,
        });
      }

    return (
        <PopupWithForm
            name="update-avatar"
            title="Обновить аватар"
            isOpen={isOpen}
            onClose={onClose}
            submitText="Сохранить"
            onSubmit={handleSubmit}
        >
            <div className="popup__form-inputs">
                <div className="popup__form-field">
                <input ref={avatarInputRef} id="avatar-link" name="avatar" type="url" placeholder="Ссылка на аватар" className="popup__form-input" required />
                <span className="popup__form-input-error avatar-link-error"></span>
                </div>
            </div>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;
