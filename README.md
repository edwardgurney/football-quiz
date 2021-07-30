# **Football Quiz**

### *You can view the live project here: [Football Quiz](https://edwardgurney.github.io/football-quiz/)*
<br>

This football quiz is for football fans to test their knowledge of football. There are a whole host of questions about the Premier League and its clubs, the Champions League the World Cup and European Cup.

The game has been designed to mimic the structure of a football tournament, for example, the World Cup or the Champions League. 

This means the first round is based on the group stages, where there will be 6 questions (one question to be the equivalent to 1 match). For every correct question the user will score three points. In order to progress to the knockout stages of the tournament, the user needs to achieve 12 points (4 correct answers).

The next stage of the game will be the knockout stage, if you give an incorrect answer, then you are out. There are 3 knockout questions, which is the equivalent to the quarter final, semi final and then final. If you answer questions 7, 8 and 9 correctly, you win the game. 

<img src="/workspace/football-quiz/assets/images/readme-images/amiresponsiveshot.png" width="1200">

## **User Experience**

  ### **User Stories**

 - *Site owners goal*
   1. The goal of the site is to provide a challenging quiz to entertain online users.
   2. For users to want to return and test themselves again.
   3. For the quiz to be a football based quiz scoring points similar to a football tournament. 

 - *First Time User Goals*<br>
    1. Easy to understand on the landing page so I can understand the rules as quickly as possible.
    2. For the quiz to be fun where I can score points realted to football questions.
    3. To start playing the game quickly without having to fill out any information.
    4. I'd like to know when I get an answer correct or incorrect and have a total score.


 - *Returning User Goals*<br>
    1. Easy to get to the game quickly.
    2. I want to see if I can improve my score.
    3. I want to have different questions at random so I don't have the same questions all the time.

 - *Repeat User Goals*<br>
    1. To see if I can win the game in record time.
    2. To get the first two questions wrong and see if I can still win the game.

## **Design**

   ### **Color Scheme**
   * The background colours on both large and small screens I wanted to be green to represent the football field. I considered photographs of players, but decided on a stable background without many varying colours. The user is also presented with a green box or red box depending on if the answer selected is correct or incorrect. All the boxes with text or any answer buttons are transparent. 

  ### **Typography**
  * I used the Roboto font as the primary font because I thougt it worked well with the quiz. Sans-serif was used as a backup becasue this is widely available in all browsers. 

  ### **Imagery**
  *  I kept the images simple in this first version so as not to complicate the background. The timer is only 60 seconds and the idea is for the payer to concentrate on the game and not the background images. 

  ## **Wireframes**

  - Landing page large screens <img src="assets/images/wireframes/Football Quiz - Landing Page.png" width="800"> 
  
  - Game area large screen <img src="assets/images/wireframes/Game Area.png">
  - Landing page small screens <img src="assets/images/wireframes/Phone - Game Area.png" height="750">
  - Game area small screens <img src="assets/images/wireframes/Phone Layout - Football Quiz Homepage.png" height="750">


## **Features**

### Existing Features
 * The game has a timer which helps build intensity to the game, it doesn't leave too long to think about each question if you want to progress. 
 * The quiz generates questions at random so you can play the game many times and get different questions. 
 * This is not a standard quiz. There are two elements to it, to win the game you don't need to get every answer correct. You need to qualify for the knockout stages of the game, where you need 4 correct answers out of 6. If the user achieves this they are allowed to progress to the final questions. If they do not achieve the required correct answers in the first round they will lose the game. 
 * Users can see how far they have got in the game by checking how many questions they have attempted.
 * Users can see how many correct and incorrect answers they have achieved. 
 * Each winnning or losing scenario has a different commentary, depending on how you lose the game and where you are knocked out of the game. 

## Screenshots

 Below are screenshots of the game representing some of the features described above:

 - The landing page with start button and the rules of the game. <img src="assets/images/screenshots/The Rules.png">

 - This is an example of one of the questions with four answer button choices, the game area.<img src="assets/images/screenshots/Question Screen.png">

  - This is the timeout screen.<img src="assets/images/screenshots/out of time.png">

  - This is losing screen one - Not qualified for the second round.<img src="assets/images/screenshots/You lost.png">

   - This is losing screen two - lost in the knockout stage.<img src="assets/images/screenshots/You lost.png">

   - This is the winning screen<img src="assets/images/screenshots/You won.png">

## **Features to implement in future**

 - Showing the user the correct asnwer when they get the question incorrect so that it is a learning experience.
 - Sound clips of cheering when the game is won and a final whistle audio clip when out of time. 
 - Enter team name or user name and have a scoreboard to track score and creates a league table format scoring system. 

## **Testing**

Testing was conducted on all mainstream browsers to ensure that they were compatable. The browsers tested were:

