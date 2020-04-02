var stars = $('.ratingOne');
var ratingStar =['', '', '', '', '']

theStar(stars,ratingStar);

function theStar(contentID,item){
    var htmlItem = item.map(function(){
        return '<i class="far fa-star" id ="highlight"></i>'
    });
    var html = htmlItem.join('');
    contentID.html(html);
}