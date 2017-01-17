 $(function () {
     $.get('/api/candidat', function (data) {
         console.log(data);
         for (var i = 0; i < data.length; i++) {
             var _li = '<option>' + data[i].id + ' - ' + data[i].firstname + ' ' + data[i].lastname + '</option>';
             $('#candidatlist').append(_li);
         }
     });

     $('#candidat').click(function () {
         $.get('/api/candidat', function (data) {

             for (var i = 0; i < data.length; i++) {
                 var _li = '<option>' + data[i].id + ' - ' + data[i].firstname + ' ' + data[i].lastname + '</option>';
                 $('#candidatlist').append(_li);
             }
         })
     });


     $('#resultat').click(function () {
         $.get('/api/vote', function (data) {

             for (var i = 0; i < data.length; i++) {
                 var _li = '<li>' + data[i].vote + '</li>';
                 $('#result').append(_li);
             }
         })
     });



     $('#votant-create').submit(function (e) {
         e.preventDefault();


         var _firstname = $('#firstname').val(),
             _lastname = $('#lastname').val(),
             _age = $('#age').val();

         $.post('api/votant', {
             firstname: _firstname,
             lastname: _lastname,
             age: _age
         }).done(function (data) {
             alert("data loaded: " + data);


         });
     });

     $('#create-vote').submit(function (e) {
         e.preventDefault();

         var _lastname = $('#lastname1').val(),
             _vote = $('#vote').val();

         $.post('api/vote', {
             lastname: _lastname,
             vote: _vote
         }).done(function (data) {
             alert("Merci");
         });
     });






     $("#pass").click(function () {
         $("#votantcreate").fadeOut("fast");
     });

     $("#pass").click(function () {
         $("#vot").fadeIn("slow");
     });



 })