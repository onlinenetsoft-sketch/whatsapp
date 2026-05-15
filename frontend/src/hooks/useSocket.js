import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io(
  import.meta.env.VITE_SOCKET_URL
);

function useSocket() {
  const [connected, setConnected] =
    useState(false);

  useEffect(() => {
    socket.on('connect', () => {
      setConnected(true);
    });

    socket.on('disconnect', () => {
      setConnected(false);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  return {
    socket,
    connected,
  };
}

export default useSocket;