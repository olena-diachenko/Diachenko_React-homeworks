import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { completedItem, deleteItem } from '../../store/slices/storage';
import styles from './style.module.css';

const Item = props => {
  const storage = useSelector(state => state.storage.data);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const removeHandler = e => {
    const itemId = e.target.id;
    const dataToDelete = storage.find(item => item.id === itemId);
    dispatch(deleteItem(dataToDelete));
  };

  const handleChange = e => {
    const itemId = e.target.id;
    const currentItem = storage.find(item => item.id === itemId);
    const itemToChange = { ...currentItem };
    itemToChange.isCompleted = !itemToChange.isCompleted;
    dispatch(completedItem(itemToChange));
  };

  const redirectHandler = path => () => navigate(path);

  return (
    <>
      <div className={styles.taskWrapper}>
        <div className={styles.taskHeading}>{props.item.title}</div>
        <div className={styles.taskDescription}>{props.item.description}</div>
        <hr />
        <Form.Check
          type="checkbox"
          label={'Завершено'}
          checked={props.item.isCompleted}
          id={props.item.id}
          onChange={handleChange}
        />
        <hr />
        <Form.Group className="d-flex justify-content-between">
          <Button
            className="btn btn-primary delete-btn"
            onClick={redirectHandler(`/todo-list/${props.index}`)}
          >
            Open
          </Button>
          <Button
            className="btn btn-danger delete-btn"
            id={props.item.id}
            onClick={removeHandler}
          >
            Delete
          </Button>
        </Form.Group>
      </div>
    </>
  );
};

Item.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};

export default Item;
