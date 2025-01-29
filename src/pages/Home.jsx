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
                    position: 'relative',
                    color: 'white',
                    py: { xs: 10, md: 12 }, // Increased padding by 20%
                    mb: 6,
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&auto=format&fit=crop)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(0.4)',
                        zIndex: -1
                    }
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
                                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                                }}
                            >
                                Find Your Dream Job Today
                            </Typography>
                            <Typography 
                                variant="h6" 
                                sx={{ 
                                    mb: 4,
                                    opacity: 0.9,
                                    fontWeight: 400,
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
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

            {/* Career Fair Section */}
            <Container maxWidth="lg" sx={{ mb: 8 }}>
                <Paper 
                    sx={{ 
                        borderRadius: 2,
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' }
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: '100%', md: '50%' },
                            height: { xs: '300px', md: '400px' },
                            backgroundImage: 'url(https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                    <Box 
                        sx={{ 
                            p: 4,
                            width: { xs: '100%', md: '50%' },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography 
                            variant="overline" 
                            sx={{ 
                                color: 'primary.main',
                                fontWeight: 600,
                                letterSpacing: 1
                            }}
                        >
                            Upcoming Event
                        </Typography>
                        <Typography 
                            variant="h4" 
                            component="h2" 
                            sx={{ 
                                fontWeight: 700,
                                mb: 2
                            }}
                        >
                            Spring Tech Career Fair 2024
                        </Typography>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                color: 'text.secondary',
                                mb: 3
                            }}
                        >
                            Join us for our annual career fair featuring top tech companies from Silicon Valley. Network with industry leaders, attend workshops, and find your next career opportunity.
                        </Typography>
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                📅 March 15, 2024
                            </Typography>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                📍 Tech Convention Center
                            </Typography>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                🕒 9:00 AM - 5:00 PM
                            </Typography>
                        </Box>
                        <Button 
                            variant="contained" 
                            size="large"
                            sx={{ 
                                width: 'fit-content',
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                                fontWeight: 600
                            }}
                        >
                            Register Now
                        </Button>
                    </Box>
                </Paper>
            </Container>

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