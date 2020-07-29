import React from 'react';

class QuestionForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log({
      name: e.target.name.value,
      email: e.target.email.value,
      question: e.target.question.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <legend>Задать вопрос автору</legend>
        <p><label htmlFor='name'>Имя </label><input type="text" id="name"></input></p>
        <p><label htmlFor='email'>E-mail </label><input type="email" id="email"></input></p>
        <p><label htmlFor='question'>Вопрос</label></p>
        <p><textarea id="question" style={styles.textArea}></textarea></p>
        <p><button type="submit">Отправить</button></p>
      </form>
    )
  }
}

export default QuestionForm;

const styles = {
  form: {
    paddingTop: '20px'
  },
  textArea: {
    width: '500px',
    height: '100px'
  }
}