import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { deleteItem, completedItem } from '../../../store/slices/storage';
import styles from './style.module.css';

const List = props => {
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
    <Row>
      {storage
        .map(todoItem => (
          <Col lg={4} key={uuid()}>
            <div className={styles.taskWrapper}>
              <div className={styles.taskHeading}>{todoItem.title}</div>
              <div className={styles.taskDescription}>
                {todoItem.description}
              </div>
              <hr />
              <Form.Check
                type="checkbox"
                label={'Завершено'}
                checked={todoItem.completed}
                id={todoItem.id}
                onChange={handleChange}
              />
              <hr />
              <Button
                className="btn btn-danger delete-btn"
                id={todoItem.id}
                onClick={handleClick}
              >
                Удалить
              </Button>
            </div>
          </Col>
        ))
        .reverse()}
    </Row>
  );
};

export default List;
