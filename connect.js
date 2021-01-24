const logoutButton = document.querySelector("#logout-button");
if (logoutButton) {
  //const authLogOut = JSON.parse(localStorage.getItem('___user___'));
  //console.log(authLogOut);
  logoutButton.addEventListener("click", function () {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      window.location ="index.html";
    }).catch((error) => {
      // An error happened.
      alert(error.message);
    });
  });
}


Sarah Wheeler, swheeler087@gmail.com, College freshman, CSE 340 Visual, Interaction Programming, Morning
Jennifer Anderson, jennyanders642@gmail.com, College junior, Auditory, CSE 446 Machine Learning, Afternoon
Blake Walker, starwars7563@yahoo.com, College freshman, Visual, CSE 331 Software Design & Implementation, Night
Sky Trainer, strainer74@gmail.com, College senior, Reading/writing, CSE 142 Computer Programming I, Morning
Jordan Row, jordanrowww74@hotmail.com, College sophomore, Kinesthetic, CSE 331 Software Design & Implementation, Night

users = {

  "Sarah Wheeler" : ["swheeler087@gmail.com", "College freshman", "Visual", "CSE 340 Interaction Programming", "Morning"]



}
         