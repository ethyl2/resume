//var name = "Heather Nuffer";
//var role = "Web Developer";

//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", role);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

var bio = {
  "name": "Heather Nuffer",
  "role": "Web Developer",
  "welcomeMessage": "Welcome to my site!",
  "bioPic": "images/Heather.jpg",
  "contacts": {
    "email": "zzzuzz@gmail.com",
    "mobile": "801-919-6515",
    "twitter": "@ethyl22000",
    "gitHub": "ethyl2",
    "location": "Lindon, UT"
  },
  "skills": ["HTML", "CSS", "JavaScript", "Python", "R", "technical writing",
    "art", "music", "teaching"]
}

var work = {
  "jobs": [
    {"title": "medical microbiology lab assistant",
      "dates": "2000-2005",
      "location": "Pleasant Grove, UT",
      "description": "Set up and analyze cell cultures and tests",
      "employer": "Richards Laboratories, Inc."
    },
    {"title": "volunteer music program coordinator",
      "dates": "2014-present",
      "location": "Orem, UT",
      "description": "Provide support and leadership for the choir, orchestra and ballroom groups",
      "employer": "Foothill Elementary PTA"
    }
  ]
}

var projects = {
  "projects": [
    {"title": "animal trading card",
      "dates": "2016",
      "description": "Uses HTML and CSS to format a trading card, according to project specifications",
      "url": "https://github.com/ethyl2/trading_card",
      "images": ["https://github.com/ethyl2/trading_card/blob/master/Yeast_Live.jpg"]
    },
    {"title": "art portfolio",
      "dates": "2016",
      "description": "Uses HTML, CSS, and Bootstrap to create a page featuring my artwork",
      "url": "https://github.com/ethyl2/art_portfolio",
      "images": ["https://github.com/ethyl2/art_portfolio/blob/master/images/seasons-tree-400.jpg",
                  "https://github.com/ethyl2/art_portfolio/blob/master/images/heart2-400.jpeg"]
    },
    {"title": "Submission for Summer of Coding Contest: Click-n-Learn",
      "dates": "2015",
      "description": "Uses JavaScript to create a grid of musical symbols. Clicking on them reveals their meanings.",
      "url": "https://www.khanacademy.org/computer-programming/many-merry-musical-symbols/4645067420729344",
      "images": ["https://drive.google.com/file/d/0BwaJuWSYZi5zNlpnMF9zM2Fid1E/view?usp=sharing"]
    },
    {"title": "Winning Submission for Summer of Coding Contest: Card Deck",
      "dates": "2015",
      "description": "Uses JavaScript to create a card game called When I Go Out West...",
      "url": "https://www.khanacademy.org/computer-programming/when-i-go-out-west/5883452214870016",
      "images": ["https://drive.google.com/file/d/0BwaJuWSYZi5zT2pRZmhoYW1XVUE/view?usp=sharing"]
    }
  ]
}

var education = {
  "schools" : [
    {"name": "Brigham Young University",
      "location": "Provo, UT",
      "majors": ["Microbiology"],
      "degree dates": ["1999"]
    }
  ],
    "online courses": [
    {"school": "Stanford University/Coursera",
      "title": "Child Nutrition and Cooking 2.0",
      "dates": "2013",
      "url": "https://www.coursera.org/learn/childnutrition"
    },
    {"school": "The Pennsylvania State University/Coursera",
      "title": "Introduction to Art: Concepts & Techniques",
      "dates": "2013",
      "url": "https://www.coursera.org/"
    },
    {"school": "The Hong Kong University of Science and Technology/Coursera",
      "title" : "The Science of Gastronomy",
      "dates": "2013",
      "url": "https://www.coursera.org/learn/gastronomy"
    },
    {"school": "University of Toronto/Coursera",
      "title": "Learn to Program: The Fundamentals",
      "dates": "2014",
      "url": "https://www.coursera.org/learn/learn-to-program"
    },
    {"school": "Rice University/Coursera",
      "title" :["An Introduction to Interactive Programming in Python",
        "Principles of Computing"],
      "dates": "2014",
      "url": ["https://www.coursera.org/learn/interactive-python-1",
              "https://www.coursera.org/specializations/computer-fundamentals"]
    },
    {"school": "John Hopkins University/Coursera",
      "city": "Baltimore, MD",
      "title" : ["The Data Scientist's Toolbox", "R Programming",
        "Getting and Cleaning Data", "Exploratory Data Analysis", "Reproducible Research"],
      "dates": "2015",
      "url": "https://www.coursera.org/specializations/jhu-data-science"
    },
    {"school": "Udacity",
      "title": "Front-End Web Development Nanodegree",
      "dates": "2016",
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
}

//$("#main").append("Hello! I am " + bio.name + ", " + bio.role + ".");
//$("#main").append(" " + bio.welcomeMessage + "<br>");

//$("#main").append("<img src=images/Heather.jpg alt='Heather Nuffer picture' style='float: right' width=200>");

//$("#main").append("My skills include: <br>");

//for (var i=0; i<bio.skills.length; i++) {
//  $("#main").append(bio.skills[i] + "<br>");
//}

//$("#main").append(work["position"] + " " + education1.name + "<br>");
//$("#main").append(bio.contactInfo.email + " " + bio.contactInfo.cell);

HTMLheaderName = HTMLheaderName.replace("%data%", bio["name"]);
$("#header").append(HTMLheaderName);

if (bio["skills"].length > 0) {
  $("#header").append(HTMLskillsStart);
  for (var i=0; i < bio["skills"].length; i++) {
    var formattedSkill = HTMLskills.replace("%data%", bio["skills"][i]);
    $("#skills").append(formattedSkill);
  }
}

var displayWork = function(){
  for (var job in work["jobs"]) {
    if (work["jobs"].hasOwnProperty(job)) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work["jobs"][job]["employer"]);
      var formattedJobTitle = HTMLworkTitle.replace("%data%", work["jobs"][job]["title"]);
      var formattedDates = HTMLworkDates.replace("%data%", work["jobs"][job]["dates"]);
      var formattedDescription = HTMLworkDescription.replace("%data%", work["jobs"][job]["description"]);
      $(".work-entry:last").append(formattedEmployer + formattedJobTitle);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedDescription);
    }
  }
}

displayWork();

$("#main").append(internationalizeButton);

function inName() {
  var nameArray = bio["name"].trim().split(" ");
  nameArray[0] = nameArray[0][0].toUpperCase() + nameArray[0].substring(1).toLowerCase();
  nameArray[1] = nameArray[1].toUpperCase();
  return (nameArray[0] + " " + nameArray[1]);
}

function locationizer(work_obj) {
    var locationArray = [];
    for (var i = 0; i < work_obj["jobs"].length; i++) {
        locationArray.push(work_obj["jobs"][i]["location"]);
    }
    return locationArray;
}
