$(document).ready(function(){

    // user-account graph
    new Chartist.Line('#chart2', {
        labels: labelList,
        series: [{
          name: 'series-1',
          data: dataFirstLine
        }, {
          name: 'series-2',
          data: dataSecondLine
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
                axisTitle: axisTitleX,
                axisClass: "ct-axis-title",
                offset: {
                    x: 0,
                    y: 50
                },
                textAnchor: "middle"
            },
            axisY: {
                axisTitle: axisTitleY,
                axisClass: "ct-axis-title",
                offset: {
                    x: 0,
                    y: -3
                },
                flipTitle: false
            }
        })
    ] }, 
    [
        ['screen and (min-width: 768px)', {
            height: 270,
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


    new Chartist.Line('#chart3', {
        series: [
          {
            name: 'series-1',
            meta: {
                imageUrl: img1
            },
            data: [
              {x: dataArr[0], y: 1},
            ]
          },
          {
            name: 'series-2',
            meta: {
                imageUrl: img2
            },
            data: [
              {x: dataArr[1], y: 1},
            ]
          },
          {
            name: 'series-3',
            meta: {
                imageUrl: img3
            },
            data: [
              {x: dataArr[2], y: 1},
            ]
          },
          {
            name: 'series-4',
            meta: {
                imageUrl: img4
            },
            data: [
              {x: dataArr[3], y: 1},
            ]
          },
          {
            name: 'series-5',
            meta: {
                imageUrl: img5
            },
            data: [
              {x: dataArr[4], y: 1},
            ]
          }
        ]
      }, {
        axisX: {
          type: Chartist.FixedScaleAxis,
          divisor: divisor,
          low: startYear,
          high: lasYear,
          onlyInteger: true,
        },
        axisY: {
            low: 0,
            high: 2,
            showLabel: false,
        }
      }).on('draw', function(context) {
            if (context.type === 'point') {
              context.element.replace(new Chartist.Svg('image', {
                height: 32,
                width: 32,
                x: context.x - (32 / 2),
                y: context.y - (32 / 2),
                'xlink:href': context.series.meta.imageUrl
              }));
            }
        });

    //показть форму для добавления поля
    $('.addMore').on('click', function(){
        $(this).parent().parent().find('.addForm').show();
        
        $(this).hide()
    });

      
});