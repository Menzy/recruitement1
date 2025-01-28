import { Container, Typography } from '@mui/material';

const Home = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Welcome to Jobsearch
            </Typography>
            <Typography variant="body1" paragraph>
                Find your dream job or discover career insights through our blog.
            </Typography>
        </Container>
    );
};

export default Home;