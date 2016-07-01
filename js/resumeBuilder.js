var formattedName = HTMLheaderName.replace("%data%", "Heather Nuffer");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedName);
$("#header").append(formattedRole);

$("#main").append("<br>");
$("#main").append("Heather Nuffer");
var awesomeThoughts;
awesomeThoughts = "I am Heather Nuffer, and I am AWESOME!";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append("<br>");
$("#main").append(funThoughts);
