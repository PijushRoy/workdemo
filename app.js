function gratings(name, message) {
    return function () {
        let firstName = name + message
    }
}

console.log(gratings('Pijush Roy', 'Good Morning'))