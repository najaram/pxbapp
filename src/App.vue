<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-toolbar>
          <v-toolbar-title>Larawang Kupas</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
            <v-toolbar-items class="hidden-sm-and-down">
              <v-btn flat></v-btn>
              <v-btn flat></v-btn>
              <v-btn flat></v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-container fluid>
            <h1>Larawang kupas na libre</h1>
            <router-view></router-view>
          </v-container>
        </v-content>
      <v-footer app></v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app h1 {
  margin-top: 50px;
}
</style>
