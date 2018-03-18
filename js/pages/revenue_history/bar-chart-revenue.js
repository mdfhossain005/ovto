$( document ).ready(function() {
    var bar_ctx = document.getElementById('bar-chart-revenue-m').getContext('2d');

    var violet_pink_gradient = bar_ctx.createLinearGradient(0, 0, 0, 300);

    violet_pink_gradient.addColorStop(0, '#eaa1ae');
    violet_pink_gradient.addColorStop(1, '#342070');



    var myChart = new Chart(bar_ctx, {
        type: 'bar',
        data: {
            labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
            datasets: [
                {
                    label: "",
                    backgroundColor: violet_pink_gradient,
                    hoverBackgroundColor: violet_pink_gradient,
                    borderWidth: 0,
                    data: [550, 790, 790, 450, 610, 520, 920, 610, 500, 850, 610, 920]
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
                        display:true,
                        drawBorder: true
                    }
                }],
                xAxes: [{
                    // Change here
                    barPercentage: 1,
                    categoryPercentage: 0.3,
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
    var bar_ctx = document.getElementById('bar-chart-revenue-y').getContext('2d');

    var violet_pink_gradient = bar_ctx.createLinearGradient(0, 0, 0, 300);

    violet_pink_gradient.addColorStop(0, '#eaa1ae');
    violet_pink_gradient.addColorStop(1, '#342070');



    var myChart = new Chart(bar_ctx, {
        type: 'bar',
        data: {
            labels: ["2013", "2014", "2015", "2016", "2017", "2018"],
            datasets: [
                {
                    label: "",
                    backgroundColor: violet_pink_gradient,
                    hoverBackgroundColor: violet_pink_gradient,
                    borderWidth: 0,
                    data: [540, 790, 900, 380, 700, 1000]
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
                        display:true,
                        drawBorder: true
                    }
                }],
                xAxes: [{
                    // Change here
                    barPercentage: 1,
                    categoryPercentage: 0.4,
                    gridLines: {
                        display:false,
                        drawBorder: true
                    }
                }]
            }
        }
    });
});



