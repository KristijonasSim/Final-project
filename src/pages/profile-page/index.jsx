import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Typography,
} from '@mui/material';

import { selectAuth } from '../../store/auth';
import ProfilePageForm from './profile-page-form';

const ProfilePage = () => {
  const { user: { imgSrc, ...user } } = useSelector(selectAuth);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', lg: 'row' },
      gap: { xs: 3, sm: 30 },
      margin: 3,
    }}

    >
      <Box sx={{ flexGrow: 1, marginTop: 2 }}>
        <Typography
          sx={{ mb: 3, fontWeight: 600 }}
          textAlign="center"
          variant="h4"
        >
          My Account

        </Typography>
        <ProfilePageForm {...user} />
      </Box>
    </Box>
  );
};

export default ProfilePage;
