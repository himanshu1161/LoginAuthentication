import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, setToken, logout as logoutAction } from '../slices/authSlice';
import { toast } from 'react-toastify';

const useAuthSession = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(fetchUser(token));
    }
  }, [token, dispatch]);

  const login = (token) => {
    dispatch(setToken(token));
    toast.success('Login successful');
  };

  const logout = () => {
    dispatch(logoutAction());
    toast.info('Logged out');
  };

  return { user, login, logout };
};

export default useAuthSession;
