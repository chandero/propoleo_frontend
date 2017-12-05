<template lang="pug">
div
  v-dialog(:value='true', persistent='')
    v-card(hover='', style='background:white')
      v-flex.deep-purple.darken-1
        v-card-title.white--text
          .text-xs-center  {{$t("Login")}}
      v-flex
        v-card-text.pt-4
          v-form(v-model='model', action='login', :fields='fields', @success='onSuccess', submitButtonText="Login")
            .flex.pb-2
              small {{$t("* Indicates required field")}}

</template>

<style>
  body{
    background: #666 !important;
  }
</style>

<script>

export default {

  data () {
    return {
      model: {
        username: '',
        password: ''
      },

      fields: {
        username: { label: 'Username' },
        password: { label: 'Password', type: 'password' }
      },
      show: true
    }
  },
  methods: {
    onSuccess (data) {
      console.log('login data:' + JSON.stringify(data))
      this.$store.commit('setAuth', data)
      this.$router.replace('/home')
    }
  },

  mounted () {
  }
}
</script>
