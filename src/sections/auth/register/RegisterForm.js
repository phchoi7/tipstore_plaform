import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';
import { fire } from '../../../firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    username: Yup.string().required('username is required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, formik.values.email, formik.values.password)
        .then((userCredential) => {
          // Signed in
          console.log(userCredential);
          updateProfile(auth.currentUser, {
            displayName: formik.values.username,
            photoURL: 'https://example.com/jane-q-user/profile.jpg',
          })
            .then(() => {
              // Profile updated!
              // ...
              toast('register sucssecfull');
              navigate('/', { replace: true });
            })
            .catch((error) => {
              console.log('error:', error);
              // An error occurred
              // ...
            });

          const user = auth.currentUser;
          // toast('register sucssecfull')
          // navigate('/dashboard', { replace: true });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;

          const errorMessage = error.message;
          if (errorCode === 'auth/email-already-in-use') {
            toast('The email address is already in use by another account.');
          }
        });

      // const auth = fire.getAuth();
      // fire
      //   .getAuth
      //   .createUserWithEmailAndPassword(formik.values.email, formik.values.password).then(() => {
      //     // Sign-out successful.
      //     alert('register sucssecfull')
      //     navigate('/dashboard', { replace: true });
      //   })
    },
  });

  console.log(formik.values);

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              autoComplete="username"
              type="username"
              label="Username"
              {...getFieldProps('username')}
              error={Boolean(touched.username && errors.username)}
              helperText={touched.username && errors.username}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
