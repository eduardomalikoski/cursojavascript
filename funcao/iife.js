// IIFE => Immediately Invoked Function Expression

// Assim não ficará no escopo global tudo que ficar na função, apenas como uso de ()
(function() {
    console.log('Será executado na hora que for declarada')
    console.log('Foge do escopo mais abrangente!')
})()

// a função será executada na hora em que for passada por ela e não quando chamada
// ou seja, será chamada no instante em que passar por ela