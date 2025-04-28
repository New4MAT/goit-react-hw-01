import React from 'react';
import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="64"
      />
      <p className={styles.name}>{name}</p>
      <span
        className={`${styles.statusText} ${isOnline ? styles.online : styles.offline}`}
      >
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </li>
  );
};

export default FriendListItem;
