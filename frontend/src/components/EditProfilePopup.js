import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]); 

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
          name,
          about: description,
        });
      }

    return (
        <PopupWithForm
            name="edit-profile"
            title="Редактировать профиль"
            isOpen={isOpen}
            onClose={onClose}
            submitText="Сохранить"
            onSubmit={handleSubmit}
        >
            <div className="popup__form-inputs">
                <div className="popup__form-field">
                    <input 
                        id="profile-name" 
                        name="name" 
                        type="text" 
                        placeholder="Имя" 
                        className="popup__form-input" 
                        minLength="2" 
                        maxLength="40" 
                        required 
                        value={name}
                        onChange={handleChangeName}
                        />
                    <span className="popup__form-input-error profile-name-error"></span>
                </div>
                <div className="popup__form-field">
                    <input 
                        id="profile-about" 
                        name="about" 
                        type="text" 
                        placeholder="О себе" 
                        className="popup__form-input" 
                        minLength="2" 
                        maxLength="200" 
                        required 
                        value={description}
                        onChange={handleChangeDescription}
                        />
                    <span className="popup__form-input-error profile-about-error"></span>
                </div>
            </div>
        </PopupWithForm>
    );
}

export default EditProfilePopup;