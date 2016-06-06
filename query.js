/*********************************************
***  Plug.dj Script - Username to ID Query
***
***  Author:       brotherband
***  Contact:      ....
***  Version:      1.1
***  Created:      5/6/16
***  Last Updated: 6/6/16
***
***
***  (c) 2016 Sennsei
***  Protected under the MIT License
*********************************************/

var initQuery = prompt("\nPlease enter the username you would like to apply the ID Lookup on!\n     + Please Note: This query is capital sensitive!\n", "Example: brotherband");
var userQuery = initQuery.toUpperCase();
var usersInit = API.getUsers();
var usersOnline = usersInit.toUpperCase();

for (var userList = 0; userList < usersOnline.length; userList++) {
	if (userQuery ==  null) {
		console.log('No input recieved.')
	} else if (usersOnline[userList].username == userQuery) {
		prompt("\n" + userQuery + "'s ID is:", usersOnline[userList].id);
		break;
	} else {
		alert("\n" + userQuery + " is not currently in this room.\n");
		break;
	}
}
