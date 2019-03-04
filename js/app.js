const ctx = document.getElementById("myChart");

const myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: options
});

data = {
  datasets: [{
    data: [70, 20, 10],
    backgroundColor: [#7576BE, #84CD94, #74B1BE]
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'Desktop',
    'Tablets',
    'Phones'
  ]
};