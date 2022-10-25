<template>
  <div class="chart">
    <canvas id="myChart" width="400" height="400"></canvas>
  </div>

  <div class="input">
    <input id="pushvalue" type="number" value="10" class="form-control mb-3" />

    <input id="pushlabel" type="text" value="10" class="form-control mb-3" />

    <button id="push" class="btn btn-dark btn-sm w-100" @click="addData">Push Value</button>
  </div>

</template>

<style>
.chart {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

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
            showLine: true,
            spanGaps: true
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  },
  data() {
    return {
      input: '',
    };
  },
  methods: {
     addData() {
      const value = document.getElementById('pushvalue').value;
      const label = document.getElementById('pushlabel').value;
       myChart.data.labels.push(label);
       myChart.data.datasets[0].data.push(value);
       myChart.update();
     }
  },
};



// const push = document.getElementById("push");


//   //get the value and label from the input fields
//   const value = document.getElementById('pushvalue').value;
//   const label = document.getElementById('pushlabel').value;
//   //push the value and label to the chart

//   myChart.data.labels.push(label);
//   myChart.data.datasets[0].data.push(value);
//   //update the chart
//   myChart.update();
// });



// push.addEventListener('click', pushValueChart);

// function pushValueChart(){
// const pushValue = document.getElementById('pushvalue');
// const pushLabel = document.getElementById('pushlabel');
// myChart.data.datasets[0].data.push(pushValue.value);
// myChart.data.labels.push(pushlabel.value);
// myChart.update();


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
