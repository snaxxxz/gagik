const slider = document.getElementById("months");
const monthsOutput = document.getElementById("monthsOutput");
const priceOutput = document.getElementById("priceOutput");
const freeze1Checkbox = document.getElementById("freeze1");
const freeze2Checkbox = document.getElementById("freeze2");
const freeze3Checkbox = document.getElementById("freeze3");

// Стоимость абонемента за месяц
const pricePerMonth = 3000; // Замените на вашу цену
const freeze1Price = 2000;
const freeze2Price = 4000;
const freeze3Price = 5000;

function calculatePrice() {
	let months = parseInt(slider.value);
	let price = months * pricePerMonth;

	if (freeze1Checkbox.checked) {
		price += freeze1Price;
	}
	if (freeze2Checkbox.checked) {
		price += freeze2Price;
	}
	if (freeze3Checkbox.checked) {
		price += freeze3Price;
	}

	monthsOutput.textContent = months;
	priceOutput.textContent = price + " руб.";
}

// Инициализация при загрузке страницы
calculatePrice();

// Обновление при изменении ползунка
slider.addEventListener("input", calculatePrice);

// Обновление при изменении чекбоксов
freeze1Checkbox.addEventListener("change", calculatePrice);
freeze2Checkbox.addEventListener("change", calculatePrice);
freeze3Checkbox.addEventListener("change", calculatePrice);