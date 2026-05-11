const deliveryFee = 1500;

function recalculate() {
    let subtotal = 0;

    document.querySelectorAll(".cart-item").forEach(item => {
        const input = item.querySelector("input");
        const price = parseInt(input.dataset.price);
        const qty = parseInt(input.value);

        const itemTotal = price * qty;
        item.querySelector(".item-total").innerText =
            itemTotal.toLocaleString() + " FCFA";

        subtotal += itemTotal;
    });

    document.getElementById("subtotal").innerText =
        subtotal.toLocaleString() + " FCFA";

    document.getElementById("total").innerText =
        (subtotal + deliveryFee).toLocaleString() + " FCFA";
}

function updateQty(btn, change) {
    const input = btn.parentElement.querySelector("input");
    let value = parseInt(input.value) + change;
    if (value < 1) value = 1;
    input.value = value;
    recalculate();
}

function removeItem(btn) {
    btn.closest(".cart-item").remove();
    recalculate();
}

// Initial calculation
recalculate();
