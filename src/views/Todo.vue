<template>
  <div class="app-todo">
    <div class="container">
      <section class="header">
        <div class="text">
          <span class="day" v-text="day"> </span>
          <span class="yearMonth"><b class="year" v-text="year"></b><b class="month" v-text="month"> </b></span>
          <span v-text="timeMessage"></span><span class="week" v-text="currentWeek"> </span>
        </div>
      </section>
      <section class="addTask">
        <input placeholder="+ Add task" v-model="newTodo" @keyup.enter="addTodo"/>
          <a class="btn btn--add" @click="addTodo">+</a>
      </section>
      <section class="content">
        <div>
          <!-- allFilter -->
          <div class="todoList" v-if="allFilter">
            <TodoList
             v-for='item in allTodos'
             :key='item.id'
             :item='item'
             @cancel-item='cancelEdit'
             @remove-todo='removeTodo'
             @edit-todo='editTodo'
             @done-edit='doneEdit'
             @delete-todo='deleteTodos'
             @mark-todo='markTodos'
            ></TodoList>
          </div>
          <!-- doneFilter -->
          <div class="todoList" v-if="doneFilter">
            <TodoList
             v-for='item in doneTodos'
             :key='item.id'
             :item='item'
             @cancel-item='cancelEdit'
             @remove-todo='removeTodo'
             @edit-todo='editTodo'
             @done-edit='done-edit'
             @delete-todo='deleteTodos'
             @mark-todo='markTodos'
            ></TodoList>
          </div>
          <!-- todoFilter -->
          <div class="todoList" v-if="todoFilter">
            <TodoList
             v-for='item in undoneTodos'
             :key='item.id'
             :item='item'
             @cancel-item='cancelEdit'
             @remove-todo='removeTodo'
             @edit-todo='editTodo'
             @done-edit='done-edit'
             @delete-todo='deleteTodos'
             @mark-todo='markTodos'
            ></TodoList>
          </div>
        </div>
      </section>
      <div class="filters">
        <button class="btn filters__btn filters__btn--all p-2" :class="{'active': allFilter }"
        @click="sortAll">All</button>
        <button class="btn filters__btn filters__btn--complete p-2" :class="{'active': doneFilter }"
        @click="sortDone">Complete</button>
        <button class="btn filters__btn filters__btn--incomplete p-2" :class="{'active': todoFilter }"
        @click="sortTodo">Incomplete</button>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content container">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <input class="form-control" type="text" v-model="cacheTodoTitle"
              @keyup.esc="cancelEditComment()" @keyup.enter="doneEditComment(item)"/>
            </div>
            <div class="">
              <p class="title text-left">Comments:</p>
              <input class="form-control" type="text" placeholder="Add Comment..."
              @keyup.esc="cancelAddComment()" @keyup.enter="addComment()" v-model="commentText"/>
              <div class="comment-list m-2 py-2" v-for="(data, index) in cacheTodo.comments" :key="data.index" :class="{'border-bottom' : index !== (cacheTodo.comments.length-1)}">
                <div class="d-flex px-3">
                  <span>{{ data }}</span>
                  <button class="btn close ml-auto mx-1" type="button" aria-label="Close" @click="removeComment(index)">
                    <font-awesome-icon icon="trash-alt" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button type="button" class="btn btn-secondary btn--save" data-dismiss="modal">Close & Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scope>
@import '@/assets/scss/_todo.scss';
</style>

<script>
import TodoList from '@/components/TodoList.vue'

const moment = require('moment')

const STORAGE_KEY = 'todos-vuejs'// 名稱
const todoStorage = {
  fetch () {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach((item, index) => {
      item.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

export default {
  name: 'Todo',
  components: { TodoList },
  data () {
    return {
      newTodo: '',
      todos: [
        {
          title: '要買蘿蔔',
          completed: false,
          marked: false,
          messageDate: '05/02/2019 10:00 AM',
          comments: ['6:00pm', 'the new restaurant']
        },
        {
          title: '冷萃咖啡',
          completed: true,
          marked: true,
          comments: [],
          messageDate: '03/22/2019 08:23 AM'
        }
      ],
      cacheTodo: {},
      cacheTodoTitle: '',
      cacheTodoMark: '',
      cacheComment: {},
      cacheCommentTitle: '',
      commentText: '',
      allFilter: true,
      todoFilter: false,
      doneFilter: false,
      day: moment().format('DD'),
      year: moment().format('YYYY'),
      month: moment().format('MMM'),
      currentWeek: moment().format('ddd'),
      timeMessage: moment().format('LTS')
    }
  },
  methods: {
    getTodos () {
      if (localStorage.getItem('todos-vuejs')) {
        this.todos = JSON.parse(localStorage.getItem('todos-vuejs'))
      }
    },
    addTodo (e) {
      // validation check
      if (this.newTodo) {
        this.todos.unshift({
          id: this.todos.length,
          title: this.newTodo,
          completed: false,
          marked: false,
          comments: [],
          messageDate: moment().format('L') + ' ' + moment().format('LT')
        })
      }
      // reset newTodo
      this.newTodo = ''
      // save the new item in localstorage
      return true
    },
    updateCurrentTime () {
      this.timeMessage = moment().format('LTS')
    },
    sortAll () {
      this.allFilter = true
      this.todoFilter = false
      this.doneFilter = false
    },
    sortTodo () {
      this.allFilter = false
      this.todoFilter = true
      this.doneFilter = false
    },
    sortDone () {
      this.allFilter = false
      this.todoFilter = false
      this.doneFilter = true
    },
    cancelEdit () {
      this.cacheTodo = {}
    },
    removeTodo (item) {
      const delIndex = this.todos.indexOf(item)
      this.todos.splice(delIndex, 1)
    },
    editTodo (item) {
      // console.log(item.title)
      this.cacheTodo = item
      this.cacheTodoTitle = item.title
    },
    doneEdit (item) {
      item.title = this.cacheTodoTitle
      this.cacheTodoTitle = ''
      this.cacheTodo = {}
    },
    deleteTodos () {
      this.todos = []
    },
    completeTodos (item) {
      this.todos = []
    },
    markTodos (item) {
      this.cacheTodoMark = item.marked
      return (!this.cacheTodoMark) ? item.marked = true : item.marked = false
    },
    addComment () {
      if (this.cacheTodo.comments === undefined) {
        this.cacheTodo.comments.push(this.commentText)
      }
      if (this.commentText) {
        this.cacheTodo.comments.unshift(this.commentText)
      }
      this.commentText = ''
    },
    removeComment (index) {
      this.cacheTodo.comments.splice(index, 1)
    }
  },
  computed: {
    allTodos () {
      return this.todos
    },
    doneTodos () {
      return this.todos.filter(todo => todo.completed)
    },
    undoneTodos () {
      return this.todos.filter(todo => !todo.completed)
    },
    remaining () {
      return this.todos.filter(item => !item.completed)
    }
  },
  mounted () {
    this.getTodos()
  },
  watch: {
    todos: {
      handler (updatedList) {
        localStorage.setItem('todos-vuejs', JSON.stringify(updatedList))
      },
      deep: true
    }
  },
  created () {
    this.timeMessage = moment().format('LTS')
    setInterval(() => this.updateCurrentTime(), 1 * 1000)
  }
}
</script>
