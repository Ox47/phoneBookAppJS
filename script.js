// $.getJSON("userdata.json", function (json) {
//   console.log(json); // this will show the info it in firebug console
// });


function showAddMemberForm() {
  addMemeberForm.style.display = 'block';
}

$('#addMemberBtn').click(function () {
  $('#addMemeberForm').show();
});

var users = [
  ['john', 'smith', 214124214],
  ['charlie', 'chaplin', 214124443],
  ['tyler', 'durden', 231548283]
];

var users =
    [
      {
        firstName: "john",
        lastName: "smith",
        phoneNumber: "532523523"
      },
      {
        firstName: "conor",
        lastName: "mcgregor",
        phoneNumber: "34563462"
      },
      {
        firstName: "nate",
        lastName: "diaz",
        phoneNumber: "76585688"
      },
    ];

for (var i = 0; i < users.length; i++) {
  $('<tr></tr>').insertAfter('tr');
  for (var j = 0; j < 1; j++) {
    $('<td>' + JSON.stringify(users[i]['lastName']) + '</td>' + '<td>' + JSON.stringify(users[i]['firstName']) + '</td>' + '<td>' + JSON.stringify(users[i]['phoneNumber']) + '</td>').appendTo('tr:nth-child(2)');
  }

}

console.log(addNewUser());


function addNewUser() {
  $(".submitButton").click(function () {
    $("form").submit(function (event) {
      var userData = ($(this).serializeArray());
      event.preventDefault();
      return userData;
    });

  });
}