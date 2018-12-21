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
        var length = this.password.length
        var checkbox = document.getElementById('confirm');

        if (this.email && this.password && checkbox.checked && length > 3) {
            return true;
        }

        this.errors = [];
  
        if (!this.email) {
            this.errors.push('Неверный адрес элекстронной почты');
                var emailField = document.querySelector('.form__inputError-email').parentNode;
                emailField.style.display = "block";
                var input = document.getElementById('email').parentNode;
                input.style.borderColor = "#e15433";
        }

        if (!this.password || length < 4) {
            this.errors.push('Неверный пароль');
                var passField = document.querySelector('.form__inputError-password').parentNode;
                passField.style.display = "block";
                var input = document.getElementById('password').parentNode;
                input.style.borderColor = "#e15433";
        }
            
        if (!checkbox.checked) {

            var checkError = document.querySelector('.form__check-error');
            checkError.style.display = "block";
        }    

        e.preventDefault();
      },
      deleteEmailError: function () {
        var emailField = document.querySelector('.form__inputError-email').parentNode;
        emailField.style.display = "none";
        var input = document.getElementById('email').parentNode;
        input.style.borderColor = "#20a86b";
      },
      deletePasswordError: function () {
        var passField = document.querySelector('.form__inputError-password').parentNode;
        passField.style.display = "none";
        var input = document.getElementById('password').parentNode;
        input.style.borderColor = "#20a86b";
      },
      deleteCheckError: function () {
        var checkError = document.querySelector('.form__check-error');
        checkError.style.display = "none";
      }
    }
  });

  module.exports = app;