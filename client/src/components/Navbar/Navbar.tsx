import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Typography, useTheme } from '@mui/material';
import PixIcon from '@mui/icons-material/Pix';
import FlexBetween from '@/components/FlexBetween';

const Navbar = () => {
  const { palette } = useTheme();
  const location = useLocation();
  const [selected, setSelected] = useState(
    location.pathname === '/' ? 'dashboard' : 'predictions'
  );

  return (
    <FlexBetween mb='0.25rem' p='0.5rem 0rem' color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap='0.75rem'>
        <PixIcon sx={{ fontSize: '28px' }} />
        <Typography variant='h4' fontSize='16px'>
          Finanseer
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap='2rem'>
        <Box
          sx={{
            color: selected === 'dashboard' ? 'inherit' : palette.grey[700],
            '&:hover': { color: palette.primary[100] },
          }}
        >
          <Link
            to='/'
            onClick={() => setSelected('dashboard')}
            style={{
              color: 'inherit',
              textDecoration: 'inherit',
            }}
          >
            dashboard
          </Link>
        </Box>
        <Box
          sx={{
            color: selected === 'predictions' ? 'inherit' : palette.grey[700],
            '&:hover': { color: palette.primary[100] },
          }}
        >
          <Link
            to='/predictions'
            onClick={() => setSelected('predictions')}
            style={{
              color: 'inherit',
              textDecoration: 'inherit',
            }}
          >
            predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
