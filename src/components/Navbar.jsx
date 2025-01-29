import { AppBar, Toolbar, Typography, Button, Box, Container, useScrollTrigger, IconButton, Menu, MenuItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const location = useLocation();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <AppBar 
            position="sticky" 
            elevation={trigger ? 4 : 0}
            sx={{
                backgroundColor: 'white',
                color: 'text.primary',
            }}
        >
            <Container maxWidth="lg">
                <Toolbar sx={{ padding: { xs: 0 } }}>
                    <Typography 
                        variant="h6" 
                        component={Link} 
                        to="/"
                        sx={{ 
                            flexGrow: 1,
                            textDecoration: 'none',
                            color: 'primary.main',
                            fontWeight: 700,
                            letterSpacing: '-0.5px'
                        }}
                    >
                        JobSearch
                    </Typography>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                        <Button 
                            component={Link} 
                            to="/"
                            sx={{ 
                                color: isActive('/') ? 'primary.main' : 'text.primary',
                                fontWeight: isActive('/') ? 600 : 400
                            }}
                        >
                            Home
                        </Button>
                        <Button 
                            component={Link} 
                            to="/jobs"
                            sx={{ 
                                color: isActive('/jobs') ? 'primary.main' : 'text.primary',
                                fontWeight: isActive('/jobs') ? 600 : 400
                            }}
                        >
                            Jobs
                        </Button>
                        <Button 
                            component={Link} 
                            to="/blog"
                            sx={{ 
                                color: isActive('/blog') ? 'primary.main' : 'text.primary',
                                fontWeight: isActive('/blog') ? 600 : 400
                            }}
                        >
                            Blog
                        </Button>
                    </Box>

                    {/* Mobile Menu */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
                            <MenuItem onClick={handleClose} component={Link} to="/jobs">Jobs</MenuItem>
                            <MenuItem onClick={handleClose} component={Link} to="/blog">Blog</MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;