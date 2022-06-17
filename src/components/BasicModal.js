import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '1.25rem',
  textAlign: 'center',
  boxShadow: 24,
  padding: '3rem 2rem 2rem',
};

export default function BasicModal({ open, handleOpen, handleClose }) {
  const handleLogin = () => {
    navigate(`/login`, { replace: true });
  };
  const navigate = useNavigate();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            You have to login to see more !
          </Typography>
          <Button onClick={handleLogin}>Login Now !</Button>
        </Box>
      </Modal>
    </div>
  );
}
