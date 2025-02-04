/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    User.register(data, (err, response) => {
      if(response.success) {
        document.getElementById('register-form').reset()
        const element = new Modal(document.querySelector('#modal-register'));
        element.close();
        App.setState( 'user-logged' );
        User.setCurrent(response.user)
      }
    })

  }
}