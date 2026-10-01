import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const playlistSchema = Yup.object({
  name: Yup.string()
    .required('Playlist name is required'),
  description: Yup.string(),
  genre: Yup.string()
    .required('Genre is required')
    .notOneOf([''], 'Please select a genre'),
});

const PlaylistFormik = () => {
  const [createdPlaylist, setCreatedPlaylist] = useState(null);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px 0', borderRadius: '8px' }}>
      <h2>Spotify Playlist Creator (Formik + Yup)</h2>
      
      <Formik
        initialValues={{ name: '', description: '', genre: '' }}
        validationSchema={playlistSchema}
        onSubmit={(values, { resetForm }) => {
          setCreatedPlaylist(values);
          resetForm();
        }}
      >
        {({ touched, errors }) => (
          <Form style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px' }}>
            <div>
              <label htmlFor="name">Playlist Name <span style={{color: 'red'}}>*</span></label><br />
              <Field 
                type="text" 
                id="name" 
                name="name" 
                placeholder="My Awesome Playlist"
                style={{ width: '100%', padding: '8px', borderColor: touched.name && errors.name ? 'red' : '#ccc', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px' }} 
              />
              <ErrorMessage name="name" component="div" style={{ color: 'red', fontSize: '14px', marginTop: '5px' }} />
            </div>

            <div>
              <label htmlFor="description">Description (Optional)</label><br />
              <Field 
                as="textarea"
                id="description" 
                name="description" 
                placeholder="Give your playlist a catchy description"
                style={{ width: '100%', padding: '8px', minHeight: '80px', borderColor: '#ccc', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px' }} 
              />
              <ErrorMessage name="description" component="div" style={{ color: 'red', fontSize: '14px', marginTop: '5px' }} />
            </div>

            <div>
              <label htmlFor="genre">Genre <span style={{color: 'red'}}>*</span></label><br />
              <Field 
                as="select"
                id="genre" 
                name="genre" 
                style={{ width: '100%', padding: '8px', borderColor: touched.genre && errors.genre ? 'red' : '#ccc', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px' }} 
              >
                <option value="">Select a genre...</option>
                <option value="pop">Pop</option>
                <option value="rock">Rock</option>
                <option value="hiphop">Hip Hop</option>
                <option value="classical">Classical</option>
                <option value="jazz">Jazz</option>
              </Field>
              <ErrorMessage name="genre" component="div" style={{ color: 'red', fontSize: '14px', marginTop: '5px' }} />
            </div>

            <button type="submit" style={{ padding: '10px', background: '#1db954', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' }}>
              Create Playlist
            </button>
          </Form>
        )}
      </Formik>

      {createdPlaylist && (
        <div style={{ marginTop: '20px', padding: '15px', background: '#e3f2fd', borderRadius: '5px' }}>
          <h4 style={{ marginTop: 0 }}>Playlist Created Successfully!</h4>
          <p style={{ margin: '5px 0' }}><strong>Name:</strong> {createdPlaylist.name}</p>
          <p style={{ margin: '5px 0' }}><strong>Description:</strong> {createdPlaylist.description || 'No description provided'}</p>
          <p style={{ margin: '5px 0' }}><strong>Genre:</strong> {createdPlaylist.genre}</p>
        </div>
      )}

      {/* 5. Compare Formik+Yup to manual form */}
      <div style={{ marginTop: '30px', padding: '15px', background: '#f8f9fa', borderLeft: '4px solid #1db954' }}>
        <h4 style={{ marginTop: 0 }}>Why Formik + Yup is better than manual useState + validation:</h4>
        <ol style={{ paddingLeft: '20px', marginBottom: 0 }}>
          <li style={{ marginBottom: '8px' }}><strong>Less Boilerplate:</strong> No need to create multiple <code>useState</code> hooks for every field, errors object, and touched state. Formik handles it all.</li>
          <li style={{ marginBottom: '8px' }}><strong>Simplified Validation:</strong> Yup allows us to write clean, declarative schema rules (like <code>.email().required()</code>) instead of writing complex IF-ELSE blocks manually.</li>
          <li><strong>Built-in Features:</strong> Formik automatically handles <code>handleChange</code>, <code>handleBlur</code> (for touched state), and form submission tracking (isSubmitting), which makes the code much cleaner and easier to maintain.</li>
        </ol>
      </div>
    </div>
  );
};

export default PlaylistFormik;
