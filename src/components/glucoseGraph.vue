<template>
  <div class="chart">
    <canvas id="myChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'glucoseGraph',
  props: {
    msg: String,
  },
  mounted() {
    const ctx = document.getElementById('myChart');

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'May', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Glucose Level',
            data: [12, 19, 3, 5, 2, 3, 69, 199],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
    });
    myChart;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
