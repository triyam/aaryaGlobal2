import React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Container, Typography, Box } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import TextField from '@mui/material/TextField';

const Input = styled('input')({
  display: 'none',
});

function CreateBlogHtml() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

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
        onSubmit={handleSubmit}
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
      <div className="text-center">
        <Button type="submit" variant="contained" sx={{ mt: 5, mb: 2, width: '50%' }}>
          Post Blog
        </Button>
      </div>
    </Container>
  );
}

export default CreateBlogHtml;
