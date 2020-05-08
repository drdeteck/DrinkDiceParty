/*************/
/*  Module   */
/*************/

// Root namespace definition
window.PL = window.PL || {};

// Module Definition
(function(DrinkDice, $, undefined) {
	DrinkDice.Data = {
		dice1: ''
	};

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	  }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max)) + 1;
      }

	async function  Go() {
		$('ul').removeClass();
		await sleep(5);
		$('#alcool').addClass('result' + getRandomInt(6));
		$('#soda').addClass('result' + getRandomInt(6));
		$('#topper').addClass('result' + getRandomInt(6));
		$('#hardcore').addClass('result' + getRandomInt(6));
	}

	// Public function
	DrinkDice.Init = function() {
		$('#go').click(Go);
	};
})((PL.DrinkDice = PL.DrinkDice || {}), $);

(function(Test, $, undefined) {
	// Public function
	Test.Corner = function(id) {
		$('#test').removeClass().addClass('corner' + id);
	};
})((PL.Test = PL.Test || {}), $);

// init
$(document).ready(function() {
	PL.DrinkDice.Init();
});
