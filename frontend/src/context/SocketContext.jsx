import {
  createContext,
  useContext,
} from 'react';

import useSocket from '@/hooks/useSocket';

const SocketContext = createContext();

export function SocketProvider({
  children,
}) {
  const socketData = useSocket();

  return (
    <SocketContext.Provider
      value={socketData}
    >
      {children}
    </SocketContext.Provider>
  );
}

export const useSocketContext = () =>
  useContext(SocketContext);