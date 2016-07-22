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
    "location": ["Lindon, UT", "Westland, MI", "Alexandria, VA", "Alma, MI",
                  "Woodbridge, VA", "Reston, VA", "Arlington, VA", "Annandale, VA"]
  },
  "skills": ["HTML", "CSS", "JavaScript", "Python", "R", "technical writing",
    "art", "music", "teaching"]
}

bio.display = function() {
  HTMLheaderName = HTMLheaderName.replace("%data%", bio["name"]);
  $("#header").append(HTMLheaderName);
  var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
  $("#header").append(formattedRole);

  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio["welcomeMessage"]);
  $("#header").append(formattedWelcome);

  var formattedBioPic = HTMLbioPic.replace("%data%", bio["bioPic"]);
  $("#header").append(formattedBioPic);

  if (bio["skills"].length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i=0; i < bio["skills"].length; i++) {
      var formattedSkill = HTMLskills.replace("%data%", bio["skills"][i]);
      $("#skills").append(formattedSkill);
    }
  }
}

bio.display();

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

work.displayWork = function(){
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

work.displayWork();

var projects = {
  "projects": [
    {"title": "Animal Trading Card",
      "dates": "2016",
      "description": "Uses HTML and CSS to format a trading card, according to project specifications",
      "url": "https://github.com/ethyl2/trading_card",
      "images": ["images/yeastTradingCard.png"]
    },
    {"title": "Art Portfolio",
      "dates": "2016",
      "description": "Uses HTML, CSS, and Bootstrap to create a page featuring my artwork",
      "url": "https://github.com/ethyl2/art_portfolio",
      "images": ["images/artPortfolio.png"]
    },
    {"title": "Submission for Summer of Coding Contest: Click-n-Learn",
      "dates": "2015",
      "description": "Uses JavaScript to create a grid of musical symbols. Clicking on them reveals their meanings.",
      "url": "https://www.khanacademy.org/computer-programming/many-merry-musical-symbols/4645067420729344",
      "images": ["images/musicalSymbolsProject.png"]
    },
    {"title": "Winning Submission for Summer of Coding Contest: Card Deck",
      "dates": "2015",
      "description": "Uses JavaScript to create a card game called When I Go Out West...",
      "url": "https://www.khanacademy.org/computer-programming/when-i-go-out-west/5883452214870016",
      "images": ["images/cardGameWest.png"]
    }
  ],
}

projects.display = function() {
  for (var i=0; i < projects["projects"].length; i++) {
    $("#projects:last").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects["projects"][i]["title"]);
    formattedTitle = formattedTitle.replace("#", projects["projects"][i]["url"]);
    $("#projects:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects["projects"][i]["dates"]);
    $("#projects:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects["projects"][i]["description"]);
    $("#projects:last").append(formattedDescription);

    for (var j=0; j < projects["projects"][i]["images"].length; j++) {
      var formattedImage = HTMLprojectImage.replace("%data%", projects["projects"][i]["images"][j]);
      $("#projects:last").append(formattedImage);
    }
  }
}
projects.display();

var education = {
  "schools" : [
    {"name": "Brigham Young University",
      "location": "Provo, UT",
      "majors": ["Microbiology"],
      "degree": ["Bachelor of Science"],
      "degree dates": ["1999"],
      "url": ["https://home.byu.edu/home/"]
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

education.display = function() {
  $("#education").append(HTMLschoolStart);

  var formattedSchoolName = HTMLschoolName.replace("%data%", education["schools"][0]["name"]);
  formattedSchoolName = formattedSchoolName.replace("#", education["schools"][0]["url"]);
  $("#education").append(formattedSchoolName);
  var formattedMajor = HTMLschoolDegree.replace("%data%", education["schools"][0]["majors"]);
  $("#education").append(formattedMajor);
  var formattedDegree = HTMLschoolDegree.replace("%data%", education["schools"][0]["degree"]);
  $("#education").append(formattedDegree);
  var formattedDates = HTMLschoolDegree.replace("%data%", education["schools"][0]["degree dates"]);
  $("#education").append(formattedDates);

  $("#education").append(HTMLonlineClasses);
  for (var i=0; i<education["online courses"].length; i++) {
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education["online courses"][i]["title"]);
    formattedOnlineTitle = formattedOnlineTitle.replace("#", education["online courses"][i]["url"]);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education["online courses"][i]["school"]);
    var formattedOnlineDates = HTMLonlineSchool.replace("%data%", education["online courses"][i]["dates"]);
    $("#education:last").append(formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates);
    }
}

education.display();

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

$("#mapDiv").append(googleMap);
