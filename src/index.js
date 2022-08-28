"use strict"

require("../scss/index.scss")

const ProductSearch = require("./controllers/ProductSearch")

const productSearch = new ProductSearch(
  document.getElementById("productSearchInput"),
  document.getElementById("productSearchButton"),
  document.getElementById("productSearchResults")
)
productSearch.init()
productSearch.events.on("productSelected", (fdcId)=>{
  alert("fdcId " + fdcId)
})