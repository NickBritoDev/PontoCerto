// Home.jsx
import React from 'react';
import Sidebar from './components/Sidebar'
import ToggleMode from './components/ToggleMode';
import { Flex } from '@chakra-ui/react';
//import {useAuthentication} from '../public/auth/authUtils'

export default function Home() {
  /*const { setupAuthenticationInterval } = useAuthentication();

  useEffect(() => {
    const cleanup = setupAuthenticationInterval();
    return cleanup;
  }, [setupAuthenticationInterval]);*/

  return (
    <>
      <Flex justify={'center'} pos={'absolute'} right={2} top={2} gap={0.5}>
      <ToggleMode />
      <Sidebar />
      </Flex>
    </>
  );
}
