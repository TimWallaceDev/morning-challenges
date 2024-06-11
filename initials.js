function initial(name){
    let final = ""
    name.split(" ").forEach(name => final+= (name[0].toUpperCase() + '.'))

    return final
}

console.log(initial("Tim Wallace favid"))