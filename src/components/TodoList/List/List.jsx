import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import Item from '../Item';

const List = props => {
  const storage = useSelector(state => state.storage.storage);

  return (
    <Row>
      {storage
        .map(todoItem => (
          <Col lg={4} key={uuid()}>
            <Item item={todoItem} />
          </Col>
        ))
        .reverse()}
    </Row>
  );
};

export default List;
