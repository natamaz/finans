$(document).ready(function(){

    
    //input only two number
    $('#ageValue[type=number]').keydown(function(e){
        var targetValue = $(this).val();
       if (e.which ===8 || e.which === 13 || e.which === 37 || e.which === 39 || e.which === 46) { return; }

       if (e.which > 47 &&  e.which < 58  && targetValue.length < 2) {
          var c = String.fromCharCode(e.which);
          var val = parseInt(c);
          var textVal = parseInt(targetValue || "0");
          var result = textVal + val;

          if (result < 0 || result > 99) {
             e.preventDefault();
          }

          if (targetValue === "0") {
            $(this).val(val);
            e.preventDefault();
          }
       }
       else {
           e.preventDefault();
       }
    });
    //input only number
    $('input[type=number]').on("click", function () {
        $(this).keydown(function(e){
            if((e.which >=48 && e.which <=57)  // number
            || (e.which >=96 && e.which <=105)  // num lock
            || e.which==8 // backspace
            || (e.which >=37 && e.which <=40) // arrows
            || e.which==46) // delete 
        {
            return true;
        } else {
            return false;            
        }		 
        });
    });
    //End 

    //квиз

    //counter
    function counter(){ //считаем какой вопрос отображается для отображения "1/11"
        var sum = 0;
        $( "#progress-bar li.active" ).each(function() {
            sum = sum +1;
        });
        if(sum < 12){
            $('.countNum').text(sum);
        }else{
            $('.countNum').text('11');
        }
    }

    var progressBar = { //меняем стиль кружков с шагами
        Bar : $('#progress-bar'),
        Next: function(){ //при шаге вперёд
            var element = $('#progress-bar li.active');
            element.next().addClass('active');
            element.addClass('done');
        },
        Back: function(){//при шаге назад
            var element2 = $('#progress-bar li.active');
            $('#progress-bar li').removeClass('active');
            $('#progress-bar li').removeClass('done');
            element2.prev().addClass('active');
            element2.prev().prev().addClass('done');
        }
    } 
    function checkQuestionNext(item){ //ф-я для переключения вопросов при шагк вперёд
        var currentItem = $(item).parent().parent().find('.active'); 

        if(currentItem.find('input').val()!=""){
            if(currentItem.hasClass('first-question')){ //если это был первый впрос
                $('.back-question').show(); 
            }else if(currentItem.hasClass('last-question')){ //если последний вопрос
                $('.next-question').hide(); 
                $('.goToAccount').show(); 
                $('.rememText').show();
            }
            currentItem.removeClass('active').next().addClass('active');
            progressBar.Next();
        }
    }
    function checkQuestioBack(item){ //ф-я для переключения вопросов при шагк назад
        var currentItem = $(item).parent().parent().find('.active');

        if(currentItem.prev().hasClass('first-question')){ //если это первый вопрос
            $('.back-question').hide(); //скрываем кнопку назад
        } else if(currentItem.hasClass('result')){ //если это был результат теста
            $('.next-question').show(); //показываем кнопку Далее
            $('.goToAccount').hide(); //скрываем кнопку перехода в ЛЧ
            $('.rememText').hide();
        }
        currentItem.removeClass('active').prev().addClass('active');
        progressBar.Back(); 
    }

    function getInfo(){
        var ageNum,
            withoutMoneyNum,
            costToIncomeNum;
        
        var age = $("#ageValue").val();
        if(age < 30){
            ageNum = 3;
        }else if(age > 29 && age < 55){
            ageNum = 2;
        }else if (age > 54){
            ageNum = 1;
        }
        
        var maritalStatus = Number($("#maritalStatus input[type='radio']:checked").val());
        var dependentMembers = Number($("#dependentMembers input[type='radio']:checked").val());
        var financRespons = Number($("#financRespons input[type='radio']:checked").val());
        var education = Number($("#education input[type='radio']:checked").val());
        var employment = Number($("#employment input[type='radio']:checked").val());
        var position = Number($("#position input[type='radio']:checked").val());
        var healthProblems = Number($("#healthProblems input[type='radio']:checked").val());
        var moneyFor = Number($("#moneyFor input[type='radio']:checked").val());

        var withoutMoney = $("#withoutMoney").val();
        if(withoutMoney < 3){
            withoutMoneyNum = 3;
        }else if(withoutMoney > 2 && withoutMoney < 13){
            withoutMoneyNum = 2;
        }else if (withoutMoney > 12){
            withoutMoneyNum = 1;
        }

        costToIncome = $("#costToIncome").val();
        if(costToIncome < 60){
            costToIncomeNum = 3;
        }else if(costToIncome > 59 && costToIncome < 81){
            costToIncomeNum = 2;
        }else if (costToIncome > 80){
            costToIncomeNum = 1;
        }

        var results = ageNum + maritalStatus + dependentMembers + financRespons + education + employment + position + healthProblems + moneyFor + withoutMoneyNum + costToIncomeNum;
        console.log(ageNum, maritalStatus, dependentMembers, financRespons, education, employment, position, healthProblems, moneyFor, withoutMoneyNum, costToIncomeNum, results);

        $( "#resultsTable li" ).each(function() {
            if(results >= $(this).data('min') && results <= $(this).data('max')){
                num = $(this).data('num');
                color = $(this).data('color');
                $('.result__block .num').text(num).css('color', color);
            }
            
        });

    }
    
    $(".questions .back-question").on('click', function(){
        checkQuestioBack(event.target); 
        counter();
    });
    $(".questions .next-question").on('click', function(){
        checkQuestionNext(event.target);
        counter();
        getInfo();
    });

});