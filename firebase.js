firebase.initializeApp({
  apiKey: "AIzaSyCs9HLZieriF6rmRFxTdE92tp0jn29SHAQ",
  authDomain: "test-95f85.firebaseapp.com",
  databaseURL: "https://test-95f85.firebaseio.com",
  projectId: "test-95f85",
  storageBucket: "test-95f85.appspot.com",
  messagingSenderId: "434763550518",
  appId: "1:434763550518:web:7ef9c65f5e5bbb913eed97",
  measurementId: "G-09RVGWS851"
});

var db = firebase.firestore();


async function getUsers() {
  var users = [];
  await db.collection("users").orderBy("age").get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      users.push(doc.data());
    });
  });
  return users;
}

async function getUser(id) {
  var user = {};
  await db.collection("users").doc(id).get().then(function (doc) {
    user = doc.data();
  });
  return user;
}

async function addUser(user) {
  // await db.collection("users").add(user);
  // add user to firestore with uuid
  let id = uuid.v1();
  await db.collection("users").doc(id).set({
    id: id,
    ...user
  });

}

async function deleteUserById(id) {
  await db.collection("users").doc(id).delete();
}

