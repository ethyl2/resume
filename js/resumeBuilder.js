var model = {
  bio: {
    "name": "Heather Nuffer",
    "role": "Web Developer",
    "contacts": {
      "email": "zzzuzz@gmail.com",
      "mobile": "801-919-6515",
      "twitter": "@ethyl22000",
      "github": "ethyl2",
      "location": "Lindon, UT",
      "allLocations" : ["Lindon, UT", "Westland, MI", "Alexandria, VA", "Alma, MI",
                    "Woodbridge, VA", "Reston, VA", "Arlington, VA", "Annandale, VA"],
    },
    "welcomeMessage": "Welcome to my site!",
    "skills": ["HTML", "CSS", "JavaScript", "Python", "R", "technical writing",
      "art", "music", "teaching"],
    "biopic": "images/Heather.jpg"
  },

  work: {
    "jobs": [
      {"title": "medical microbiology lab assistant",
        "dates": "2000-2005",
        "location": "Pleasant Grove, UT",
        "description": "Set up and analyze cell cultures and tests",
        "employer": "Richards Laboratories, Inc.",
        "url": "http://richardslabs.infogenix.com/"
      },
      {"title": "volunteer music program coordinator",
        "dates": "2014-present",
        "location": "Orem, UT",
        "description": "Provide support and leadership for the choir, orchestra and ballroom groups",
        "employer": "Foothill Elementary PTA",
        "url": "http://www.foothillpta.org/"
      }
    ]
  },

  projects: {
    "projects": [
      {"title": "The Pocket-Size Pest Quest",
        "dates": "2016",
        "description": "I created a Frogger-style game for the Udacity course on HTML5 canvas and \
        JavaScript object-oriented programming. I customized the game with features that include \
        an instructional modal, scoring and collectibles.",
        "url": "https://ethyl2.github.io/pest_quest/",
        "images": ["images/arcade_img.jpg"]
      },
      {"title": "Art Portfolio",
        "dates": "2016",
        "description": "Uses HTML, CSS, and Bootstrap to create a page featuring my artwork.",
        "url": "https://github.com/ethyl2/art_portfolio",
        "images": ["images/artPortfolio.png"]
      },
      {"title": "Beanbag Chickens Tutorial",
        "dates": "2016",
        "description": "I designed and implemented \
        a photo-rich tutorial on how to sew chicken beanbags. I wrote detailed \
        text so that a beginning sewer can successfully make this project. \
        I utilized Bootstrap for a responsive design.",
        "url": "https://ethyl2.github.io/chickens-tutorial/",
        "images": ["images/chickens_tut.jpg"]
      },
      {"title": "Pentatonic Music Explorer",
        "dates": "2016",
        "description": "This site explores pentatonic scales and music with buttons. \
          It also generates songs with lyrics.",
        "url": "https://ethyl2.github.io/music-generator/",
        "images": ["images/musicPage.png"]
      }
    ],
  },

  education: {
    "schools" : [
      {"name": "Brigham Young University",
        "location": "Provo, UT",
        "majors": ["Microbiology"],
        "degree": "Bachelor of Science",
        "dates": "1999",
        "url": "https://home.byu.edu/home/"
      }
    ],
      "onlineCourses": [

      {"school": "The Pennsylvania State University/Coursera",
        "title": "Introduction to Art: Concepts & Techniques",
        "dates": "2013",
        "url": "https://www.coursera.org/"
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
};

var controller = {
  formattedHeaderName: HTMLheaderName.replace("%data%", model.bio.name),
  formattedRole: HTMLheaderRole.replace("%data%", model.bio.role),
  formattedWelcome: HTMLwelcomeMsg.replace("%data%", model.bio.welcomeMessage),
  formattedBioPic: HTMLbioPic.replace("%data%", model.bio.biopic),
  formattedSkills: function() {
    var skillsArray = [];
    for (var i=0; i < model.bio.skills.length; i++) {
      skillsArray[i] = HTMLskills.replace("%data%", model.bio.skills[i]);
    }
    return skillsArray;
  },
  formattedLocation: HTMLlocation.replace("%data%", model.bio.contacts.location),
  formattedEmail: HTMLemail.replace("%data%", model.bio.contacts.email).replace("#", "mailto:" + model.bio.contacts.email),
  formattedMobile: HTMLmobile.replace("%data%", model.bio.contacts.mobile),
  formattedGitHub: HTMLgithub.replace("%data%", model.bio.contacts.github).replace("#", "https://github.com/" + model.bio.contacts.gitHub),
  formattedTwitter: HTMLtwitter.replace("%data%", model.bio.contacts.twitter).replace("#", "https:twitter.com/" + model.bio.contacts.twitter.substring(1)),

  formattedWork: function() {
    var formattedEmployers = [];
    var formattedJobTitles = [];
    var formattedDatesArray = [];
    var formattedDescriptions = [];
    for (var i = 0; i < model.work.jobs.length; i++) {
      if (model.work.jobs.hasOwnProperty(i)) {
        formattedEmployers[i] = HTMLworkEmployer.replace("%data%", model.work.jobs[i].employer).replace("#", model.work.jobs[i].url);
        formattedJobTitles[i] = HTMLworkTitle.replace("%data%", model.work.jobs[i].title);
        formattedDatesArray[i] = HTMLworkDates.replace("%data%", model.work.jobs[i].dates);
        formattedDescriptions[i] = HTMLworkDescription.replace("%data%", model.work.jobs[i].description);
        }
    }
    return [formattedEmployers, formattedJobTitles, formattedDatesArray, formattedDescriptions];
  },
  formattedProjects: function() {
    var formattedTitles = [];
    var formattedProjectDates = [];
    var formattedDescriptions = [];
    var formattedImages = [];
    for (var i=0; i < model.projects.projects.length; i++) {
      formattedTitles[i] = HTMLprojectTitle.replace("%data%", model.projects.projects[i].title).replace("#", model.projects.projects[i].url);
      formattedProjectDates[i] = HTMLprojectDates.replace("%data%", model.projects.projects[i].dates);
      formattedDescriptions[i] = HTMLprojectDescription.replace("%data%", model.projects.projects[i].description);
      for (var j=0; j < model.projects.projects[i].images.length; j++) {
        formattedImages[i] = HTMLprojectImage.replace("%data%", model.projects.projects[i].images[j]);
      }
    }
    return [formattedTitles, formattedProjectDates, formattedDescriptions, formattedImages];
  },

  formattedSchools: function() {
    var formattedSchoolNames = [];
    var formattedMajors = [];
    var formattedDegrees = [];
    var formattedSchoolDates = [];
    for (var i = 0; i < model.education.schools.length; i++) {
      formattedSchoolNames[i] = HTMLschoolName.replace("%data%", model.education.schools[i].name).replace("#", model.education.schools[i].url);
      formattedMajors[i] = HTMLschoolDegree.replace("%data%", model.education.schools[i].majors);
      formattedDegrees[i] = HTMLschoolDegree.replace("%data%", model.education.schools[i].degree);
      formattedSchoolDates[i] = HTMLschoolDegree.replace("%data%", model.education.schools[i].dates);
    }
    return [formattedSchoolNames, formattedMajors, formattedDegrees, formattedSchoolDates];
  },

  formattedOnlineCourses: function() {
    var formattedOnlineTitles = [];
    var formattedOnlineSchools = [];
    var formattedOnlineDates = [];
    for (var i = 0; i < model.education.onlineCourses.length; i++) {
      formattedOnlineTitles[i] = HTMLonlineTitle.replace("%data%", model.education.onlineCourses[i].title).replace("#", model.education.onlineCourses[i].url);
      formattedOnlineSchools[i] = HTMLonlineSchool.replace("%data%", model.education.onlineCourses[i].school);
      formattedOnlineDates[i] = HTMLonlineSchool.replace("%data%", model.education.onlineCourses[i].dates);
      }
    return [formattedOnlineTitles, formattedOnlineSchools, formattedOnlineDates];
  }
};

var view = {
  render: function() {
    $("#header").prepend(controller.formattedHeaderName, controller.formattedRole);
    $("#header").append(controller.formattedWelcome);
    $("#header").append(controller.formattedBioPic);
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < controller.formattedSkills().length; i++) {
      $("#skills").append(controller.formattedSkills()[i]);
    };
    $("#footerContacts, #topContacts").append(controller.formattedLocation, controller.formattedEmail, controller.formattedMobile,
      controller.formattedGitHub, controller.formattedTwitter);

    for (var i = 0; i < controller.formattedWork()[0].length; i++) {
        $("#workExperience").append(HTMLworkStart);
        //$(".work-entry:last").append(formattedEmployer + formattedJobTitle);
        $(".work-entry:last").append(controller.formattedWork()[0][i] + controller.formattedWork()[1][i]);
        //$(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(controller.formattedWork()[2][i]);
        //$(".work-entry:last").append(formattedDescription);
        $(".work-entry:last").append(controller.formattedWork()[3][i]);
    }
    for (var i = 0; i < controller.formattedProjects()[0].length; i++) {
      $("#projects:last").append(HTMLprojectStart);
      $(".project-entry:last").append(controller.formattedProjects()[0][i]);
      $(".project-entry:last").append(controller.formattedProjects()[1][i]);
      $(".project-entry:last").append(controller.formattedProjects()[2][i]);
      $(".project-entry:last").append(controller.formattedProjects()[3][i]);
    }
    for (var i = 0; i < controller.formattedSchools()[0].length; i++) {
      $("#education").append(HTMLschoolStart);
      $(".education-entry").append(controller.formattedSchools()[0][i]);
      $(".education-entry").append(controller.formattedSchools()[1][i]);
      $(".education-entry").append(controller.formattedSchools()[2][i]);
      $(".education-entry").append(controller.formattedSchools()[3][i]);
    }
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < controller.formattedOnlineCourses()[0].length; i++) {
      $(".education-entry:last").append(controller.formattedOnlineCourses()[0][i], controller.formattedOnlineCourses()[1][i], controller.formattedOnlineCourses()[2][i]);
      }
  }
};

view.render();


$("#main").append(internationalizeButton);

function inName() {
  var nameArray = bio.name.trim().split(" ");
  nameArray[0] = nameArray[0][0].toUpperCase() + nameArray[0].substring(1).toLowerCase();
  nameArray[1] = nameArray[1].toUpperCase();
  return (nameArray[0] + " " + nameArray[1]);
}

function locationizer(work_obj) {
    var locationArray = [];
    for (var i = 0; i < work_obj.jobs.length; i++) {
        locationArray.push(work_obj.jobs[i].location);
    }
    return locationArray;
}


$("#mapDiv").append(googleMap);
