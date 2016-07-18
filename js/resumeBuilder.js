var name = "Heather Nuffer";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
  "name": "Heather Nuffer",
  "role": "Web Developer",
  "contactInfo": "zzzuzz@gmail.com/801-919-6515",
  "pictureURL": "images/Heather.jpg",
  "welcomeMessage": "Welcome to my site!",
  "skills": ["HTML", "CSS", "JavaScript", "Python", "R", "technical writing",
    "art", "sewing", "music", "teaching"],
};

$("#main").append("Hello! I am " + bio.name + ", " + bio.role + ".");
$("#main").append(" " + bio.welcomeMessage + "<br>");

$("#main").append("<img src='images/Heather.jpg' alt='Heather Nuffer picture' style='float: right' width=200>");
$("#main").append("My skills include: <br>");

for (var i=0; i<bio.skills.length; i++) {
  $("#main").append(bio.skills[i] + "<br>");
}

$("#main").append(bio.contactInfo);
