//get name
var name = prompt('What is your name?'); 
while(name===''){
	alert('Please fill in your name');
	var name = prompt('What is your name'); 
}

//welcome
document.write('<h2>Welcome ' + name + '!</h2>');	

//week
arrayWeekday = ['Monday', 'Tuesday'];

//result
for(i=0; i<2; i++){
document.write('<p>' + name + ' has to work on ' + arrayWeekday[i] + '</p>');
}
document.write('This week ' + name + ' has to work ' + i + ' days this week.');

