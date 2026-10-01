import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const LoginFormik = () => {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px 0', borderRadius: '8px' }}>
      <h2>Login Form (Formik + Yup)</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          setSubmittedData(values);
          resetForm(); // Clear the form after submission
        }}
      >
        {({ touched, errors }) => (
          <Form style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
            <div>
              <label htmlFor="email">Email:</label><br />
              <Field 
                type="email" 
                id="email" 
                name="email" 
                style={{ width: '100%', padding: '8px', borderColor: touched.email && errors.email ? 'red' : '#ccc', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px' }} 
              />
              <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '14px', marginTop: '5px' }} />
            </div>

            <div>
              <label htmlFor="password">Password:</label><br />
              <Field 
                type="password" 
                id="password" 
                name="password" 
                style={{ width: '100%', padding: '8px', borderColor: touched.password && errors.password ? 'red' : '#ccc', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px' }} 
              />
              <ErrorMessage name="password" component="div" style={{ color: 'red', fontSize: '14px', marginTop: '5px' }} />
            </div>

            <button type="submit" style={{ padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}>
              Submit
            </button>
          </Form>
        )}
      </Formik>

      {submittedData && (
        <div style={{ marginTop: '20px', padding: '15px', background: '#e9ecef', borderRadius: '5px' }}>
          <h4 style={{ marginTop: 0 }}>Submitted Values:</h4>
          <p style={{ margin: '5px 0' }}><strong>Email:</strong> {submittedData.email}</p>
          <p style={{ margin: '5px 0' }}><strong>Password:</strong> {submittedData.password}</p>
        </div>
      )}
    </div>
  );
};

export default LoginFormik;
