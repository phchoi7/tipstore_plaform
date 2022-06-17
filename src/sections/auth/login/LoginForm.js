import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import { Link, Stack, Checkbox, TextField, IconButton, InputAdornment, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';
import { fire } from '../../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const JWT_TOKEN_COOKIE_NAME = 'token';
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
  const [cookies, setCookie, removeCookie] = useCookies([JWT_TOKEN_COOKIE_NAME]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      setLoading(true);
      fire
        .auth()
        .signInWithEmailAndPassword(formik.values.email, formik.values.password)
        .then(() => {
          // Sign-out successful.
          toast('Login successful!!');
          const accessToken = fire.auth().currentUser.getIdToken(true);

          setCookie(JWT_TOKEN_COOKIE_NAME, accessToken, { expires: null });
          // storeToken(accessToken, displayName);
          setLoading(false);
          navigate('/', { replace: true });
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
            case 'auth/user-disabled':
            case 'auth/user-not-found':
              toast(error.message);
              setLoading(false);
              isSubmitting = false;
              break;
            case 'auth/wrong-password':
              toast(error.message);
              setLoading(false);
              break;
            default:
              break;
          }
        });
    },
  });

  console.log(formik.values.email);
  const { errors, touched, values, handleSubmit, getFieldProps } = formik;
  let { isSubmitting } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  console.log(formik);

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
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
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          />

          <Link component={RouterLink} variant="subtitle2" to="#" underline="hover">
            Forgot password?
          </Link>
        </Stack>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
