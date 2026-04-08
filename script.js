const basePrice = 20;
const giftWrapPrice = 5;

const quantityInput = document.getElementById("quantity");
const giftWrap = document.getElementById("giftWrap");
const totalDisplay = document.getElementById("total");
const resetButton = document.getElementById("resetButton");

function updateTotal() {
	let quantity = parseInt(quantityInput.value);

	if (quantity < 1 || isNaN(quantity)) {
		quantity = 1;
		quantityInput.value = 1;
	}

	let total = basePrice * quantity;

	if (giftWrap.checked) {
		total = total + giftWrapPrice;
	}

	totalDisplay.textContent = "$" + total;
}

function resetCalculator() {
	quantityInput.value = 1;
	giftWrap.checked = false;
	updateTotal();
}

quantityInput.addEventListener("input", updateTotal);
giftWrap.addEventListener("change", updateTotal);
resetButton.addEventListener("click", resetCalculator);

updateTotal();
