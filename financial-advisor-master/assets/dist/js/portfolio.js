$(document).ready(function(){
    //portfolio graph
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
    
});