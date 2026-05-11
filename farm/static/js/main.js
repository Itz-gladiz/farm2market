(function ($) {
    "use strict";

    /* =======================
       Spinner
    ======================= */
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    /* =======================
       Fixed Navbar
    ======================= */
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow');
            } else {
                $('.fixed-top').removeClass('shadow');
            }
        } else {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow').css('top', '-55px');
            } else {
                $('.fixed-top').removeClass('shadow').css('top', '0');
            }
        }
    });


    /* =======================
       Back to top
    ======================= */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    /* =======================
       Vegetable Carousel
    ======================= */
    $(".vegetable-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 4 }
        }
    });


    /* =======================
       Modal Video
    ======================= */
    $(document).ready(function () {
        let videoSrc = "";

        $('.btn-play').click(function () {
            videoSrc = $(this).data("src");
        });

        $('#videoModal').on('shown.bs.modal', function () {
            $("#video").attr(
                'src',
                videoSrc + "?autoplay=1&modestbranding=1&showinfo=0"
            );
        });

        $('#videoModal').on('hide.bs.modal', function () {
            $("#video").attr('src', "");
        });
    });

})(jQuery);

/* =======================
   CART LOGIC (GLOBAL)
======================= */

let subtotal = 0;
const deliveryFee = 1500;

/**
 * Add item to cart
 * @param {string} name
 * @param {number} pricePerKg
 * @param {HTMLElement} btn
 */
function addToCart(name, pricePerKg, btn) {
    const kg = parseFloat(btn.previousElementSibling.value);

    if (!kg || kg <= 0) return;

    const cost = pricePerKg * kg;
    subtotal += cost;

    const li = document.createElement("li");
    li.textContent = `${name} - ${kg} kg = ${cost.toLocaleString()} FCFA`;

    document.getElementById("cart-items").appendChild(li);

    document.getElementById("subtotal").textContent =
        subtotal.toLocaleString();

    document.getElementById("total").textContent =
        (subtotal + deliveryFee).toLocaleString();
}
