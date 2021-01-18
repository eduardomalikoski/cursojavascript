let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(globalThis)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(globalThis)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(globalThis)
comparaComThisArrow(module.exports)

// mesmo com bind o contexto do this ainda ficará firme no arrow function
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)