<template>
  <div class="candidates">
    <div class="container">
    <h1 class="page-header">Liste candidates</h1>

    <table class="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="candidate in candidates">
        <td>{{candidate.firstname}}</td>
        <td>{{candidate.lastname}}</td>
        <td>{{candidate.city}}</td>
      </tr>
      </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'candidates',
  data () {
    return {
      candidates: []
    }
  },
  methods: {
    fetchCandidates: function() {
      this.$http.get('http://localhost:8081/persons')
        .then(function(response){
          this.candidates = response.body._embedded.persons;
        })
    }
  },
  created: function() {
    this.fetchCandidates()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
