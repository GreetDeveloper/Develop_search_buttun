"use strict"

module.exports.on = function on(selector, evenType, cb ){
    document.addEventListener(evenType, (event) =>{
        let Element = event.target

        while ( Element ){
            if (Element.matches(selector)){
                return cb ({
                    handleObj: Element,
                    originalEvent: event
                })
            }
            Element = Element.parentElement
        }
    })
}
