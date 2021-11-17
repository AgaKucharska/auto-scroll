// jQuery -> all in 1

$('nav a').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})


// // jQuery - easy

// $('.me').on('click', function () {
//     $('body, html').animate({
//         scrollTop: $('.s1').offset().top
//     }, 500)
// })

// $('.portfolio').on('click', function () {
//     $('body, html').animate({
//         scrollTop: $('.s2').offset().top
//     }, 500)
// })

// $('.offer').on('click', function () {
//     $('body, html').animate({
//         scrollTop: $('.s3').offset().top
//     }, 500)
// })

// $('.contact').on('click', function () {
//     $('body, html').animate({
//         scrollTop: $('.s4').offset().top
//     }, 500)
// })