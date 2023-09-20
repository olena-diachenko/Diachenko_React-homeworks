import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import DefaultTemplate from '../templates/DefaultTemplate.jsx';

const TodoItem = () => {
  const storage = useSelector(state => state.storage.data);
  const index = useParams().todoItemIndex;
  const item = storage[index];

  const navigation = useNavigate();

  const backHandler = value => () => {
    navigation(value);
  };

  const styles = {
    margin: '0 auto',
    marginTop: '50px',
  };

  return (
    <DefaultTemplate>
      <Card style={styles}>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <hr />
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
      <Stack className="col-md-2 mx-auto mt-3">
        <Button variant="primary" onClick={backHandler(-1)}>
          Go back
        </Button>
      </Stack>
    </DefaultTemplate>
  );
};

export default TodoItem;
