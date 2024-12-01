import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const GlassContainer = styled(Paper)(({ theme }) => ({
  background: 'rgba(17, 17, 17, 0.8)',
  backdropFilter: 'blur(8px)',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(3),
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 8px 20px rgba(${theme.palette.primary.main}, 0.2)`,
  },
}));

export default GlassContainer; 