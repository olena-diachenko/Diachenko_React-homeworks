import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import styles from './style.module.css';
import { deleteStorage, setData } from '../../../store/slices/storage';

const TodoForm = props => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      completed: false,
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(setData(values));
      resetForm({ values: '' });
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(1, 'Must be 1 character or more')
        .required('Required'),
      description: Yup.string()
        .min(3, 'Must be 3 character or more')
        .required('Required'),
    }),
  });

  const deleteAllHandler = () => {
    dispatch(deleteStorage());
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Task title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          required
        />
        {formik.touched.title && formik.errors.title && (
          <div className={styles.error}>{formik.errors.title}</div>
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          required
        />
        {formik.touched.description && formik.errors.description && (
          <div className={styles.error}>{formik.errors.description}</div>
        )}
      </Form.Group>
      <Form.Group className="d-flex justify-content-between">
        <Stack direction="horizontal" gap={1}>
          <Button type="submit" variant="primary" className="">
            Create Task!
          </Button>
          <Button type="reset" variant="warning" onClick={formik.handleReset}>
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
  );
};
export default TodoForm;
