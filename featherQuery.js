/*********************************************
***  Plug.dj Script - Feather Query
***
***  Author:       brotherband
***  Contact:      ....
***  Version:      2.3
***  Created:      5/6/16
***  Last Updated: 6/6/16
***
***
***  (c) 2016 Sennsei
***  Protected under the MIT License
*********************************************/

var userQuery = prompt("\nPlease enter the username you would like to apply the ID Lookup on!\n     + Please Note: This query is capital sensitive!\n", "Example: brotherband");
var usersOnline = API.getUsers();

for (var userList = 0; userList < usersOnline.length; userList++) {
if (usersOnline[userList].username.toUpperCase() == userQuery.toUpperCase()) {
		prompt("\n" + usersOnline[userList].username + "'s ID is:", usersOnline[userList].id);
        break;
	} else if (userList == usersOnline.length-1) {
		alert("\n" + userQuery + " is not currently in this room.\n");
	}
}
