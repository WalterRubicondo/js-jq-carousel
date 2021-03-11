$(document).ready(function () {
    nextPhoto()
    prewPhoto()
    pallino()
})

function nextPhoto() {
    
    var carousel = $(".next .fa-angle-right");

    carousel.click(function () {
        var images = $(".active")
         images.removeClass("active").next().addClass("active");
        if (images.hasClass("last")) {
            images.removeClass("active")
            $(".first").addClass("active")
        }
    })
}

function prewPhoto() {
    
    var carousel = $(".prev .fa-angle-left");

    carousel.click(function () {
        var images = $(".active")
         images.removeClass("active").prev().addClass("active")
         if (images.hasClass("first")) {
            images.removeClass("active")
            $(".last").addClass("active")
        }
    })
}

function pallino() {
    
    var movePallino = $(".nav .fa-circle");

    movePallino.click(function () {
        var circle = $(".fa-circle")
        if (circle.hasClass("active")) {
            circle.removeClass("active")
            $(this).addClass("active")
        }
    })
}

