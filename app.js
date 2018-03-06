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

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max)) + 1;
      }

	function Go() {
		$('ul').removeClass();
		setTimeout(function() {},1000);
		$('#alcool').addClass('result' + getRandomInt(6));
		$('#soda').addClass('result' + getRandomInt(6));
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
