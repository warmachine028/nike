/** @format */
import { useFormik } from 'formik';
import Button from '../components/Button';
import './Subscribe.scss';
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const Subscribe = () => {
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <section id="🔥Subscribe">
      <div id="🔥Subscribe__X">
        <h3 id="🔥Subscribe__X__H3">
          Sign Up for
          <br />
          <span id="🔥Subscribe__X__H3__Span">Updates</span> & NewsLetters
        </h3>
        <div id="🔥Subscribe__X__X">
          <input
            id="🔥Subscribe__X__X__Email"
            type="email"
            name="email"
            placeholder="subscribe@nike.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null}
          <div id="🔥Subscribe__X__X__X">
            <Button fullWidth onSubmit={formik.handleSubmit}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
