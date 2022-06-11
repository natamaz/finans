$(document).ready(function(){
    new Chartist.Line('#chart5', {
        labels: labelsGraph1,
        series: [{
            name: 'series-1',
            data: firstDataGraph1
        }, {
            name: 'series-2',
            data: secondDataGraph1
        }],
      }, {
        fullWidth: true,
        height: 300,
        onlyInteger: true,
        showGrid: false,
        chartPadding: {
            top: 20,
            right: 0,
            bottom: 20,
            left: 10
        },
        series: {
            'series-1': {
                showArea: true,
                showPoint: false
            },
            'series-2': {
                showArea: true,
                showPoint: false
            },
        },
        plugins: [
            Chartist.plugins.ctAxisTitle({
                axisX: {
                    axisTitle: axisXGraph1,
                    axisClass: "ct-axis-title",
                    offset: {
                        x: 0,
                        y: 49
                    },
                    textAnchor: "middle"
                },
                axisY: {
                    axisTitle: axisYGraph1,
                    axisClass: "ct-axis-title",
                    offset: {
                        x: 0,
                        y: -3
                    },
                    flipTitle: false
                }
            })
        ],
      },[
        ['screen and (min-width: 768px)', {
            chartPadding: {
                left: 30,
            },
        }]
    ]);

    new Chartist.Bar('#chart6', {
        series: dataGraph2
    }, {
        stackBars: true,
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
        fullWidth: true,
        chartPadding: {
            bottom: 50,
        },
        axisY: {
          offset: 0
        },
        high: maxValue,
        plugins: [
            Chartist.plugins.ctAxisTitle({
                axisX: {
                    axisTitle: axisXGraph2,
                    axisClass: "ct-axis-title",
                    offset: {
                        x: 0,
                        y: 50
                    },
                    textAnchor: "middle"
                }
            })
        ],
    });

    new Chartist.Bar('#chart7', {
        series: dataGraph3
    }, {
        stackBars: true,
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
        fullWidth: true,
        chartPadding: {
            bottom: 50,
        },
        high: maxValue,
        axisY: {
          offset: 0
        },
        plugins: [
            Chartist.plugins.ctAxisTitle({
                axisX: {
                    axisTitle: axisXGraph3,
                    axisClass: "ct-axis-title",
                    offset: {
                        x: 0,
                        y: 50
                    },
                    textAnchor: "middle"
                }
            })
        ],
    });

    // chart8 и chart9 связаны между собой
    new Chartist.Bar('#chart8', {
        labels: labelsGraph4,
    
        series: dataGraph4
    }, {
        stackBars: true,
        seriesBarDistance: 0,
        reverseData: true,
        fullWidth: true,
        high: maxIncome, 
        height: gridHeightGraph4,
        horizontalBars: true,
        axisX: {
            showLabel: false
        },
        axisY: {
          offset: 80,
        }
    },[
        ['screen and (min-width: 768px)', {
            axisY: {
              offset: 150,
            }
        }],
        ['screen and (min-width: 1240px)', {
            axisY: {
              offset: 250,
            }
        }]
    ]);

    new Chartist.Bar('#chart9', {
        labels: labelsGraph5,
    
        // значения задаются с учётом того, что отсчет идёт от максимального значения, которое берётся с chart8:
        //      series: [
        //          [300, 200, 145, 30, 100, 25, 65, 100, 20], - тут указывается кол-во поинтов, которые будут закрашены, начиная с начальной точки
        //          [1000, 800, 655, 625, 525, 500, 435, 335, 315] - тут указывается начальная точка (отсчет с конца)
        //      ]
        //      то есть 1й столбик будет с 1000 до 1300, 2й с 800 до 1000(800+200), 3й с 655 до 800 (645+155) и тд.
        series: dataGraph5,
    }, {
        stackBars: true,
        seriesBarDistance: 0,
        high: maxIncome, 
        reverseData: true,
        horizontalBars: true,
        fullWidth: true,
        height: gridHeightGraph5, 
        axisY: {
          offset: 80,
        }
    },[
        ['screen and (min-width: 768px)', {
            axisY: {
              offset: 150,
            }
        }],
        ['screen and (min-width: 1240px)', {
            axisY: {
              offset: 250,
            }
        }]
    ]);


    //показть форму для добавления поля
    $('.addMore').on('click', function(){
        $(this).parent().prev('.addForm').show();
        
        $(this).hide()
    });
});