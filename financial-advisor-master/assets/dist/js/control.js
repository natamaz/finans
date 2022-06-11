$(document).ready(function(){

    new Chartist.Bar('#chart8', {
        labels: labels,
        series: dataLine
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
                legendNames: legendNames,
                position: 'bottom'
            }),
            Chartist.plugins.ctAxisTitle({
                axisX: {
                    axisTitle: axisX,
                    axisClass: "ct-axis-title",
                    offset: {
                        x: 0,
                        y: 40
                    },
                    textAnchor: "middle"
                },
                axisY: {
                    axisTitle: axisY,
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