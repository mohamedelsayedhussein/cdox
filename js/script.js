

//  slider script

$(function () {

    var numOfThumb = $('.thumbnails').children().length;
    var marginBetween = '.5';
    var totalMarginBetween = (numOfThumb - 1) * marginBetween;
    var thumbWidth = (100 - totalMarginBetween) / numOfThumb;

    $('.thumbnails img').css({
        'width': thumbWidth + '%',
        'margin-right': marginBetween + '%'
    });
    
    $('.thumbnails img').click(function() {

    $(this).addClass('selected').siblings().removeClass('selected');

    $('.master-img img').hide().attr('src', $(this).attr('src')).fadeIn(1000);

    })

    $('.thumbnails .fa-chevron-right').on('click', function() {
        if($('.thumbnails .selected').is(':last-of-type')) {
            $('.thumbnails img').eq(0).click();
        }else {
            $('.thumbnails .selected').next().click();
        }
    });

    $('.thumbnails .fa-chevron-left').click(function() {
        if($('.thumbnails .selected').is(':first-of-type')) {
            $('.thumbnails img:last').click();
        }else {
            $('.thumbnails .selected').prev().click();
        }        

    })
    
    });