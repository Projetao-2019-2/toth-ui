<template>
  <div>
    <p class="text-msg-password"> 
      Verifique se as 
      <span :style="{ color: equalPasswordColor }" > senhas são iguais </span> e
      <span :style="{ color: lengthPasswordColor }"> contêm entre 6 e 15 caracteres. </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "MessagePassword",
  props: ['firstPassword','secondPassword'],
  data () {
    return {
      equalPasswordColor: 'black',
      lengthPasswordColor: 'black'
    }
  },
  methods: {
    checkEqualPasswords (first_pass, second_pass) {
      if (first_pass === second_pass) {
        this.equalPasswordColor = 'green';
        return true;
      } else {
        this.equalPasswordColor = 'red';
        return false;
      }
    },

    checkLengthPassowrd (password) {
      if (password.length >= 6 && password.length <= 15) {
        this.lengthPasswordColor = 'green';
        return true;
      } else {
        this.lengthPasswordColor = 'red';
        return false;
      }
    },

    checkPasswords (first_pass, second_pass) {
      let areEquals = this.checkEqualPasswords(first_pass, second_pass);
      let validLength = this.checkLengthPassowrd(first_pass);

      if (areEquals && validLength) {
        this.$emit('validPasswords');
      } else {
        this.$emit('invalidPasswords');
      }
    }
  },
  watch: {
    firstPassword: function () {
      this.checkPasswords(this.firstPassword, this.secondPassword);
    },
    secondPassword: function () {
      this.checkPasswords(this.firstPassword, this.secondPassword);
    }
  }
}
</script>

<style>
  .text-msg-password {
    font-size: 15px;
    animation: moveMsgPassword 1s;
  }

  @keyframes moveMsgPassword {
    from {
      opacity: 0;
      transform: translateX(-100%);
    } to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
</style>