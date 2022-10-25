<template>
  <div class="form">
    <form @submit="addData" method="post">
      <input type="text" v-model="input" placeholder="Enter glucose level" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'post',
  data() {
    return {
      glucoseLevel: [],
    };
  },
  methods: {
    submit() {
      axios
        .post('https://api.airtable.com/v0/app7prXyz92FkQR63/Furniture', {
          glucoseLevel: this.glucoseLevel,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
