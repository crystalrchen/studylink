# study/link - TechTogether Seattle 2020
## Inspiration
Having a study buddy makes studying for a course so much more fun and enjoyable, but finding one can be difficult. Our web app, **study/link** incorporates a simple but effective process to find one, where users can find a list of possible study buddies just by inputting a couple pieces of information! 

## What it does
study/link matches college students with a study partner based on their preferences. Once landing on the home page, users can either choose to signup with an account or signup with their Google account. If the user already has a study/link account, they can simply log in by clicking the login button at the top left of the screen. Not only that, but on the home page, there is also a **study buddy chatbot**, which users can interact with (try it out by saying “hi”!). 

Upon logging in, the user should input the name of their course, their grade level (study/link is specifically geared towards college students), their learning style (visual, kinesthetic, auditory, reading/writing), and preferred time to study (morning, afternoon, night). The user is then taken to a summary of their preferences and has the option to go back and change anything if necessary. After this, the webpage displays a list of potential study buddies, which match at least 1 of the user's preferences. From here, the user can choose a study buddy to reach out to and connect with. 

To help keep studying motivating, students can also earn studypoints by completing challenges, like hosting more than 3 study groups, chatting with our study bot, and referring a friend to study/link. Based on the points, study groups will be ranked on the leaderboard and can win discounts on products and services from partner stores. With this **gamified system**, users are encouraged to study collaboratively and efficiently. 

## How we built it
The website was designed with Figma and built under HTML/CSS, Javascript, jQuery, and Azure. Our study buddy chatbot uses Microsoft Azure, and answers to inputs such as 
- I'm stressed!
- I'm a girl, should I study STEM?
- I feel like I’m not good at studying.
- How do I study?
- Can you recommend a movie?

HTML/CSS powers the front-end display and jQuery powers the scrolling behavior of website anchors. We used Javascript and Google Firebase for the backend of the webpage. On `connect.html`, the down arrow summarizes the user’s choices to find the study buddy that best matches their preferences on `find.html`. 

## Challenges we ran into
- Time management: it was a bigger project than expected and took time to finish in a weekend.
- Formatting the display using HTML and CSS 
- Implementing Microsoft Azure by using the chatbot (training time) 
- The sign-up/login feature using Firebase and Javscript; this was was new to everyone
- Implementing Google authentication to allow users to login/signup with Google

## Accomplishments that we’re proud of
- Building off of the challenges we faced as a student
- Training a study chatbot with Microsoft Azure
- Connecting Firebase DB
- Implementing Google authentication
- Combining our strengths together to design, develop, and pitch a working MVP

## What we learned
- New frameworks, such as Azure and Firebase
- Improvement in our skills in website development and UI/UX design prototyping
- Figma prototyping with scrolls, interactions, and animations
- Project management: dividing our work in an effective manner

## What's next for study/link
-  Develop more of the functionalities that we had displayed on our [UI/UX prototype](https://www.figma.com/file/mNrkUS4GztrdCMTrSZ9K8W/Study-Buddies?node-id=0%3A1), such as a profile page for each user, responses to challenges accepted, and connections to social networks. 
- Received more user feedback from college students and build off of that feedback
- Enhance the training of the Azure-based study buddy chatbot
- Add more users into the database and improve the study buddy matching algorithm
- Creating an iOS/Android mobile app version of study/link
