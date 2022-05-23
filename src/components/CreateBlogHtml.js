import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, Container, Typography, Box } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Input = styled('input')({
  display: 'none',
});

function CreateBlogHtml() {
  const [htmlFile, sethtmlFile] = useState(null);

  const formik = useFormik({
    initialValues: {
      title: '',
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required('Title is Required'),
      file: Yup.mixed().required('File is required'),
    }),
    onSubmit: async () => {
      try {
        await axios.post(
          'https://aryaglobal2.herokuapp.com/blogpost',
          {
            type: 'html',
            title: formik.values.title,
            file: htmlFile,
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
          }
        );
        console.log('Successfully posted the blog');
      } catch (err) {
        console.log(err);
      }
    },
  });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  // };

  return (
    <Container sx={{ mt: 10 }}>
      <Typography variant="h2" sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
        Add your Blog post
      </Typography>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
        <TextField
          label="Blog Title"
          id="filled-size-normal"
          variant="filled"
          sx={{ width: 500 }}
          inputProps={{ style: { fontSize: 20 } }}
          InputLabelProps={{ style: { fontSize: 20 } }}
          type="text"
          {...formik.getFieldProps('title')}
          helperText={formik.touched.title && formik.errors.title}
        />
      </Box>
      <Box
        sx={{
          width: '75%',
          height: 150,
          border: 3,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          mx: 'auto',
          borderRadius: 1,
        }}
      >
        <Typography variant="h3" sx={{ display: 'flex', justifyContent: 'center' }}>
          Upload HTML file
        </Typography>

        <Box sx={{ mt: 2, mx: 'auto' }}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="contained-button-file">
            <Input accept=".html" id="contained-button-file" multiple type="file" />
            <Button
              variant="outlined"
              component="span"
              onClick={(e) => {
                sethtmlFile(e.target.files[0]);
              }}
            >
              <FileUploadIcon color="primary" style={{ fontSize: 50 }} />
            </Button>
          </label>
        </Box>
      </Box>
      <div className="text-center">
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 5, mb: 2, width: '50%' }}
          onClick={() => formik.handleSubmit()}
        >
          Post Blog
        </Button>
      </div>
    </Container>
  );
}

export default CreateBlogHtml;
