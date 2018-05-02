$( document ).ready(function() {
    new Chart(document.getElementById("line-chart-order-m"), {
        type: 'line',
        data: {
          labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
          datasets: [{ 
              data: [150,190,290,200,300,200,295,270,260,480,220,210],
              borderColor: "#31baf8",
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: false,
            text: ''
          },
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
          },
          elements: {
            point:{
                radius: 0
            }
          },
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize : 200
                },
                gridLines: {
                    display:true,
                    drawBorder: true
                }
            }],
            xAxes: [{
                // Change here
                //barPercentage: 1,
                //categoryPercentage: 0.3,
                gridLines: {
                    display:false,
                    drawBorder: true
                }
            }]
         }
        }
    });
});

$( document ).ready(function() {
    new Chart(document.getElementById("line-chart-order-y"), {
        type: 'line',
        data: {
          labels: ["2013", "2014", "2015", "2016", "2017", "2018"],
          datasets: [{ 
              data: [150,190,290,200,300,200,295,270,260,480,220,210],
              borderColor: "#31baf8",
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: false,
            text: ''
          },
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
          },
          elements: {
            point:{
                radius: 0
            }
          },
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize : 200
                },
                gridLines: {
                    display:true,
                    drawBorder: false
                }
            }],
            xAxes: [{
                // Change here
                //barPercentage: 1,
                //categoryPercentage: 0.3,
                gridLines: {
                    display:false,
                    drawBorder: true
                }
            }]
         }
        }
    });
});







