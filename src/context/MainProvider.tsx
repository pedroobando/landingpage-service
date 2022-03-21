import { createContext, useReducer } from 'react';
import { mainReducer } from './mainReducer';

import {
  iMainContextProps,
  iAuthProviderProps,
  iServiceStateProps,
  iUserRegister,
  iUserStateProps,
  iUserTokenProps,
} from './interface';

export const MainContext = createContext({} as iMainContextProps);
const _tokenName = '39sk238xs2';

const user: iUserStateProps = {
  logged: false,
  decoded: {
    uid: '',
    name: '',
    email: '',
  },
};

export const initialState: iServiceStateProps = {
  user,
  loading: false,
  scroll: 0,
  openDrawer: false,
};

const initlocal = (): iServiceStateProps => {
  return {
    user: { ...user },
    scroll: 0,
    loading: false,
    openDrawer: false,
  };
};

const retDecodeUser = (payload: iUserTokenProps): iUserStateProps => {
  return {
    logged: true,
    decoded: {
      uid: payload.uid,
      name: payload.name,
      email: payload.email,
    },
  };
};

export const MainProvider = ({ children }: iAuthProviderProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState, initlocal);

  const doLogin = (payload: iUserTokenProps) => {
    // localStorage.setItem(_tokenName, payload.token);
    dispatch({
      type: 'LOGIN',
      payload: retDecodeUser(payload),
    });
  };

  const doLogout = () => {
    // localStorage.removeItem(_tokenName);
    dispatch({
      type: 'LOGOUT',
    });
  };

  const doScroll = (scrollY: number): void => {
    dispatch({ type: 'SCROLL', payload: scrollY });
  };

  const doLoading = (status: boolean) => {
    dispatch({ type: 'LOADING', payload: status });
  };

  const doRegister = (newuser: iUserRegister): boolean => {
    return true;
  };

  return (
    <MainContext.Provider
      value={{
        scroll: state.scroll,
        loading: state.loading,
        user: state.user,
        logged: state.user.logged,
        doLogin,
        doLogout,
        doLoading,
        doRegister,
        doScroll,
      }}>
      {children}
    </MainContext.Provider>
  );
};
