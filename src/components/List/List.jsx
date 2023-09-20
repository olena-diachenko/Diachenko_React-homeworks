import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import Item from '../Item';
import generateUniqueId from '../../util/functions';

const List = () => {
  const storage = useSelector(state => state.storage.data);

  return (
    <>
      {storage
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
