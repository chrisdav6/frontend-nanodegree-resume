var bio = {
	"name": "Chris Davis",
	"role": "Front End Developer",
	"contacts": {
		"mobile": "518-795-5440",
		"email": "chris.davis@gmail.com",
		"github": "chrisdav6",
		"city": "Troy, NY"
	},
	"picURL": "https://avatars0.githubusercontent.com/u/16709525?v=3&s=460",
	"welcomeMessage": "Hey Ohhh!",
	"skills": ["HTML", "CSS", "jQuery", "Javascript"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedContactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedContactCity = HTMLlocation.replace("%data%", bio.contacts.city);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picURL);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedContactMobile);
$("#topContacts").append(formattedContactEmail);
$("#topContacts").append(formattedContactGithub);
$("#topContacts").append(formattedContactCity);
$("#topContacts").append(formattedBioPic);




