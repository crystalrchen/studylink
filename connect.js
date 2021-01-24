const logoutButton = document.querySelector("#logout-button");
if (logoutButton) {
  //const authLogOut = JSON.parse(localStorage.getItem('___user___'));
  //console.log(authLogOut);
  logoutButton.addEventListener("click", function () {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      window.location = "index.html";
    }).catch((error) => {
      alert(error.message);
    });
  });
}

let gradeVal = "";
let styleVal = "";
let courseVal = "";
let timeVal = "";

let courseText = "";
let styleText = "";
let timeText = "";

let summmaryCourse = "";
let summaryStyle = "";
let summaryTime = "";


function onArrowClick() {
  //getting selected values of each dropdown
  const grade = document.querySelector("#grade");
  gradeVal = grade.options[grade.selectedIndex].value;

  const course = document.querySelector("#class");
  courseVal = course.options[course.selectedIndex].value;
  courseText = course.options[course.selectedIndex].text;
 
  const style = document.querySelector("#style");
  styleVal = style.options[style.selectedIndex].value;
  styleText = style.options[style.selectedIndex].text;

  const time = document.querySelector("#time");
  timeVal = time.options[time.selectedIndex].value;
  timeText = time.options[time.selectedIndex].text;

  summmaryCourse = document.querySelector("#summary-class").innerHTML = "Class: " + courseText;
  summaryStyle = document.querySelector("#summary-style").innerHTML = "Learning Style: " + styleText;
  summaryTime = document.querySelector("#summary-time").innerHTML = "Time Preference: " + timeText;

}

function changeInfo(){
  summmaryCourse = document.querySelector("#summary-class").innerHTML = "Class: ";
  summaryStyle = document.querySelector("#summary-style").innerHTML = "Learning Style: ";
  summaryTime = document.querySelector("#summary-time").innerHTML = "Time Preference: ";

}


function findBuddies(){
  if (!(gradeVal || courseVal || styleVal || timeVal)){
    alert("Please enter your preferences for us to match you better!");
    return;
  }
  else {
    window.location ="find.html"+"?gradeVal="+gradeVal+"&courseText="+courseText+"&styleVal="+styleVal+"&timeVal="+timeVal;
  } 
}