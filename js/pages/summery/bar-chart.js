$( document ).ready(function() {
    var bar_ctx = document.getElementById('bar-chart-m').getContext('2d');

    var violet_pink_gradient = bar_ctx.createLinearGradient(0, 0, 0, 300);

    violet_pink_gradient.addColorStop(0, '#eaa1ae');
    violet_pink_gradient.addColorStop(1, '#342070');



    var myChart = new Chart(bar_ctx, {
        type: 'bar',
        data: {
            labels: ["JAN", "FEB", "MAR", "APR"],
            datasets: [
                {
                    label: "",
                    backgroundColor: violet_pink_gradient,
                    hoverBackgroundColor: violet_pink_gradient,
                    borderWidth: 0,
                    data: [450, 250, 250, 280]
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
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize : 100
                    },
                    gridLines: {
                        display:false,
                        drawBorder: false
                    }
                }],
                xAxes: [{
                    // Change here
                    barPercentage: 1,
                    categoryPercentage: 0.2,
                    gridLines: {
                        display:false,
                        drawBorder: false
                    }
                }]
            }
        }
    });
});


$( document ).ready(function() {
    var bar_ctx = document.getElementById('bar-chart-y').getContext('2d');

    var violet_pink_gradient = bar_ctx.createLinearGradient(0, 0, 0, 300);

    violet_pink_gradient.addColorStop(0, '#eaa1ae');
    violet_pink_gradient.addColorStop(1, '#342070');



    var myChart = new Chart(bar_ctx, {
        type: 'bar',
        data: {
            labels: ["2014", "2015", "2016", "2017"],
            datasets: [
                {
                    label: "",
                    backgroundColor: violet_pink_gradient,
                    hoverBackgroundColor: violet_pink_gradient,
                    borderWidth: 0,
                    data: [200, 250, 350, 200]
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
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize : 100
                    },
                    gridLines: {
                        display:false,
                        drawBorder: false
                    }
                }],
                xAxes: [{
                    // Change here
                    barPercentage: 1,
                    categoryPercentage: 0.2,
                    gridLines: {
                        display:false,
                        drawBorder: false
                    }
                }]
            }
        }
    });
});



