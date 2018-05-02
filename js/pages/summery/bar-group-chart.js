$(function(){

    var bar_ctx = document.getElementById('bar-chart-grouped-m').getContext('2d');

    var purple_blue_gradient = bar_ctx.createLinearGradient(0, 0, 0, 300);

    purple_blue_gradient.addColorStop(0, '#2fb9f8');
    purple_blue_gradient.addColorStop(1, '#7956ec');

    var orange_yellow_gradient = bar_ctx.createLinearGradient(0, 0, 0, 300);

    orange_yellow_gradient.addColorStop(0, '#ffe641');
    orange_yellow_gradient.addColorStop(1, '#ff8e64');

    var blue_green_gradient = bar_ctx.createLinearGradient(255, 255, 255, 300);

    blue_green_gradient.addColorStop(0, '#3cecb0');
    blue_green_gradient.addColorStop(1, '#009fc5');



    var bar_chart = new Chart(bar_ctx, {
        type: 'bar',
        data: {
            labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
            datasets: [
                {
                    label: "",
                    backgroundColor: purple_blue_gradient,
                    hoverBackgroundColor: purple_blue_gradient,
                    borderWidth: 0,
                    data: [350, 250, 250, 280, 400, 250, 400, 300, 350, 250, 250, 310]
                }, {
                    label: "",
                    backgroundColor: orange_yellow_gradient,
                    hoverBackgroundColor: orange_yellow_gradient,
                    borderWidth: 0,
                    data: [450, 420, 310, 450, 300, 300, 270, 450, 320, 360, 320, 360]
                }, {
                    label: "",
                    backgroundColor: blue_green_gradient,
                    hoverBackgroundColor: blue_green_gradient,
                    borderWidth: 0,
                    data: [420, 310, 210, 440, 250, 370, 340, 320, 420, 300, 200, 420]
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
                        stepSize : 200
                    },
                    gridLines: {
                        display:false,
                        drawBorder: false
                    }
                }],
                xAxes: [{
                    // Change here
                    barPercentage: 1,
                    categoryPercentage: 0.4,
                    gridLines: {
                        display:false,
                        drawBorder: false
                    }
                }]
            }
        }
    });

});

$(function(){

    var bar_ctx = document.getElementById('bar-chart-grouped-y').getContext('2d');

    var purple_blue_gradient = bar_ctx.createLinearGradient(0, 0, 0, 300);

    purple_blue_gradient.addColorStop(0, '#2fb9f8');
    purple_blue_gradient.addColorStop(1, '#7956ec');

    var orange_yellow_gradient = bar_ctx.createLinearGradient(0, 0, 0, 300);

    orange_yellow_gradient.addColorStop(0, '#ffe641');
    orange_yellow_gradient.addColorStop(1, '#ff8e64');

    var blue_green_gradient = bar_ctx.createLinearGradient(255, 255, 255, 300);

    blue_green_gradient.addColorStop(0, '#3cecb0');
    blue_green_gradient.addColorStop(1, '#009fc5');



    var bar_chart = new Chart(bar_ctx, {
        type: 'bar',
        data: {
            labels: ["2013", "2014", "2015", "2016", "2017", "2018"],
            datasets: [
                {
                    label: "",
                    backgroundColor: purple_blue_gradient,
                    hoverBackgroundColor: purple_blue_gradient,
                    borderWidth: 0,
                    data: [350, 250, 250, 280, 400, 250, 400, 300, 350, 250, 250, 310]
                }, {
                    label: "",
                    backgroundColor: orange_yellow_gradient,
                    hoverBackgroundColor: orange_yellow_gradient,
                    borderWidth: 0,
                    data: [450, 420, 310, 450, 300, 300, 270, 450, 320, 360, 320, 360]
                }, {
                    label: "",
                    backgroundColor: blue_green_gradient,
                    hoverBackgroundColor: blue_green_gradient,
                    borderWidth: 0,
                    data: [420, 310, 210, 440, 250, 370, 340, 320, 420, 300, 200, 420]
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
                        stepSize : 200
                    },
                    gridLines: {
                        display:false,
                        drawBorder: false
                    }
                }],
                xAxes: [{
                    // Change here
                    barPercentage: 1,
                    categoryPercentage: 0.4,
                    gridLines: {
                        display:false,
                        drawBorder: false
                    }
                }]
            }
        }
    });

});