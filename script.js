window.onload = function () {
	var baseCost = Number(prompt("How much was your meal?"));
	var taxRate = Number(prompt("What's the tax?"));
	var tipRate = Number(prompt("What percentage tip would you like to leave?"));

	function totals () {
		var taxCost = baseCost * taxRate * .01;
		var subTotal = baseCost + taxCost;
		var tipCost = subTotal * tipRate * .01;
		var totalCost = subTotal + tipCost;

		alert("Your meal cost: $" + baseCost + "\n Your subtotal is: $" + subTotal + "\n Tip: $" + tipCost + "\n Total: $" + totalCost);
	};

	totals();
};