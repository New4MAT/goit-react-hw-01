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
      <div className={styles.statusContainer}>
        <span
          className={`${styles.statusDot} ${isOnline ? styles.online : styles.offline}`}
        ></span>
        <span className={styles.statusText}>
          {isOnline ? 'Online' : 'Offline'}
        </span>
      </div>
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
