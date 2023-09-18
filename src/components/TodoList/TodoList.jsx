import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TodoForm from './TodoForm';
import List from './List';

const TodoList = props => (
  <Container>
    <Row>
      <Col lg={4}>
        <TodoForm />
      </Col>
      <Col lg={8}>
        <List />
      </Col>
    </Row>
  </Container>
);
export default TodoList;
