Front end task documentation

Introduction
This project is a MVP (minimum viable product) for a CKO (Checkout.com) themed feedback form page.
The purpose of this project is to demonstrate and test out, how a single page comment section feels like. The user can just brows what comments and ratings other users have submitted and also give their own opinion, by filling in their name, email, rating and comment.

Since the assumable purpose of this page is to collect user information and get feedback, the structural flow of this page starts with a fillable form.
The form is easy to  grasp and minimalistic, following the basic CKO style.

Form
* Name - Since privacy is quite important to people and this is a public space, we don’t ask users to fill out their real names, they can use what ever name they prefer to leave their input.

* Email - To prevent spam and maintain credibility, a valid and unique email is required. This won’t be shown later on in the comment sections, but will remain in our database for possible future use.

* Comment - At this point, a comment is required to help us better understand why a certain rating was given. Currently there is no length cap on comments.

* Rating 1 to 5 stars - Is required by users to represent their satisfaction.

All the inputs have a custom-built error check, that highlights the input and displays error message, if there is an issue. Currently it only detects empty inputs that should be filled, but the functionality supports adding extra checks, to detect rude words in comments or fake emails.

At this point, the form does not do any extra checks to validate the information and the submit review is always clickable and doesn’t do anything. This application does not post a new dataset.

Featured comments
Next to the form section, there is a small selection of hand-picked comments from other users, to bring forth a more positive mindset and to make the users think about the positive sides that they might like.

Comment elements display the name of the user, creation date, rating and the comment. We don’t show the email publicly, to respect privacy. It can be used internally to contact users to clear out some issues or to learn more about some aspect that they brought light upon.
Every comment also gets an automatic date stamp, to rate it’s relevance, since the issues in a 10 years old comment might not be too relevant today.
The comment area also shows the rating that the user gave with stars and in numbers, to make it more accessible for people with sight difficulties who perhaps use a screenreader and to prevent any misunderstandings.

Graph
In the bottom section of the page, the user can find all the other comments with a small graph, showing the statistics about the ratings given. The graph shows percentage wise, how popular each of the star ratings are.
As a future developments, the idea is to make this graph intractable, so a user can click on 5 stars, to see all the 5 star reviews listed below.

All comments
The comments are in a single column under each other to insure that people looking at them scroll through with a more clear focus, seeing each comment on the same place with ease, instead of having to move their gaze around and potentially missing a lot of reviews.

— Technical —

This task was created with React and Typescript, using -create-react-app as a base for a quick setup and a fast prototype.
This kind of task could be approached with a more lightweight solution, but since it is a prototype, I valued the simplicity of starting the project more than building a custom setup.
Besides classNames and SCSS, no other libraries were added and all the components were custom built.

Since this is single page application, the architecture of this code is quite simplistic. The main structure of this application can be found in App.tsx, that calls in components form components folder.

Custom components created for this task were:
* CommentItem
* CommentsArea
* CommentsFeatured
* FormInput
* FormTextArea
* Graph
* Logo
* RatingDisplay
* RatingInput

Each of the components have their own sass code, to keep things clean.
There is also a variables sass file where most used font-sizes, colours  and other widely used variables can be found.
This kind of approach keeps the code easy to read, manage and test. Reusing smaller peaces reduces the amount of duplicated code, insuring that a change to a minor detail takes effect in all the places.

assets/img holds all the related image files. SVG format was used throughout this project as a standard.

The mock date created for this task can be found at Reviews.tsx

Responsiveness
Current prototype has basic responsiveness with 1 breakpoint at 1024px, to demonstrate roughly how blocks should move with a narrower screen and what sections should be removed. At this point, all the content goes to single column under 1024px and featured comments are removed to keep the screen less cluttered and simplistic.

Future developments
* Responsiveness can be improved by implementing more breakpoints and adjusting the elements accordingly.
* Mock data can be replaced with real requests.
* When we have real data in place, the submit form should validate the input information and send post it.
* The comments section should have a working filtering system, besides filtering by rating, users should be also able to filter by date.
* The comments section should have a lazy load system in place to reduce cluttering when there are more requests.
* If needed, this app should also be tested on IE.
* We should keep user sessions to prevent loss of information when something happens to their connection, so they wouldn’t lose their input information.
* The package of this project could be simplified.
* Currently there is no analytics behind this page to track metrics.


BUILD -
To begin the development, run `npm start` or `yarn start`.
To create a production bundle, use `npm run build` or `yarn build`.
