import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* Hero Section */}
            <Box
                sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    py: 8,
                    mb: 6
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography 
                                variant="h2" 
                                component="h1" 
                                sx={{ 
                                    fontWeight: 700,
                                    mb: 2,
                                    fontSize: { xs: '2.5rem', md: '3.5rem' }
                                }}
                            >
                                Find Your Dream Job Today
                            </Typography>
                            <Typography 
                                variant="h6" 
                                sx={{ 
                                    mb: 4,
                                    opacity: 0.9,
                                    fontWeight: 400
                                }}
                            >
                                Connect with top employers and discover opportunities that match your skills and aspirations.
                            </Typography>
                            <Button 
                                component={Link}
                                to="/jobs"
                                variant="contained" 
                                size="large"
                                sx={{ 
                                    bgcolor: 'white',
                                    color: 'primary.main',
                                    '&:hover': {
                                        bgcolor: 'grey.100'
                                    }
                                }}
                            >
                                Browse Jobs
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Features Section */}
            <Container maxWidth="lg" sx={{ mb: 8 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Paper 
                            elevation={0}
                            sx={{ 
                                p: 4,
                                height: '100%',
                                backgroundColor: 'grey.50',
                                borderRadius: 2
                            }}
                        >
                            <WorkIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                            <Typography variant="h5" component="h2" gutterBottom>
                                Latest Jobs
                            </Typography>
                            <Typography color="text.secondary">
                                Access thousands of job listings from top companies across various industries.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper 
                            elevation={0}
                            sx={{ 
                                p: 4,
                                height: '100%',
                                backgroundColor: 'grey.50',
                                borderRadius: 2
                            }}
                        >
                            <TrendingUpIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                            <Typography variant="h5" component="h2" gutterBottom>
                                Career Growth
                            </Typography>
                            <Typography color="text.secondary">
                                Get insights and advice from industry experts through our career blog.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper 
                            elevation={0}
                            sx={{ 
                                p: 4,
                                height: '100%',
                                backgroundColor: 'grey.50',
                                borderRadius: 2
                            }}
                        >
                            <GroupIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                            <Typography variant="h5" component="h2" gutterBottom>
                                Network
                            </Typography>
                            <Typography color="text.secondary">
                                Connect with professionals and expand your professional network.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Home;