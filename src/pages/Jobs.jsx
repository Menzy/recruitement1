import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Box, Chip, TextField, MenuItem, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { jobListings } from '../data/jobListings';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';

const Jobs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [employmentType, setEmploymentType] = useState('all');

    const filteredJobs = jobListings.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (employmentType === 'all' || job.employmentType === employmentType)
    );

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Search and Filter Section */}
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
                    Available Jobs
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Search jobs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon color="action" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            select
                            fullWidth
                            variant="outlined"
                            value={employmentType}
                            onChange={(e) => setEmploymentType(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <WorkIcon color="action" />
                                    </InputAdornment>
                                ),
                            }}
                        >
                            <MenuItem value="all">All Types</MenuItem>
                            <MenuItem value="Full-time">Full-time</MenuItem>
                            <MenuItem value="Part-time">Part-time</MenuItem>
                            <MenuItem value="Contract">Contract</MenuItem>
                            <MenuItem value="Internship">Internship</MenuItem>
                        </TextField>
                    </Grid>
                </Grid>
            </Box>

            {/* Jobs Grid */}
            <Grid container spacing={3}>
                {filteredJobs.map((job) => (
                    <Grid item xs={12} md={6} key={job.id}>
                        <Card 
                            sx={{ 
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                '&:hover': {
                                    boxShadow: 6
                                }
                            }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                                    <Box sx={{ flex: 1 }}>
                                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                                            {job.title}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <BusinessIcon sx={{ fontSize: 20, mr: 1, color: 'text.secondary' }} />
                                            <Typography variant="subtitle1" color="text.secondary">
                                                {job.company}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box 
                                        component="img"
                                        src={job.companyLogo}
                                        alt={job.company}
                                        sx={{
                                            width: 60,
                                            height: 60,
                                            objectFit: 'cover',
                                            borderRadius: 1,
                                            ml: 2
                                        }}
                                    />
                                </Box>
                                
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <LocationOnIcon sx={{ fontSize: 20, mr: 1, color: 'text.secondary' }} />
                                    <Typography variant="body2" color="text.secondary">
                                        {job.location}
                                    </Typography>
                                </Box>
                                <Chip 
                                    label={job.employmentType}
                                    size="small"
                                    sx={{ 
                                        backgroundColor: 'primary.main',
                                        color: 'white',
                                        fontWeight: 500,
                                        mb: 2
                                    }}
                                />
                                <Typography variant="body2" sx={{ color: 'success.main', fontWeight: 500 }}>
                                    {job.salary}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ p: 2, pt: 0 }}>
                                <Button 
                                    component={RouterLink}
                                    to={`/jobs/${job.slug}`}
                                    variant="contained" 
                                    size="large"
                                    fullWidth
                                    sx={{ 
                                        textTransform: 'none',
                                        fontWeight: 600
                                    }}
                                >
                                    View Details
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Jobs;