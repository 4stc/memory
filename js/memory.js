// put the deck of cards into an array
let deck = document.querySelectorAll(".card");

let pairs = 0;
let turn = 1;
let loading = false;

// left hand, right hand
let lh, rh;

// player1 and player2 scores
let p1 = 0, p2 = 0;

function shuffle() {
	// clean up from previous game
	if (turn>1) {
		turn = 1;
		pairs = 0;
		p1 = 0, p2 = 0;
		document.getElementById("player").textContent = "1";
		document.getElementById("score").textContent = p1;
		document.getElementById("pairs").textContent = pairs;
		document.getElementById("turn").textContent = turn;
	}

	loading = false;

	// clear hands
	lh = "", rh = "";

	// create new deck to be shuffled
	let mix = [2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9];

	// randomize cards
	mix.sort(() => (Math.random() > .5? 1 : -1));

	deck.forEach((card,i) => {
		// hide card face
		card.classList.remove("flip");

		// use newly randomized image
		let img = card.querySelector(".face img");
		img.src = `../img/deck/spades0${mix[i]}.png`;

		// make card clickable
		card.addEventListener("click",flip);
	});
}
// setup game
shuffle();

function flip({target: held}) {
	if (lh !== held && !loading) {
		// flip selected card
		held.classList.add("flip");

		if (!lh)
			return (lh=held);

		rh = held;
		loading = true;

		// get the card images
		let lh_img = lh.querySelector(".face img").src;
		let rh_img = rh.querySelector(".face img").src;

		// check if the pair of cards match
		pair(lh_img,rh_img);
	}else {
		// to avoid getting stuck permanently loading
		setTimeout(() => {
			loading = false;
		},999);
	}
}

function pair(lh_img,rh_img) {
	// check if held cards are matching
	if (lh_img === rh_img) {
		pairs++;

		// increase score for the current player
		turn % 2 == 0? p2++ : p1++;

		// if all cards are matched, start a new game
		if (pairs>7)
			setTimeout(() => {
				return shuffle();
			},999);

		lh.removeEventListener("click",flip);
		rh.removeEventListener("click",flip);

		// clear hands
		lh = "", rh = "";

		// start next turn
		new_turn();
		return (loading = false);
	}

	// shake the mismatched cards
	setTimeout(() => {
		lh.classList.add("shake");
		rh.classList.add("shake");
	},333);

	// then remove the effect
	setTimeout(() => {
		lh.classList.remove("shake","flip");
		rh.classList.remove("shake","flip");

		// clear hands
		lh = "", rh = "";

		loading = false;
	},999);

	new_turn();
}

function new_turn() {
	turn++;

	// switch player info every turn
	if (turn % 2 == 0) {
		document.getElementById("player").textContent = "2";
		document.getElementById("score").textContent = p2;
	}else {
		document.getElementById("player").textContent = "1";
		document.getElementById("score").textContent = p1;
	}

	// update other info
	document.getElementById("pairs").textContent = pairs;
	document.getElementById("turn").textContent = turn;
}
