# BL-Quote-Bot

Bot designed to quote characters from the Borderlands Universe

## Installation

Required: node.js 8+

### Install npm dependencies

	npm install

### Edit your settings

Make a copy of the "/config/settings.json" file, and name it "bot.json"

Edit the bot.json file with your own details such as Bot Token and Prefix used to invoke commands

## Run it

	node app

## Adding new commands

/commands/

Create a new command file for your command. See help.js and example.js for basic command structure.

Edit the settings file and add your new command file to the commands portion of the settings.

**Note:** *The name you give in the bot.json file __is__ the command*
Example, in bot.json, the command for **help.js** is **help**

	"help":"help.js"

The same file may be defined multiple times to provide command aliases

	**Example:**

	"help":"help.js"
	"h":"help.js"

## Editing startup and shutdown

*/utilities/startUp.js*

This file initiates anything that needs to be built during startup

*/utilities/shutDown.js*

This file is used to close down any open connections, save caches, or garbage collect any stray data in order to ensure a graceful shutdown

Shoutout to r3volved for the framework that I used to build this bot from!
