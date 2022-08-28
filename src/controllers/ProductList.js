"use strict"


/**
 * @param {HTMLTableElement} listElement
 */

function ProductList(listElement){
    this.listElement = listElement

}

ProductList.prototype.init = function(){

}

ProductList.prototype.addProduct = function(fdcId){
    console.log("addProduct:" , fdcId)
}

module.exports = ProductList
