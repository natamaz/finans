$(document).ready(function(){
    
    var chart = new Chartist.Line('#chart1', {
        labels: labelsLine,
        series: [{
        name: 'series-1',
            data: dataLine1,
        }, {
        name: 'series-2',
            data: dataLine2
        }, {
        name: 'series-3',
            data: dataLine3
        }, {
        name: 'series-4',
            data: dataLine4
        }],
    }, {
    fullWidth: true,
    height: 200,
    chartPadding: {
        top: 20,
        right: 0,
        bottom: 20,
        left: 0
    },
    series: {
        'series-1': {
            showPoint: false
        },
        'series-2': {
            showPoint: false
        },
        'series-3': {
            showArea: true,
            showPoint: false
        },
        'series-4': {
            showArea: true,
            showPoint: false
        },
    },
    plugins: [
        Chartist.plugins.legend({
            legendNames: legendNames,
            position: 'bottom',
            clickable: false
        }),
        Chartist.plugins.ctAxisTitle({
            axisX: {
                axisTitle: axisX,
                axisClass: "ct-axis-title",
                offset: {
                    x: 0,
                    y: 50
                },
                textAnchor: "middle"
            },
            axisY: {
                axisTitle: axisY,
                axisClass: "ct-axis-title",
                offset: {
                    x: 0,
                    y: -3
                },
                flipTitle: false
            }
        }),
        Chartist.plugins.ctGoalLine({
          value: linePoint,
          axis: 'x'
        })
    ] }, 
    [
        ['screen and (min-width: 768px)', {
            height: 450,
            chartPadding: {
                left: 30,
            },
            plugins: [
                Chartist.plugins.ctAxisTitle({
                    axisX: {
                        offset: {
                            y: 49
                        },
                    }
                })
            ]
        }]
    ]);
    //вставляем картинку
    chart.on('created', function(context) {
        var targetLineX = context.chartRect.x1 + (context.chartRect.width() / context.bounds.max * 40);
        context.svg.elem('image', {
            height: 51,
            width: 51,
            x: targetLineX - 25, // отнимаем 25, чтобы выровнять картинку относительно линии
            x2: targetLineX,
            y1: context.chartRect.y1,
            y2: context.chartRect.y2,
            'xlink:href': iconUrl
        });
    });
      

    new Chartist.Line('#chart5', {
        labels: labelsGraph2,
        series: [{
            name: 'series-1',
            data: dataLine1Graph2
        }, {
            name: 'series-2',
            data: dataLine2Graph2
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
                    axisTitle: axisXGraph2,
                    axisClass: "ct-axis-title",
                    offset: {
                        x: 0,
                        y: 49
                    },
                    textAnchor: "middle"
                },
                axisY: {
                    axisTitle: axisYGraph2,
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
        series: dataGraph3
    }, {
        stackBars: true,
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
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

    new Chartist.Bar('#chart7', {
        series: dataGraph4
    }, {
        stackBars: true,
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
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
                    axisTitle: axisXGraph4,
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

    new Chartist.Bar('#chart8', {
        labels: labelsGraph5,
        series: dataGraph5
    }, {
        seriesBarDistance: 10,
        height: 250,
        axisX: {
            offset: 90,
        },
        axisY: {
            offset: 35,
        },
        plugins: [
            Chartist.plugins.legend({
                legendNames: legendGraph5,
                position: 'bottom'
            }),
            Chartist.plugins.ctAxisTitle({
                axisX: {
                    axisTitle: axisXGraph5,
                    axisClass: "ct-axis-title",
                    offset: {
                        x: 0,
                        y: 40
                    },
                    textAnchor: "middle"
                },
                axisY: {
                    axisTitle: axisYGraph5,
                    axisClass: "ct-axis-title",
                    offset: {
                        x: 10,
                        y: -3
                    },
                    flipTitle: false
                }
            })
        ] 
    },[
        ['screen and (min-width: 768px)', {
            seriesBarDistance: 35,
            axisX: {
                offset: 50,
            }
        }]
    ]);
    
});