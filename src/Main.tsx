import React, {useEffect, useState} from 'react';
import BottomTabs from './Stack/BottomStack';
import AuthStack from './Navigations/Auth';
import {useSelector} from 'react-redux';
import {getItem, clearItem} from './utils/asyncStorage';

function Main() {
  const login = useSelector(state => state.global.loginOrNot);
  const [localLogin, setLocalLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkLoginStatus();
  }, [login]); // Add login as dependency

  const checkLoginStatus = async () => {
    try {
      setIsLoading(true);
      const userData = await getItem('user');

      // If logged out from Redux, also clear AsyncStorage
      if (!login && userData) {
        await clearItem('user');
        setLocalLogin(false);
      } else if (userData) {
        setLocalLogin(true);
      } else {
        setLocalLogin(false);
      }
    } catch (error) {
      console.log('Error checking login status:', error);
      setLocalLogin(false);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return null; // or return a loading spinner
  }

  return login || localLogin ? <BottomTabs /> : <AuthStack />;
}

export default Main;
