
// When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”

// $('document').ready(function (){
//     alert('Lets get this j query party started!!');
// })
// Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$('article img').addClass('image-center');
// Remove the last paragraph in the article.
$('article p').eq(5).remove();
// Set the font size of the title to be a random pixel size from 0 to 100.
$('h1').css('font-size', `${Math.floor(Math.random() * 100)}px`)
// Add an item to the list; it can say whatever you want.
$('ol').append('<li>adding to the list</li>')
// Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$('aside').append('<p>I apologize for the previous list that held this space</p>').children().remove('ol')
// When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$('div').eq(2).on('keypress', 'input', function () {
  
    $('body').css('background-color', `rgb (${$('div').eq(2).find('input').eq(0).val()},${$('div').eq(2).find('input').eq(1).val()}, ${$('div').eq(2).find('input').eq(2).val()} )`);
    // $('div').eq(2).children().eq(0)
})
$('div').eq(2).on('keypress', 'input', function () {
    let red = $('div').eq(2).find('input').eq(0).val()
    let green = $('div').eq(2).find('input').eq(1).val()
    let blue = $('div').eq(2).find('input').eq(2).val()
    // console.log('background-color', "rgb("+ red +","+ green +","+ blue +")");
    $('body').css('background-color', "rgb("+red+","+green+","+blue+")")
})
// Add an event listener so that when you click on the image, it is removed from the DOM.
$('img').on('click', function(){
    $(this).remove();
})