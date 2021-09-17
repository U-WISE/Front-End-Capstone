import axios from 'axios';

/* eslint-disable no-unused-expressions */

export const emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const toggleModal = (event) => {
  document.getElementById('answer-modal').style.visibility = 'hidden';
};

export const handleChange = (event) => {
  const email = document.getElementById('email');
  const modalButton = document.getElementById('modal-submit');
  const inputFiles = document.getElementById('file-input');

  // Validate that there are no more than 5 files uploaded
  inputFiles.files.length <= 5
    ? modalButton.disabled = false
    : modalButton.disabled = true;
  // Validate Email
  emailValidation.test(email.value)
    ? modalButton.disabled = false
    : modalButton.disabled = true; email.style.border = '2px solid red';
};

export const handleSubmit = (event, id) => {
  event.preventDefault();
  const email = event.target.email.value;
  const answerer_name = event.target.username.value;
  const answer_body = event.target.answerText.value;
  console.log(id);
  console.log('id: ', id);
  const objToSend = {
    'email': email,
    'answer_body': answer_body,
    'answerer_name': answerer_name,
    'photos': [...event.target.files.files]
  };
  console.log(objToSend);
  // TODO: Post to qa/questions
};


export const handlePhotos = () => {
  // Array.from(document.getElementById('file-input').files).map((file, index) => {
  //   return (
  //     <div id={index}>
  //       <img src={file.name} alt="" />
  //     </div>
  //   );
  // });
};