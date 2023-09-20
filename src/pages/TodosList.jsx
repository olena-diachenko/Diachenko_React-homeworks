import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from 'react-router-dom';
import List from '../components/List';
import DefaultTemplate from '../templates/DefaultTemplate.jsx';

const TodosList = props => {
  const navigation = useNavigate();

  const backHandler = value => e => {
    navigation(value);
  };

  return (
    <DefaultTemplate>
      <h1 className="text-center mt-5 mb-5">List to do</h1>
      <Row>
        <List />
      </Row>
      <Stack className="col-md-2 mx-auto mt-3">
        <Button variant="primary" onClick={backHandler(-1)}>
          Go back
        </Button>
      </Stack>
    </DefaultTemplate>
  );
};

export default TodosList;
