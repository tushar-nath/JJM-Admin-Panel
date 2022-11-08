function getElement(id) {
	return document.getElementById(id);
}

fetch("https://api.coinmarketcap.com/v2/ticker/1312/")
	.then((res) => res.json())
	.then((res) => {
		const data = res.data;
		getElement("header").innerHTML =
			"200+ active IOT centers in" + data.header;
		getElement("solved").innerHTML = data.solved + "solved quesries";
		getElement("unsolved").innerHTML = data.unsolved + "unsolved quesries";
		getElement("supervisor").innerHTML =
			"SUPER VISOR NAME - " + data.supervisor;
		// do the rest here
	});
