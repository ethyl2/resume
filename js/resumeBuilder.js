var name = "Heather Nuffer";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
  "name": "Heather Nuffer",
  "role": "Web Developer",
  "contactInfo": {
    "email": "zzzuzz@gmail.com",
    "cell": "801-919-6515",
    "twitter": "@ethyl2",
    "gitHub": "ethyl2"
  },
  "pictureURL": 'images/Heather.jpg',
  "welcomeMessage": "Welcome to my site!",
  "skills": ["HTML", "CSS", "JavaScript", "Python", "R", "technical writing",
    "art", "sewing", "music", "teaching"],
};

var work = {};
work.position = "music program coordinator volunteer";
work.employer = "Foothill Elementary PTA";
work.yearsWorked = "2";
work.cityOfBusiness = "Orem, UT";

var education1 = {};
education1.name = "Brigham Young University";
education1.yearsAttended = "1994-1999";
education1.schoolsCity = "Provo, UT";

var education = {
  "schools" : [
    {"name": "Brigham Young University",
      "city": "Provo, UT",
      "major": "Microbiology",
      "minor": "Chemistry",
      "graduationYear": "1999"
    },
    {"name": "Stanford University",
      "city": "Stanford, CA",
      "courseraCertificate": "Child Nutrition and Cooking 2.0",
      "year": "2013"
    },
    {"name": "The Pennsylvania State University",
      "city": "State College, PA",
      "courseraCertificate": "Introduction to Art: Concepts & Techniques",
      "year": "2013"
    },
    {"name": "The Hong Kong University of Science and Technology",
      "city": "Clear Water Bay, Hong Kong",
      "courseraCertificate" : "The Science of Gastronomy",
      "year": "2013"
    },
    {"name": "University of Toronto",
      "city": "Toronto, Ontario",
      "courseraCertificate": "Learn to Program: The Fundamentals",
      "year": "2014"
    },
    {"name": "Rice University",
      "city": "Houston, TX",
      "courseraCertificate" :["An Introduction to Interactive Programming in Python",
        "Principles of Computing"],
      "year": "2014"
    },
    {"name": "John Hopkins University",
      "city": "Baltimore, MD",
      "courseraCertificate" : ["The Data Scientist's Toolbox", "R Programming",
        "Getting and Cleaning Data", "Exploratory Data Analysis", "Reproducible Research"],
      "year": "2015"
    },
    {"name": "Udacity",
      "nanodegree": "Front-End Web Development",
      "year": "2016"
    }
  ]
}

$("#main").append("Hello! I am " + bio.name + ", " + bio.role + ".");
$("#main").append(" " + bio.welcomeMessage + "<br>");

$("#main").append("<img src=images/Heather.jpg alt='Heather Nuffer picture' style='float: right' width=200>");

$("#main").append("My skills include: <br>");

for (var i=0; i<bio.skills.length; i++) {
  $("#main").append(bio.skills[i] + "<br>");
}

$("#main").append(work["position"] + " " + education1.name + "<br>");
$("#main").append(bio.contactInfo.email + " " + bio.contactInfo.cell);
