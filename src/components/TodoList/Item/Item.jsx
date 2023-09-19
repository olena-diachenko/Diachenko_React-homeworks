import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import { completedItem, deleteItem } from '../../../store/slices/storage';

const Item = props => {
  const storage = useSelector(state => state.storage.storage);
  const dispatch = useDispatch();

  const handleClick = e => {
    const itemId = e.target.id;
    const dataToDelete = storage.find(item => item.id === itemId);
    dispatch(deleteItem(dataToDelete));
  };

  const handleChange = e => {
    const itemId = e.target.id;
    const currentItem = storage.find(item => item.id === itemId);
    const itemToChange = { ...currentItem };
    itemToChange.completed = !itemToChange.completed;
    dispatch(completedItem(itemToChange));
  };
  return (
    <>
      <div className={styles.taskWrapper}>
        <div className={styles.taskHeading}>{props.item.title}</div>
        <div className={styles.taskDescription}>{props.item.description}</div>
        <hr />
        <Form.Check
          type="checkbox"
          label={'Завершено'}
          checked={props.item.completed}
          id={props.item.id}
          onChange={handleChange}
        />
        <hr />
        <Button
          className="btn btn-danger delete-btn"
          id={props.item.id}
          onClick={handleClick}
        >
          Удалить
        </Button>
      </div>
    </>
  );
};

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;
