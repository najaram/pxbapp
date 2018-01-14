<template>
  <v-layout row wrap>
    <v-flex
      xs4
      v-for="result in this.results"
      :key="result.id"
    >
      <v-card flat tile>
        <v-card-media
          :src="result.webformatURL"
          height="150px"
        >
        </v-card-media>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
	export default {
		props: [
			'results'
		]
	}
</script>

<style type="text/css">
  .card__media {
    margin: 5px;
  }
</style>