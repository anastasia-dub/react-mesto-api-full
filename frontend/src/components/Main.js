import React, { useContext } from 'react';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                    <div
                        className="profile__avatar"
                        style={{ backgroundImage: `url(${currentUser.avatar})` }}
                    />
                    <button
                        type="button"
                        className="profile__avatar-edit-button"
                        onClick={onEditAvatar}
                    />
                </div>
                <div className="profile__info">
                    <div className="profile__title-wrapper">
                        <h1 className="profile__title">{currentUser.name}</h1>
                        <button
                            type="button"
                            className="profile__edit-button"
                            onClick={onEditProfile}
                        />
                    </div>
                    <p className="profile__subtitle">{currentUser.about}</p>
                </div>
                <button
                    type="button"
                    className="profile__add-button"
                    onClick={onAddPlace}
                />
            </section>

            <section className="cards">
                {cards.map(card => (
                    <Card
                        key={card._id}
                        data={card}
                        onClick={onCardClick}
                        onCardLike={onCardLike}
                        onCardDelete={onCardDelete}
                    />
                ))}
            </section>
        </main>
  );
}

export default Main;