- Google Chrome
- Safari
- Microsoft Edge
- Mozilla Firefox

Testing was completed on various screen sizes using developer tools and various mobile phones and a tablet. There were no issues on the various browsers or on android and Iphones that it was tested on. The quiz was sent around to friends and family and no issues have been detected, other than recommendations for improvement. 

The physical phones tested on (not including dev tools) were:
- Iphone XR
- Iphone 12C
- Iphone 5C
- Samsung Galaxy A10
- OnePlus 7T Pro

I used [responsinator.com](http://www.responsinator.com/) which checks the site on a number of mobile screens and tablets (landscape and portrait) including:

- Iphone X
- Android Pixel 2
- Iphone 6,7,8
- Ipad

No issues were identified.

## **Languages Used** - HTML, CSS, Javascript.

- HTML - W3C validator was used for all HTML pages and no errors were found. Here is an example of the index.html showing no errors. <img src="assets/images/readme-images/Screenshot 2021-07-28 at 21.08.50.png">

Below are links to each of the W3C vailidators of the various HTML pages:
- [index.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fedwardgurney.github.io%2Ffootball-quiz%2Findex.html),
- [quiz.html](https://validator.w3.org/nu/?doc=https%3A%2F%2F8000-emerald-dolphin-iubjw25s.ws-eu13.gitpod.io%2Fquiz.html)
- [time.html](https://validator.w3.org/nu/?doc=https%3A%2F%2F8000-emerald-dolphin-iubjw25s.ws-eu13.gitpod.io%2Ftime.html)
- [youlost.html](https://8000-emerald-dolphin-iubjw25s.ws-eu13.gitpod.io/youlost.html)
- [kolost.html](https://8000-emerald-dolphin-iubjw25s.ws-eu13.gitpod.io/kolost.html)
- [youwon.html](https://validator.w3.org/nu/?doc=https%3A%2F%2F8000-emerald-dolphin-iubjw25s.ws-eu13.gitpod.io%2Fyouwon.html)

- CSS - Jigsaw W3C validator was used and no errors were found: <img src="assets/images/readme-images/Screenshot 2021-07-28 at 21.12.42.png">

- Javascript - JSHint was used an there are no errors. QuizQuestions was identified as an undefined variable on line 20, this is becasue the questions are stored in a seperate file that wasn't availabel to JSHint. <img src="assets/images/readme-images/Screenshot 2021-07-30 at 19.32.27.png">

## **Frameworks and Programs Used**

- Balsamiq - Was used to design the wireframes for both desktop and phone before coding.
- Google Fonts - Was used to import the Roboto font for the site.
- Git - Git was used for version control by commiting to Gitpod and pushing to Github.
- Github - Is used to store the code.

## **Unfixed bugs**

- On some occasions on Iphones the background image has a slight delay before it appears (less than half a second).

- On some occasions on Iphones there is a slight delay for the next question to load.

## **Fixed bugs in this version 1**

- On one of the losing screens on iphones the play again button was clashing with the 'you lost' commentary box above it. This was fixed.

- There was a console.log error: Cannot set property 'innertext' of null. this was becasue it was looking for the question counter on the landing page and it didn't exist. It was fixed by adding an if statement within the newgame function. 

## **Deployment**

The project was deployed to Githib pages in the following way:
1. Logged onto Github and clicked the repository 
2. Clicked the 'Settings' tab
3. Clicked on the 'Pages' tab on the left hand-side 
4. Below the 'Source' label clicked the 'Branch' drop down menu and selected master branch.
5. After a few moments the [link](https://edwardgurney.github.io/football-quiz/) to the site was published.

## **Credits**

* Media 
   - The main font used was from Google Fonts and is called Roboto

* Images
   - The background image used for small screens and mobile phones was from unsplash from a photographer called Timothy Tan: https://unsplash.com/photos/PAe2UhGo-S4

   - The background picture for larger screens was from an account called pixabay: https://www.pexels.com/photo/action-ball-field-game-274506/

   - The favicom was taken from [iconarchive.com]("https://www.iconarchive.com/show/sport-icons-by-martin-berube/Soccer-icon.html")

* Assistance for the timer with Ania Kubow: [Ania Kubow](https://www.youtube.com/channel/UC5DNytAJ6_FISueUfzZCVsw)

* Web Dev Simplified tutorial on making a quiz: [Web Dev Simplified](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)

* James Q Quirks tutorial was helpful in building a quiz app: [YouTube - Jame Q](https://www.youtube.com/channel/UC-T8W79DN6PBnzomelvqJYw)

## **Acknowledgements**

   - My mentor Chris for providing me some helpful advice and feedback.
   - The tutors at Code Institute who have assisted me along the way and put up with a couple of meltdowns.
   - My pregnant wife Rebecca for being so supportive.
