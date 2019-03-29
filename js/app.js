const iconDashboard = document.getElementById("iconDashboard");
const iconMembers = document.getElementById("iconMembers");
const iconVisits = document.getElementById("iconVisits");
const iconSettings = document.getElementById("iconSettings");
const closeButton = document.querySelector(".close-button");
const alertBox = document.querySelector(".alert-box");
const hidden = document.querySelector(".hidden");
const context = document.querySelector('#trafficData').getContext('2d');
const myDailyTrafficChart = document.getElementById("dailyTrafficData").getContext("2d");
const myMobileChart = document.getElementById("mobileUserData").getContext("2d");
const hourlyButton = document.querySelector(".hourly");
const dailyButton = document.querySelector(".daily");
const weeklyButton = document.querySelector(".weekly");
const monthlyButton = document.querySelector(".monthly");


// NAVIGATION
// Keep button appearing active after button has been clicked
iconDashboard.addEventListener('click', function() {
  iconDashboard.className = "dashboard-active";
  iconMembers.className = "dashboard-inactive";
  iconVisits.className = "dashboard-inactive";
  iconSettings.className = "dashboard-inactive";
});

iconMembers.addEventListener('click', function() {
  iconDashboard.className = "dashboard-inactive";
  iconMembers.className = "dashboard-active";
  iconVisits.className = "dashboard-inactive";
  iconSettings.className = "dashboard-inactive";
});

iconVisits.addEventListener('click', function() {
  iconDashboard.className = "dashboard-inactive";
  iconMembers.className = "dashboard-inactive";
  iconVisits.className = "dashboard-active";
  iconSettings.className = "dashboard-inactive";
});

iconSettings.addEventListener('click', function() {
  iconDashboard.className = "dashboard-inactive";
  iconMembers.className = "dashboard-inactive";
  iconVisits.className = "dashboard-inactive";
  iconSettings.className = "dashboard-active";
});

// ALERT BOX
closeButton.addEventListener('click', function() {
  // adds/toggles class of hidden to alert-box which removes it from the DOM
  alertBox.classList.toggle('hidden');
});

// TRAFFIC CHART BUTTONS
// Keep button appearing active after button has been clicked

hourlyButton.addEventListener('click', function() {
  hourlyButton.className = "traffic-button-active";
  dailyButton.className = "traffic-button-inactive";
  weeklyButton.className = "traffic-button-inactive";
  monthlyButton.className = "traffic-button-inactive";
});

dailyButton.addEventListener('click', function() {
  hourlyButton.className = "traffic-button-inactive";
  dailyButton.className = "traffic-button-active";
  weeklyButton.className = "traffic-button-inactive";
  monthlyButton.className = "traffic-button-inactive";
});

weeklyButton.addEventListener('click', function() {
  hourlyButton.className = "traffic-button-inactive";
  dailyButton.className = "traffic-button-inactive";
  weeklyButton.className = "traffic-button-active";
  monthlyButton.className = "traffic-button-inactive";
});

monthlyButton.addEventListener('click', function() {
  hourlyButton.className = "traffic-button-inactive";
  dailyButton.className = "traffic-button-inactive";
  weeklyButton.className = "traffic-button-inactive";
  monthlyButton.className = "traffic-button-active";
});


// GLOBAL OPTIONS FOR CHARTS
Chart.defaults.global.defaultFontFamily = 'Open Sans';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = '#707070';

// TRAFFIC CHARTS
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
      },
       scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
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
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
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
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
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
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    },
});

hourlyButton.addEventListener("click", function() {
    console.log("hourly pressed");
    var context = document.querySelector('#trafficData').getContext('2d');
    new Chart(context).Line(trafficChartHourly);
    console.log("where is my chart?!");
  });
dailyButton.addEventListener("click", function() {
    console.log("daily pressed");
    var context = document.querySelector('#trafficData').getContext('2d');
    new Chart(context).trafficChartDaily;
  });
weeklyButton.addEventListener("click", function() {
    console.log("weekly pressed");
    var context = document.querySelector('#trafficData').getContext('2d');
    new Chart(context).trafficChartWeekly;
  });
monthlyButton.addEventListener("click", function() {
    console.log("monthly pressed");
    var context = document.querySelector('#trafficData').getContext('2d');
    new Chart(context).trafficChartMonthly;
  });


// DAILY TRAFFIC CHART
const dailyTrafficChart = new Chart(myDailyTrafficChart, {
    type: 'bar',
    data: {
      labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      datasets: [{
        data: [50, 100, 175, 125, 225, 200, 100],
        backgroundColor: "#7576BE",
        borderWidth: 0,
      }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
    },
});


// MOBILE USER CHART
const mobileUserChart = new Chart(myMobileChart, {
    type: 'doughnut',
    data: {
      labels: ['Desktop', 'Tablets', 'Phones'],
      datasets: [{
        data: [65, 20, 15],
        backgroundColor: ["#7576BE", "#84CD94", "#74B1BE"],
        borderWidth: 0
        }]
    },
    options: {
      legend: {
        position: 'right'
      }
    },
});









