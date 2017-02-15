/*
*
* Basics of JS with the presentation of my intership company
*
*/

//get names
var firstName = prompt('What is your firstname?'); 
while(firstName === ''){
	alert('This field is required');
	firstName = prompt('What is your firstname?'); 
}

var lastName = prompt('What is your lastname?');
while(lastName === ''){
	alert('This field is required');
	lastName = prompt('What is your lastname'); 		
}

//add space
var space = ' ';

//concat names
var fullName = firstName.concat(space,lastName);

function capitalizeFirstLetter(string){
	return string.charAt(0).toUpperCase() + string.slice(1);
}

capitalizeFirstLetter(firstName);
capitalizeFirstLetter(lastName);

//welcome
	document.write('<h2>Welcome ' + fullName + '!</h2>');	

//manage workweek
var employeeObject = {
	workdayArray:[
	'Monday',
	'Wednesday',
	'Friday'
	]
};

//result
for(i = 0; i < 3; i++){
document.write('<p><strong>' + capitalizeFirstLetter(fullName) + '</strong> has to work this week on <strong>' + employeeObject.workdayArray[i] + '</strong>.</p>');
}

document.write('<p>' + capitalizeFirstLetter(fullName) + ' has to work <strong>'+ employeeObject.workdayArray.length + ' days </strong> this week.</p>');

//math

//calculates % of workdays per week
var totalWorkweek = 5;
var averageDays = employeeObject.workdayArray.length / totalWorkweek * 100;

//validate amount
if(averageDays > 100){
	document.write(capitalizeFirstLetter(fullName) + ' can\'t work more days than ' + totalWorkweek + 'days per week')
}

else
{
	document.write('This workweek <strong>' + capitalizeFirstLetter(fullName) + '</strong> works ' + averageDays + '% of this workweek.');
}