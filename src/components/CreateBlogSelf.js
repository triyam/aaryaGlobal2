import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import TextField from '@mui/material/TextField';

const CreateBlogSelf = () => {
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
          <AddPhotoAlternateIcon color="action" style={{ fontSize: 60 }} />
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
  const ImageUpload = styled('input')({
    display: 'none',
  });

  const Layout = styled('div')({
    '@media(min-width: 727px)': {
      marginLeft: '30px',
      width: '80%',
    },
  });

  return (
    <Box sx={{ ml: '3%', mt: '3%' }}>
      <Typography variant="h2">Write your own blog</Typography>
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
        <Layout sx={{}}>
          <Box sx={{ mb: 3, width: '100%' }}>
            <TextField
              id="standard-basic"
              sx={{ width: '80%' }}
              inputProps={{ style: { fontSize: 40 } }}
              InputLabelProps={{ style: { fontSize: 40 } }}
              label="Title"
              variant="standard"
            />
          </Box>
          <Box sx={{ width: '100%' }}>
            <TextareaAutosize
              minRows={6}
              placeholder="Start writing"
              style={{ width: '90%', padding: '5px', fontSize: 25 }}
            />
          </Box>
        </Layout>
      </Box>
    </Box>
  );
};

export default CreateBlogSelf;
