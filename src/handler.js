/* eslint-disable linebreak-style */
const { nanoid } = require('nanoid');
const { notes } = require('./notes.js');

/* eslint-disable linebreak-style */
const addNoteHandler = (request, h)=>{
  const { title, tags, body } = request.payload;
  const id = nanoid(16);

  const createAt = new Date().toISOString();
  const updateAt = createAt;

  const newNote = {
    title, tags, body, id, createAt, updateAt
  };

  notes.push(newNote);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;
  if (isSuccess){
    const response = h.response({
      status : 'success',
      message : 'Catatan berhasil ditambahkan',
      data:{
        noteId : id,
      }
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status : 'fail',
    message : 'Catatan gagal ditambahkan'
  });
  response.code(500);
  return response;
};


const getAllNotesHandler = ()=>({
  status : 'success',
  data :{
    notes,
  }
});

module.exports = { addNoteHandler, getAllNotesHandler };