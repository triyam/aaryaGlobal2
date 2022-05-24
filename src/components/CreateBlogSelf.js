import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography, Button } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  layout: {
    '@media(min-width: 727px)': {
      marginLeft: '30px',
      width: '80%',
    },
  },
});
const CreateBlogSelf = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      file: '',
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required('Title is Required'),
      description: Yup.string().required('Description is required'),
    }),
    onSubmit: async () => {
      // console.log(values.title, imageFile.file, values.description);
      const token = localStorage.getItem('jwt');
      // console.log(token);
      try {
        await axios.post(
          'https://aryaglobal2.herokuapp.com/blogpost',
          // 'http://localhost:5000/blogpost',
          {
            type: 'self',
            title: values.title,
            description: values.description,
            file: imageFile.file,
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log('Successfully posted the blog');
      } catch (err) {
        console.log(err);
      }
    },
  });
  const ImageInput = () => (
    <Box sx={{ width: 200, height: 200, border: 1, borderColor: 'grey.500', borderRadius: 1 }}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="icon-button-file">
        <ImageUpload
          accept="image/*"
          id="icon-button-file"
          type="file"
          onChange={(e) => {
            uploadImage(e.target.files[0]);
          }}
        />

        <IconButton
          sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <AddPhotoAlternateIcon color="action" style={{ fontSize: 80 }} />
        </IconButton>
      </label>
    </Box>
  );

  const [imageFile, setimageFile] = useState({
    url: '',
    file: null,
  });

  const uploadImage = (File) => {
    setimageFile({
      url: URL.createObjectURL(File),
      file: File,
    });
  };

  const { errors, touched, values, getFieldProps } = formik;

  const ImageUpload = styled('input')({
    display: 'none',
  });

  // const Layout = styled('div')({
  //   '@media(min-width: 727px)': {
  //     marginLeft: '30px',
  //     width: '80%',
  //   },
  // });

  return (
    <div className="text-center">
      <Box sx={{ ml: '3%', mt: '3%' }}>
        <Typography variant="h2">Write your own Blog</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Box
            sx={{
              position: 'relative',
              width: 200,
              height: 200,
              mt: 3,
            }}
          >
            {imageFile.file != null ? (
              <Box>
                <img
                  style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 6 }}
                  src={imageFile.url}
                  alt="blogimage"
                />
              </Box>
            ) : (
              <ImageInput />
            )}
          </Box>
          <Box className={classes.layout}>
            <Box sx={{ mb: 3, width: '100%' }}>
              <TextField
                id="standard-basic"
                sx={{ width: '80%' }}
                inputProps={{ style: { fontSize: 40 } }}
                InputLabelProps={{ style: { fontSize: 40 } }}
                label="Blog Title"
                variant="standard"
                type="text"
                {...formik.getFieldProps('title')}
                helperText={touched.title && errors.title}
              />
            </Box>
            <Box sx={{ width: '100%' }}>
              <TextareaAutosize
                minRows={6}
                placeholder="Start writing"
                style={{ width: '90%', padding: '5px', fontSize: 25 }}
                {...formik.getFieldProps('description')}
                helperText={touched.description && errors.description}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <div className="text-center">
        <Button
          type="submit"
          variant="contained"
          onClick={() => formik.handleSubmit()}
          sx={{ mt: 5, mb: 2, width: '50%' }}
        >
          Post Blog
        </Button>
      </div>
    </div>
  );
};

export default CreateBlogSelf;
