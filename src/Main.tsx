import React, {useEffect, useState} from 'react';
import BottomTabs from './Stack/BottomStack';
import AuthStack from './Navigations/Auth';

function Main() {
  const [login, setLogin] = useState(false);

  return !login ? <BottomTabs /> : <AuthStack />;
}

export default Main;
