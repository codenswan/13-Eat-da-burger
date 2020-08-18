# 13-Eat-da-burger

This project was developed by [codenswan](https://github.com/codenswan).

------------------------------------------------------------

### Table of Contents
* [Description](#Description)
* [Dependencies](#Dependencies)
* [Deployed](#Deployed)
* [Usage](#Usage)
* [Questions](#Questions)

------------------------------------------------------------

## Description:
This application is a burger diary that keeps a track of burger creations you want to try and then once you have devoured a burger you can mark it accordingly. It uses a heroku server for the MySQL database, Node, Express, Handlebars and a homemade ORM. The app is organised according to the MVC design pattern. Node and MySQL queries the database and routes data in your app. Handlebars is used to generate the HTML.
    
## Dependencies:
The dependencies used by this app include:
+ express: 4.17.1
+ express-handlebars: 5.1.0
+ mysql2": 2.1.0

## Deployed
You can access the app through the link [warm-caverns-55038.herokuapp.com](https://warm-caverns-55038.herokuapp.com/)

## Usage:
Upon loading the page you are presented with 2 columns and an input text field below. The column on the left is for burgers that have not yet been eaten. The column on the right stores the devoured burgers that have an option to delete them from that list and from the database.

You can enter a new burger into the input field and hit the submit button to create a new burger. This will then be added to the database and then displayed in the uneaten burger column.

![](Screen%20Shot%202020-08-18%20at%203.56.02%20pm.png


## Questions:
If you have any further questions please contact me at [rodger.swan@gmail.com](mailto:rodger.swan@gmail.com).
