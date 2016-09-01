//Addresses getmdl.io issue for upgrading elements
window.upgradeElements = function () {
    window.componentHandler.upgradeElements(document.querySelectorAll('.mdl-js-textfield, .mdl-tooltip'), function (elem) { console.info(elem) })
}