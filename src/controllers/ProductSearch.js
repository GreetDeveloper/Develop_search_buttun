"use strict"

const {search} = require("../api/product")

/**
 * 
 * @param {HTMLInputElement} inputElement 
 * @param {HTMLButtonElement} buttonElement 
 */
function ProductSearch(inputElement, buttonElement) {
  this.inputElement = inputElement
  this.buttonElement = buttonElement
}

ProductSearch.prototype.init = function() {
  this.buttonElement.addEventListener("click", (event) => {
    event.preventDefault()

    const inputValue = this.inputElement.value
    this.runSearch(inputValue)
  })
}

/**
 * @param {String} term
 */
ProductSearch.prototype.runSearch = function(term) {
  search(term).then((results) => {
    console.log("results:", results)
  })
}

module.exports = ProductSearch