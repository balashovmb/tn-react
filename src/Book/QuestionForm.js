import React from 'react';

import Button from '../common/Button';

const QuestionForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log({
      name: e.target.name.value,
      email: e.target.email.value,
      question: e.target.question.value,
    });
  };

  return (

    <form className="border-t-2 pt-2 mt-2" onSubmit={handleSubmit}>
      <legend className="font-bold">Задать вопрос автору</legend>
      <div className="">
        <div className="mt-2">
          <label htmlFor="name">Имя</label>
          <input className="w-64 border-b-2 border-gray-400 mx-8 bg-primary" type="text" id="name" />
        </div>
        <div className="mt-2">
          <label htmlFor="email">E-mail </label>
          <input type="email" className="w-64 border-b-2 border-gray-400 mx-4 bg-primary" id="email" />
        </div>
      </div>
      <div className="mt-2">
        <p><label htmlFor="question">Вопрос</label></p>
        <p><textarea className="border-2 border-gray-400 w-full h-20 md:w-1/2 md:h-24 bg-primary" id="question" /></p>
        <p><Button className="mt-1 mb-2" type="submit">Отправить</Button></p>
      </div>
    </form>

  );
};

export default QuestionForm;
