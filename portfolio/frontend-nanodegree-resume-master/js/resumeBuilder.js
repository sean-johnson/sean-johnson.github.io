//Bio
var bio = {
    "name" : "Sean Johnson",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "027 214 0011",
        "email": "hello@seanjohnson.nz",
        "github" : "sean-johnson",
        "location" : "Palmerston North, 4410, New Zealand"
    },
    "welcomeMsg" : "Hello, m'names Sean. Welcome to my resume!",
    "skills" : ["Awesomeness", " JavaScript", " HTML", "CSS", " Art History", " Archival Research"],
    "bioPic" : "images/sean-profile.jpg"
};

// Variables containing bio data
var formattedName = HTMLheaderName.replace("%data%", "Sean Johnson");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);


//append formatted bio data
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#topContacts").prepend(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedWelcomeMsg);



if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);

}

//an array of objects - for jobs
var work = {
    "jobs" : [

	    {
	        "title" : "Designer",
	        "employer" : "Blacksheepdesign",
            "location" : "Palmerston North",
	        "dates" : "2013-2015",	        
	        "description" : "Designing brands and advertising material."
	    },

	    {
	        "title" : "Freelance Designer",
	        "employer" : "Myself",
            "location" : "Palmerston North",
	        "dates" : "2011-2013",	        
	        "description" : "Doing various design projects for various clients."
	    }

    ]
};



//Displaying work using for loop function

function displayWork(){

    for(job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle

        $(".work-entry:last").append(formattedWorkEmployerTitle);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedWorkDescription);
    }
};

displayWork();

//click location logger

$(document).click(function(loc){

var x = loc.pageX;
var y = loc.pageY;

logClicks(x,y);

});

//projects

var projects = {
    "project" : [
    {
        "title" : "Portfolio Piece One: \"Life\"",
        "dates" : "2016",
        "description" : "Description goes here.",
        "project_image" : "images/portfolio-1.gif"
    },

    {
        "title" : "Portfolio Project Two: \"Life\" ",
        "dates" : "2016",
        "description" : "Description goes here.",
        "project_image" : "images/portfolio-2.gif"
    }
    ]
};

//Encapsulating projects with functions

projects.display = function() {

    for(project in projects.project){

        //format projects

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[project].project_image);

          //append projects
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);
        $(".project-entry:last").append(formattedProjectImage);

    }
};

projects.display();



var education = {

    "schools" : [
    {
        "name" : "Enspiral Dev Academy",
        "degree" : "Being cool - oh yeah",
        "dates" : "2016",
        "location" : "Wellington",
        "major" : "Web Development"
    },

    {
        "name" : "Whanganui School Of Design",
        "degree" : "Masters of Computer Graphic Design",
        "dates" : "2009-2013",
        "location" : "Whanganui",
        "major" : "Typography"
    }
    
    ]
};

//Show education function

education.display = function() {

    for(school in education.schools){


        //format education
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedSchoolMajor= HTMLschoolMajor.replace("%data%", education.schools[school].major);

        //append or prepend data
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);

    }
};

education.display();



//the Name Game

function inName(name) {
    var names = name.trim().split(" ");
    console.log(names);
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
};

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);