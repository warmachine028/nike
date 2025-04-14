/** @format */
import { useFormik } from 'formik';
import Button from '../components/Button';

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
    <section id="contact-us" className="sm:py-32 py-16 w-full">
      <div className="max-container flex justify-between items-center max-lg:flex-col gap-10">
        <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
          Sign Up for
          <br />
          <span className="text-coral-red">Updates</span> & NewsLetters
        </h3>
        <form onSubmit={formik.handleSubmit} className="lg:max-w-[40%] w-full">
          <div className="flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full bg-none">
            <div className="relative flex-1">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="subscribe@nike.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="input w-full bg-none bg-inherit focus:outline-none focus:border-coral-red"
              />
              {formik.touched.email && formik.errors.email ? (
                <span className="absolute -bottom-6 left-2 text-red-500 text-sm">{formik.errors.email}</span>
              ) : null}
            </div>
            <div className="flex justify-end items-center">
              <Button type="submit" fullWidth>
                Sign Up
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
