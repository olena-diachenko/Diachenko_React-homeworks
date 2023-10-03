import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { completedTodo, removeTodo } from '../../store/slices/todos.jsx';
import styles from './style.module.css';

const Item = ({ item, index }) => {
  const todos = useSelector(state => state.todos.todos);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const removeHandler = () => {
    const dataToDelete = todos.find(todo => todo.id === item.id);
    dispatch(removeTodo(dataToDelete));
  };

  const completedHandler = () => {
    dispatch(completedTodo(item.id));
  };

  const redirectHandler = path => () => navigate(path);

  return (
    <>
      <div className={styles.taskWrapper}>
        <div className={styles.taskHeading}>{item.title}</div>
        <div className={styles.taskDescription}>{item.description}</div>
        <hr />
        <Form.Check
          type="checkbox"
          label={'Completed'}
          checked={item.isCompleted}
          onChange={completedHandler}
        />
        <hr />
        <Form.Group className="d-flex justify-content-between">
          <Button
            className="btn btn-primary delete-btn"
            onClick={redirectHandler(`/todo-list/${index}`)}
          >
            Open
          </Button>
          <Button className="btn btn-danger delete-btn" onClick={removeHandler}>
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
