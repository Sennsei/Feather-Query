/****************************************************
***  Plug.dj Script - Feather Query
***
***  Author:       Sennsei (brotherband on plug.dj)
***  Contact:      real.sennsei@gmail.com
***  Version:      2.3
***  Created:      5/6/16
***  Last Updated: 6/6/16
***
***
***  Copyright (c) 2016 Sennsei
***  Protected under the MIT License
****************************************************/

var userQuery = prompt("\nPlease enter the username you would like to apply the ID Lookup on!\n     + Please Note: This query is capital sensitive!\n", "Example: brotherband");
var usersOnline = API.getUsers();

for (var userList = 0; userList < usersOnline.length; userList++) {
	if (usersOnline[userList].username.toUpperCase() == userQuery.toUpperCase()) {
		prompt("\n" + usersOnline[userList].username + "'s ID is:", usersOnline[userList].id);
        	break;
	} else if (userList == usersOnline.length-1) {
		alert("\n'" + userQuery + "' is currently not in this room.\n");
	}
}
