const loginButton = document.querySelector("#login-button");
if (loginButton){
loginButton.addEventListener("click", function () {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
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

});
}


const googleSignInButton = document.querySelector("#google-login-button");
googleSignInButton.addEventListener("click", function () {
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      var user = result.user;
      localStorage.setItem('___user___', JSON.stringify(user));
      if (user) {
        window.location = 'connect.html';
      }
    }).catch((error) => {
       alert(error.message);
    });
});