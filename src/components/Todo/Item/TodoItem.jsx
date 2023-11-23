import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import styles from './TodoItem.module.css';

// eslint-disable-next-line react/prop-types
function TodoItem({ title, priority, onDelete }) {
  return (
    <div className={styles['todo-item']}>
      <div className={styles['todo-item--info-wrapper']}>
        <span className={styles['todo-item--priority']}>{priority}</span>
        <p style={{ maxWidth: '90%' }}>{title}</p>
      </div>
      <FontAwesomeIcon
        icon={faTrashCan}
        style={{ color: '#E93A7D', cursor: 'pointer', padding: '7px' }}
        onClick={onDelete}
      />
    </div>
  );
}

export default TodoItem;
