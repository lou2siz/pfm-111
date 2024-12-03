import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const NeonBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(3),
  background: 'rgba(17, 17, 17, 0.7)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  border: '1px solid rgba(0, 242, 255, 0.1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 'inherit',
    padding: '2px',
    background: 'linear-gradient(45deg, #00f2ff, #7928ca)',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  },
  '&:hover': {
    '&::before': {
      opacity: 1,
    },
    boxShadow: '0 0 30px rgba(0, 242, 255, 0.2)',
  },
}));

export default NeonBox; 