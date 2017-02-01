var firstname = "BARACK",
    lastname = "OBAMA";



var phrase = function (firstname, lastname, cb) {

};
var sub1 = function (firstname, lastname, cb) {
    var _part1 = 'je suis ' + firstname + ' ' + lastname;
    sub2(_part1, function (phrase) {
        cb(phrase);
    });
};
var sub2 = function (part1, cb) {
    var _ph = part1 + 'et je suis Americain';
    cb(ph);
};




phrase(firstname, lastname, function (ph) {

            console.log(ph)
        }
        /*_________________  ____________________*/

        var phrase = function (firstname, lastname, cb) {

        };
        var sub1 = function (firstname, lastname, cb) {
            var _part1 = 'je suis ' + firstname + ' ' + lastname;
            sub2(_part1, function (phrase) {
                cb(phrase);
            });
        };
        var sub2 = function (part1, cb) {
            var _ph = part1 + 'et je suis Americain';
            cb(ph);
        };




        phrase(firstname, lastname, function (ph) {

                console.log(ph)
            }






            /*----------- EXEMPLE SIMPLIFIER Collback----------
       
       
       
       
      var f1 = function(phrase){ // phrase = entry = tralala
	console.log(phrase);
}

var f2 = function(entry, cb){
	cb(entry); // f1(entry)
}

var f3 = function(phrase){
	console.log('Toto' + phrase);
}

f2('tralala', f1); // f1('tralala')
f2('trololo', f3); // f3('trololo') 
       
/*