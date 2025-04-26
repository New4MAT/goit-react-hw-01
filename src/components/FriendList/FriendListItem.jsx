import React from 'react';
import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? styles.online : styles.offline;

  return (
    <li className={styles.item}>
      <span className={`${styles.status} ${statusClass}`}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
