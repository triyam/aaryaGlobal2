import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography, Modal } from '@mui/material';
import Box from '@mui/material/Box';
// import polygon2 from '../assets/img/main/Polygon 2.png'

// components
import Page from '../dashboardComponents/Page';
import Iconify from '../dashboardComponents/Iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Blog() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Page title="Dashboard: Blog">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
          <Button
            onClick={handleOpen}
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Post
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Choose the type of Blog you wish to create
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                  <div>
                    {/* <button type="button" className="btn btn-primary btn-lg btn-block">
                      Drag n Drop HTML Page
                    </button> */}

                    <div>
                      <RouterLink to="/createbloghtml" state={{ title: 'Drag n Drop HTML Page' }}>
                        <p id="detail_btn">Upload your HTML Page</p>
                      </RouterLink>
                    </div>

                    {/* <button type="button" className="btn btn-primary btn-lg btn-block">
                      Write it by Yourself
                    </button> */}

                    <div>
                      <RouterLink to="/createblogself" state={{ title: 'Write it by Yourself' }}>
                        <p id="detail_btn">Write it by Yourself</p>
                      </RouterLink>
                    </div>
                  </div>
                </Stack>
              </Typography>
            </Box>
          </Modal>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch posts={POSTS} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack>

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
