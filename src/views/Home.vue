<template>
  <div class="home">
    <Todo></Todo>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from '@/views/Todo.vue'

export default {
  name: 'home',
  components: {
    Todo
  }
}
</script>
