<template>
  <v-layout>
    <v-flex md4></v-flex>
    <v-flex md4>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
          label="Search"
          v-model="search.q"
          required
        ></v-text-field>

        <v-btn
          @click="submit"
          :disabled="!valid"
        >
          submit
        </v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-form>
      <SearchResults :results="this.results"/>
    </v-flex>
    <v-flex md4></v-flex>
  </v-layout>
</template>

<script>
  
  import SearchResults from './SearchResults'

  export default {
    data: () => ({
      valid: true,
      search: {
        q: '',
        image_type: '',
        category: ''
      },
      results: []
    }),
    methods: {
      submit () {

        if (this.$refs.form.validate()) {
          this.$apiService.search('/search?q=' + this.search.q + '&image_type=' + this.search.image_type + '&category=' + this.search.category).then((response) => {
            this.results = response.data.hits
          })
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    },
    components: {
      SearchResults
    }
  }
</script>

<style type="text/css">
  form {
    margin-bottom: 15px;
  }
</style>


