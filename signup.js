const registerButton = document.querySelector("#register-account");
if (registerButton){
registerButton.addEventListener("click", function () {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    localStorage.setItem('___user___', JSON.stringify(user));
    if(user){
      window.location = 'connect.html';
    }
  })
  .catch((error) => {
    alert(error.message);
  });
  //   promise.catch(e => alert(e.message));

  //   firebase.auth().onAuthStateChanged(user => {
  //   if(user) {
  //     window.location = 'profile.html';
  //   }
  // });
});
}

//const loginButton = document.querySelector("#login-button")

