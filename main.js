$(document).ready(async function () {
  await displayUsers();

  // add new user using add-user-form
  $("#add-user-form").submit(async function (e) {
    e.preventDefault();
    let name = $("#name").val();
    let age = $("#age").val();
    let newUser = {
      name: name,
      age: age
    };
    await addUser(newUser).then(() => {
      $("#name").val("");
      $("#age").val("");
      displayUsers();
    }).catch(err => {
      console.log(err);
    });
  });
});

function deleteUser(id) {
  deleteUserById(id).then(() => {
    displayUsers();
  }).catch(err => {
    console.log(err);
  });
}
async function displayUsers() {
  let users = await getUsers();
  console.log(users);

  // display users in the table body "users-tb"
  $("#users-tb").empty();
  users.forEach(user => {
    let tr = $("<tr>");
    tr.append(
      $("<td>").text(user.name),
      $("<td>").text(user.age),
      // get the id of the user from the firestore

      $("<td>").html(`<button class="btn btn-danger" onclick="deleteUser('${user.id}')">Delete</button>`)
    );
    $("#users-tb").append(tr);
  });

  // delete user

}




