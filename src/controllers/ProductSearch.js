"use strict"
const Eventemitter3 = require("eventemitter3")
const {search} = require("../api/product")
const {on} =require("../utils/dom")

/**
 * 
 * @param {HTMLInputElement} inputElement 
 * @param {HTMLButtonElement} buttonElement 
 * @param {HTMLDivElement}resultsElement
 */
function ProductSearch(inputElement, buttonElement, resultsElement) {
  this.inputElement = inputElement
  this.buttonElement = buttonElement
  this.resultsElement = resultsElement
  
  this.events = new Eventemitter3()
}

ProductSearch.prototype.init = function() {
  this.buttonElement.addEventListener("click", (event) => {
    event.preventDefault()

    const inputValue = this.inputElement.value
    this.runSearch(inputValue)
  
  })
  on(".product-search-result-item", "click", (event) =>{

    event.originalEvent.preventDefault() //if  window jup to start  use this line of code
    const fdcId = event.handleObj.getAttribute("data-fdcId")
    this.events.emit("productSelected ", fdcId)
    alert("fdcId : " + fdcId)
  })

}

/**
 * @param {String} term
 */
ProductSearch.prototype.runSearch = function(term) {
  search(term).then((results) => {
// When a search is complete, it must be performed 

  /*  for (const child of this.resultsElement.children){
      child.remove()
    }
*/

this.resultsElement.innerHTML = ""

    for (const result of results){
      const linkElement = document.createElement("a")
      linkElement.classList.add("list-group-item")
      linkElement.classList.add("list-group-item-action")
      linkElement.classList.add("product-search-result-item")
      linkElement.setAttribute("href", "#")
      linkElement.setAttribute("data-fdcId", result['fdcId'])
      linkElement.innerText = result['description']

      this.resultsElement.append("Ergebnis:",linkElement)
    }

    console.log("results:", results)
  })
}

module.exports = ProductSearch