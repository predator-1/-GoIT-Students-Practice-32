
for(var i=0; i<5; i++) {
    function result(i) {
        return console.log(i);
    }
    setTimeout(result(i), 0);
}
