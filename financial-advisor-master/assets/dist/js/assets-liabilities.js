$(document).ready(function(){
    new Chartist.Bar('#chart3', {
        series: dataLine
    }, {
        reverseData: true,
        horizontalBars: true,
        height: 300,
        chartPadding: {
            top: 0,
            right: 0,
            bottom: 20,
            left: 0
        },
        axisY: {
            offset: 0
        },
    },
    [
        ['screen and (min-width: 768px)', {
            high: maxValue,
            low: lowValue,
        }]
    ]);

    new Chartist.Bar('#chart4', {
        series: dataLineGraph2
    }, {
        reverseData: true,
        horizontalBars: true,
        height: 50,
        axisX: {
            showGrid: false,
            offset: 0,
            showLabel: false,
        },
        axisY: {
            showGrid: false,
            offset: 0,
            showLabel: false,
        },
    },
    [
        ['screen and (min-width: 768px)', {
            high: maxValue,
            low: lowValue,
        }]
    ]);


    //показть форму для добавления поля
    $('.addMore').on('click', function(){
        $(this).parent().prev('.addForm').show();
        
        $(this).hide()
    });

});