/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
const Hapi = require('@hapi/hapi');

const init = async () =>{
  const server = Hapi.server({
    port : 5000,
    host : 'localhost'
  });
  await server.start();
  console.log(`server berjalan di ${server.info.uri}`);
};

init();