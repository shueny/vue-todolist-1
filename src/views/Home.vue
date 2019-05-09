<template>
  <div class="home">
    <Todo></Todo>
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
