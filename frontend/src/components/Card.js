import React, { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card({
  data: { name, link, likes }, data, onClick, onCardLike, onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);

  const handleClick = () => {
    onClick(data);
  };

  const handleLikeClick = () => {
    onCardLike(data);
  };

  const handleCardDelete = () => {
    onCardDelete(data);
  };

  const isOwn = data.owner === currentUser._id;
  const cardDeleteButtonClassName = (
    `card__remove ${isOwn ? 'card__remove_visible' : 'card__remove_hidden'}`
  );

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = data.likes.some(i => i === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `card__like ${isLiked ? 'card__like_active' : ''}`;

  return (
    <div className="card">
      <button
        type="button"
        className={cardDeleteButtonClassName}
        onClick={handleCardDelete}
      />
      <div
        className="card__image"
        style={{ backgroundImage: `url(${link})` }}
        onClick={handleClick}
      />
      <div className="card__container">
        <h2 className="card__text">{name}</h2>
        <div className="card__like-container">
          <button
          type="button"
          className={cardLikeButtonClassName}
          onClick={handleLikeClick}
          />
          <span className="card__like-count">{likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
