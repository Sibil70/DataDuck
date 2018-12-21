var app = new Vue({
    el: '#app',
    data: {
      errors: [],
      email: '',
      password: '',
      emails: ['sans87@inbox.ru', 'email@emal']
    },
    methods: {
      checkForm: function (e) {
        var checkbox = document.getElementById('confirm');

        if (this.email && this.password && checkbox.checked) {
            return true;
        }

        this.errors = [];
  
        if (!this.email) {
            this.errors.push('Неверный адрес элекстронной почты');
                var emailField = document.getElementById('email').parentNode;
                emailField.classList.add('form__input-error');
        }

        if (!this.password) {
            this.errors.push('Неверный пароль');
                var passField = document.getElementById('password').parentNode;
                passField.classList.add('form__input-error');
        }
            
        if (!checkbox.checked) {
            var checkError = document.querySelector('.form__inputError');
            checkError.style.display = "block";
        } else {
            checkError.style.display = "none";
        }    

        e.preventDefault();
      },
      deleteEmailError: function () {
        var emailField = document.getElementById('email').parentNode;
        emailField.classList.remove('form__input-error');
      },
      deletePasswordError: function () {
        var passField = document.getElementById('password').parentNode;
        passField.classList.remove('form__input-error');
      }
    }
  });

  module.exports = app;