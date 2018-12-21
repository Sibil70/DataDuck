var app = new Vue({
    el: '#app',
    data: {
      errors: [],
      email: null,
      password: null
    //   checkbox: null
    },
    methods: {
      checkForm: function (e) {
        if (this.email && this.password) {
            return true;
        }
        this.errors = [];
  
        if (!this.email) {
          this.errors.push('Требуется указать почту');
        }
        if (!this.password) {
          this.errors.push('Неверный пароль');
        }
        // if (!this.checkbox) {
        //     console.log(this.checkbox)
        //   this.errors.push('Вы не совершеннолетний');
        // }

  
        e.preventDefault();
      }
    }
  });

  module.exports = app;