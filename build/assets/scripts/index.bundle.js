!function(e){var r={};function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(o,n,function(r){return e[r]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";t.r(r),t(1),t(2)},function(e,r){var t=new Vue({el:"#app",data:{errors:[],email:"",password:"",emails:["sans87@inbox.ru","email@emal.com","examlpe@mail.de"]},methods:{checkForm:function(e){var r=this.password.length,t=document.getElementById("confirm"),o=function(e,r){for(var t=0;t<e.length;t++)if(e[t]===r)return!1;return!0}(this.emails,this.email);if(this.email&&this.password&&t.checked&&3<r&&o)return!0;this.errors=[],this.email||(this.errors.push("Неверный адрес элекстронной почты"),document.querySelector(".form__inputError-email").parentNode.style.display="block",document.getElementById("email").parentNode.style.borderColor="#e15433"),(!this.password||r<4)&&(this.errors.push("Неверный пароль"),document.querySelector(".form__inputError-password").parentNode.style.display="block",document.getElementById("password").parentNode.style.borderColor="#e15433"),t.checked||(document.querySelector(".form__check-error").style.display="block"),e.preventDefault()},deleteEmailError:function(){document.querySelector(".form__inputError-email").parentNode.style.display="none",document.getElementById("email").parentNode.style.borderColor="#20a86b"},deletePasswordError:function(){document.querySelector(".form__inputError-password").parentNode.style.display="none",document.getElementById("password").parentNode.style.borderColor="#20a86b"},deleteCheckError:function(){document.querySelector(".form__check-error").style.display="none"}}});e.exports=t},function(e,r){var t=document.getElementById("popup"),o=document.querySelectorAll(".popup__selector");$(o).click(function(e){$(t).fadeOut(500)})}]);