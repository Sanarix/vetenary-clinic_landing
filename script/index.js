'use strict'
const inputContainer = document.querySelector('.input-container');
const emailInput = document.querySelector('.email-input');

function borderHighlight () {
	emailInput.onfocus = function() {
		inputContainer.style.border = "2px solid grey";
	}

	emailInput.onblur = function() {
		inputContainer.style.border = "none";
	}
}

borderHighlight();