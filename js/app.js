const closeButton = document.querySelector(".close-button");
const alertBox = document.querySelector(".alert-box");
const hidden = document.querySelector(".hidden");
const hourlyButton = document.querySelector(".hourly");
const dailyButton = document.querySelector(".daily");
const weeklyButton = document.querySelector(".weekly");
const monthlyButton = document.querySelector(".monthly");
const context = document.querySelector('#trafficData').getContext('2d');


// ALERT BOX
closeButton.addEventListener('click', function() {
  // adds/toggles class of hidden to alert-box which removes it from the DOM
  alertBox.classList.toggle('hidden');
});



// TRAFFIC CHARTS

// Global Options for charts
Chart.defaults.global.defaultFontFamily = 'Open Sans';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = '#707070';

const trafficChartHourly = new Chart(context, {
    type: 'line',
    data: {
      labels: ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'],
      datasets: [{
        data: [575, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250, 2250, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 1250],
        borderColor: '#7576BE',
        backgroundColor: "rgba(117,118,190,.3)",
        borderWidth: 0,
      }]
    },
    options: {
      legend: {
        display: false
      }
      scales: {
        xAxes: {
          ticks: {
            beginAtZero: true
            }
          }
        }
    }
    },
});

const trafficChartDaily = new Chart(context, {
    type: 'line',
    data: {
      labels: ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'],
      datasets: [{
        data: [675, 1450, 1500, 2000, 2500, 2500, 2750, 2250, 2500, 2750, 2750, 2750],
        borderColor: '#4D4A77',
        backgroundColor: "rgba(77, 74, 119,.3)",
        borderWidth: 0,
      }]
    },
    options: {
      legend: {
        display: false
      }
    },
});

const trafficChartWeekly = new Chart(context, {
    type: 'line',
    data: {
      labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
      datasets: [{
        data: [800, 1550, 2000, 2500, 3000, 2750, 3250, 3750, 3000, 3500, 3250, 3000],
        borderColor: '#84CD94',
        backgroundColor: "rgba( 132, 205, 148,.3)",
        borderWidth: 0,
      }]
    },
    options: {
      legend: {
        display: false
      }
    },
});

const trafficChartMonthly = new Chart(context, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        data: [2000, 3550, 5200, 5500, 6200, 5750, 6250, 6750, 6000, 6500, 6250, 6250, 6750],
        borderColor: '#74B1BE',
        backgroundColor: "rgba( 116, 177, 190,.3)",
        borderWidth: 0,
      }]
    },
    options: {
      legend: {
        display: false
      }
    },
});

hourlyButton.addEventListener("click", function() {
    var context1 = document.querySelector('#trafficData').getContext('2d');
    new Chart(context1).Line(trafficChartHourly);
  });
dailyButton.addEventListener("click", function() {
    var context2 = document.querySelector('#trafficData').getContext('2d');
    new Chart(context2).Line(trafficChartDaily);
  });
weeklyButton.addEventListener("click", function() {
    var context3 = document.querySelector('#trafficData').getContext('2d');
    new Chart(context3).Line(trafficChartWeekly);
  });
monthlyButton.addEventListener("click", function() {
    var context4 = document.querySelector('#trafficData').getContext('2d');
    new Chart(context4).Line(trafficChartMonthly);
  });
















