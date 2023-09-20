import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import Item from '../Item';
import generateUniqueId from '../../util/functions';

const List = () => {
  const todos = useSelector(state => state.todos.todos);

  return (
    <>
      {todos
        .map((todoItem, index) => (
          <Col lg={4} key={generateUniqueId()}>
            <Item item={todoItem} index={index} />
          </Col>
        ))
        .reverse()}
    </>
  );
};

export default List;
