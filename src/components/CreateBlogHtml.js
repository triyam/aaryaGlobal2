import React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Container, Typography, Box } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const Input = styled('input')({
  display: 'none',
});

function CreateBlogHtml() {
  return (
    <Container sx={{ mt: 20 }}>
      <Typography variant="h2" sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
        Add your Blog post
      </Typography>
      <Box
        sx={{
          width: 400,
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
            <Button variant="outlined" component="span">
              <FileUploadIcon color="primary" style={{ fontSize: 50 }} />
            </Button>
          </label>
        </Box>
      </Box>
    </Container>
  );
}

export default CreateBlogHtml;
