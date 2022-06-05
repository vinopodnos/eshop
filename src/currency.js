export default async function Currencies() {
	load();
}

export async function getCurrency(code) {
	await load();
	return Currencies.courses[code];
}

export async function convert(code, amount) {
	if (code === "CZK") return amount;
	const cur = await getCurrency(code);
	return (amount / cur.value) * cur.amount;
}

async function load() {
	if (!Currencies.courses || Currencies.date > Currencies.loaded)
		try {
			await loader();
		} catch {
			console.error("Currency loading failed!");
		}
}

async function loader() {
	const res = await fetch(
		"https://api.allorigins.win/raw?url=https://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt"
	);
	const text = await res.text();
	Currencies.loaded = new Date();
	Currencies.courses = {};
	text.split("\n").forEach((val, i) => {
		if (i === 0) {
			let date = val;
			date = date.split(" ")[0];
			date = date.split(".");
			date.reverse();
			date = date.join("-");
			Currencies.date = new Date(date);
			return;
		}
		if (i === 1) return;
		if (!val) return;
		const data = val.split("|");
		Currencies.courses[data[3]] = {
			amount: parseFloat(data[2].replace(",", ".")),
			value: parseFloat(data[4].replace(",", ".")),
		};
	});
}
