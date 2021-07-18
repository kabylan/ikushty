
function pinIndexes() {

    var index = 0;
    $('td').toArray().forEach(td => {
        index++;
        $(td).text(index);
    });

}

function pinColors() {

}

function pinNumbers(indexesToShow) {

    
    $('td').toArray().forEach(td => {
        $(td).text('');
    });

    indexesToShow.forEach(index => {
        $($('.td-'+ index)).text(index);
    });
    
}

function getRandomNumbers() {

    var howMuchNumbers = Math.floor(Math.random() * 9) + 1;

    var randomNubmers = [];
    for(var i = 0; i < howMuchNumbers; i++) {
        var randomNum = Math.floor(Math.random() * 9) + 1;
        if (randomNubmers.indexOf(randomNum) == -1) {
            randomNubmers.push(randomNum);
        }
    }

    return randomNubmers;
}

$(document).on('input', '#speed', function() {
    $('#speedometer').text( $(this).val() );
});


function changeRandomNumbersByTime() {
    
    var speed = parseInt($('#speed').val());
    var timerId = setTimeout(function tick() {
        
        speed = parseInt($('#speed').val());

        pinNumbers(getRandomNumbers());

        timerId = setTimeout(tick, speed);
    }, speed);
}


$(document).ready(function() {


    // pinIndexes();
    changeRandomNumbersByTime();
});

