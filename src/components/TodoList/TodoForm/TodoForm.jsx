import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import styles from './style.module.css';
import { deleteStorage, setData } from '../../../store/slices/storage';

const TodoForm = props => {
  const dispatch = useDispatch();
  const submitHandler = item => {
    dispatch(setData(item));
  };
  const deleteAllHandler = () => {
    dispatch(deleteStorage());
  };

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        completed: false,
      }}
      onSubmit={(values, { resetForm }) => {
        submitHandler(values);
        resetForm({ values: '' });
      }}
      validate={values => {
        const errors = {};

        if (!values.title) {
          errors.title = 'Required';
        }
        if (!values.description) {
          errors.description = 'Required';
        }

        return errors;
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Task title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              required
            />
            {touched.title && errors.title && (
              <div className={styles.error}>{errors.title}</div>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Task body</Form.Label>
            <Form.Control
              as="textarea"
              rows={10}
              cols={30}
              name="description"
              placeholder="Task body"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              required
            />
            {touched.description && errors.description && (
              <div className={styles.error}>{errors.description}</div>
            )}
          </Form.Group>
          <Form.Group className="d-flex justify-content-between">
            <Stack direction="horizontal" gap={1}>
              <Button type="submit" variant="primary" className="">
                Create Task!
              </Button>
              <Button type="reset" variant="warning" onClick={handleReset}>
                Очистить
              </Button>
            </Stack>
            <Button
              type="button"
              className="btn btn-danger remove-all"
              onClick={deleteAllHandler}
            >
              Удалить все
            </Button>
          </Form.Group>
        </Form>
      )}
    </Formik>
  );
};
export default TodoForm;
