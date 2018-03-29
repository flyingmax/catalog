var user = {};
	user.name = "Вася";
	user.surname = "Петров";
	user.name = "Сергей";
delete user.name;
var i = 0;
for (var key in user) {
	i++;
}
alert("Всего свойств у объекта "+ i);