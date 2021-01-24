// let querystring = window.location.search.substring(1);
// console.log(querystring);

const urlParams = new URLSearchParams(window.location.search);
const grade = urlParams.get('gradeVal');
const course = urlParams.get('courseText');
const style = urlParams.get('styleVal');
const time = urlParams.get('timeVal');
console.log(course);
// CSE 142 Computer Programming I

users = {
  //sample users dataset
  "Sarah Wheeler": ["swheeler087@gmail.com", "freshman", "visual", "CSE 340 Interaction Programming", "morning"],
  "Jennifer Anderson": ["jennyanders642@gmail.com", "junior", "auditory", "CSE 446 Machine Learning", "afternoon"],
  "Blake Walker": ["starwars7563@yahoo.com", "freshman", "visual", "CSE 331 Software Design & Implementation", "night"],
  "Sky Trainer": ["strainer74@gmail.com", "senior", "reading/writing", "CSE 142 Computer Programming I", "morning"],
  "Jordan Row": ["jordanrowww74@hotmail.com", "sophomore", "kinesthetic", "CSE 331 Software Design & Implementation", "night"]
};

let foundBuddies = document.querySelector("#found-buddies");
//iterating through sample dataset to find out a potential match and display on to the next page

// query string param => gradeVal=junior&courseVal=142&styleVal=visual&timeVal=morning
for (const [key, value] of Object.entries(users)) {
  gradeCheck = value.includes(grade);
  courseCheck = value.includes(course);
  styleCheck = value.includes(style);
  timeCheck =  value.includes(time);
  if ( gradeCheck || courseCheck || styleCheck || timeCheck) {
    let gradeDisp = "";
    let courseDisp = "";
    let styleDisp = "";
    let timeDisp = "";

    if(gradeCheck){
      gradeDisp = "<br> Grade: " + value[1].charAt(0).toUpperCase() + value[1].slice(1) + "   ✅ ";
    }
    else{
      gradeDisp = "<br> Grade: " + value[1].charAt(0).toUpperCase() + value[1].slice(1);
    }

    if(courseCheck){
      courseDisp = "<br> Class: " + value[3] + "   ✅  ";
    }
    else{
      courseDisp = "<br> Class: " + value[3];
    }

    if(styleCheck){
      styleDisp = "<br> Study style: " + value[2].charAt(0).toUpperCase() + value[2].slice(1) + "   ✅  ";
    }
    else{
      styleDisp = "<br> Study style: " + value[2].charAt(0).toUpperCase() + value[2].slice(1);
    }

    if(timeCheck){
      timeDisp = "<br> Time: "+ value[4].charAt(0).toUpperCase() + value[4].slice(1) +  "   ✅  ";
    }
    else{
      timeDisp = "<br> Time: "+ value[4].charAt(0).toUpperCase() + value[4].slice(1);
    }

    foundBuddies.innerHTML += "<br><br><br>"
                        + "<h3 class='buddy-names'> " + key + "</h3>" 
                        + "<p class='buddies-list'> Email: " + value[0] 
                        + gradeDisp
                        + styleDisp
                        + courseDisp
                        + timeDisp 
                        + " </p>"
                        + "<a id='connect-button' href=mailto:"+ value[0] + "> Let's connect!" + "</a><br>";
    // let found = document.createElement("div");
    // found.innerHTML = key + "  " + value;
    // document.body.insertBefore(found, document.querySelector("#no-other-matches"));
  }
}

