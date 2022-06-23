import { useRef, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton } from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';
// mocks_
import account from '../../_mock/account';
import { getAuth, signOut } from 'firebase/auth';
import { useCookies } from 'react-cookie';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
    linkTo: '/',
  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
    linkTo: '#',
  },
  {
    label: 'Settings',
    icon: 'eva:settings-2-fill',
    linkTo: '#',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const anchorRef = useRef(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);

  const auth = getAuth();
  const user = auth.currentUser;
  const JWT_TOKEN_COOKIE_NAME = 'token';
  const [cookies, setCookie, removeCookie] = useCookies([JWT_TOKEN_COOKIE_NAME]);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        removeCookie(JWT_TOKEN_COOKIE_NAME);
        navigate('/', { replace: true });
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleLogin = () => {
    navigate('/login', { replace: true });
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar src={user?.photoURL ? user?.photoURL : account.photoURL} alt="photoURL" />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        {user ? (
          <>
            <Box sx={{ my: 1.5, px: 2.5 }}>
              <Typography variant="subtitle2" noWrap>
                {user?.displayName ? user?.displayName : account.displayName}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                {user?.email ? user?.email : account.email}
              </Typography>
            </Box>
            <Divider sx={{ borderStyle: 'dashed' }} />
            <Stack sx={{ p: 1 }}>
              {MENU_OPTIONS.map((option) => (
                <MenuItem key={option.label} to={option.linkTo} component={RouterLink} onClick={handleClose}>
                  {option.label}
                </MenuItem>
              ))}
            </Stack>
            <Divider sx={{ borderStyle: 'dashed' }} />
            <MenuItem onClick={handleLogOut} sx={{ m: 1 }}>
              Logout
            </MenuItem>
          </>
        ) : (
          <Box sx={{ my: 1.5, px: 2.5 }}>
            <MenuItem onClick={handleLogin} sx={{ m: 1 }}>
              Login
            </MenuItem>
          </Box>
        )}
      </MenuPopover>
    </>
  );
}
