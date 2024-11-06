import { io } from 'socket.io-client';
import { defineStore } from 'pinia';

export const useSocket = defineStore('socket', () => {
  let socket = $ref(null);
  let videoDanmuList = $ref([]);
  const initialize = () => {
    // 建立传输链接 http://127.0.0.1:8081
    socket = io('ws://127.0.0.1:8081');
    socket.on('connect', () => {
      console.log('socketio已连接');
    });
    onBulletChat();
  };

  const handleAddDanmu = (data: any) => {
    socket.emit('bulletChat', data);
  };

  const onBulletChat = () => {
    // 监听bulletChat事件
    socket.on('message', (data) => {
      videoDanmuList.push(data);
    });
  };

  return {
    videoDanmuList,
    initialize,
    handleAddDanmu,
  };
});

