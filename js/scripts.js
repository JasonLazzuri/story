//Business Logic



//UI
$(document).ready(function(){
  ////CHAPTER ONE/////

$('#riddleAttemptButton1').click(function(){
  $('#chapterOne').hide();
  $('#riddleOne').show();
});

/////RIDDLE ONE/////

  $('.riddle1btn').click(function(){
    var answerOne = $(this).attr('id');
    if (answerOne === 'trueButton') {
      $('#riddleOne').hide();
      $('#riddleOneSuccess').show();

    } else {
      $('#riddleOne').hide();
      $('#riddleOneFail').show();
    }
  });


$('.proceedButton2').click(function(){
  $('#riddleOneFail').hide();
  $('#chapterOne').show();
});

// $('.proceedButton1').click(function(){
//   $('#riddleOneSuccess').hide();
//   $('#chapterTwo').show();
// });
/////RIDDLE TWO/////

$('#riddleAttemptButton2').click(function(){
  $('#chapterTwo').hide();
  $('#riddleTwo').show();
});

$('.riddle2btn').click(function(){
  var answerTwo = $(this).attr('id');
  if (answerTwo === 'trueButton') {
    $('#riddleTwo').hide();
    $('#riddleTwoSuccess').show();

  } else {
    $('#riddleTwo').hide();
    $('#riddleTwoFail').show();
  }
});
// Fail retry button
$('.retryButtonChapter2').click(function(){
  $('#riddleTwoFail').hide();
  $('#riddleTwo').show();
});

// $('.proceedButton1').click(function(){
//   $('#riddleTwoSuccess').hide();
//   $('#chapterThree').show();
// });


});
