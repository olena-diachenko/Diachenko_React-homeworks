import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { useSelector } from 'react-redux';
import TodoForm from '../../components/TodoForm';
import List from '../../components/List';
import styles from './style.module.css';
import DefaultTemplate from '../../templates/DefaultTemplate.jsx';

const HomePage = () => {
  const todos = useSelector(state => state.todos.todos);
  const navigate = useNavigate();

  const redirectHandler = path => () => navigate(path);

  return (
    <DefaultTemplate>
      <Link to="/todo-list" className={styles.title}>
        TODO LIST
      </Link>
      <Container>
        <Row>
          <Col lg={4}>
            <TodoForm />
          </Col>
          {todos.length > 0 && (
            <Col lg={8}>
              <Row>
                <List />
              </Row>
              <Stack className="col-md-2 mx-auto mt-3">
                <Button
                  variant="primary"
                  onClick={redirectHandler('/todo-list')}
                >
                  Open List
                </Button>
              </Stack>
            </Col>
          )}
        </Row>
      </Container>
    </DefaultTemplate>
  );
};

export default HomePage;
