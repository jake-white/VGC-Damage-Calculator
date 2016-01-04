var SETDEX_CUSTOM = {};
if(document.cookie != '')
	var SETDEX_CUSTOM = JSON.parse(document.cookie);

console.log(document.cookie)
var deletecustom = function()
{
	SETDEX_CUSTOM = {}
	document.cookie = JSON.stringify(SETDEX_CUSTOM);
    reloadXYScript()
}
var savecustom = function()
{
	//first, to parse it all from the PS format
	var string = document.getElementById('customMon').value
	var spreadName = document.getElementById('spreadName').value
	var lines = string.split('\n')
	var species = "";
	var item = "";
	var ability = ""
	var level = "50";
	var EVs = [0,0,0,0,0,0];
	var nature = "Serious"
	var moves = []

	/*	Pokemon Showdown Export Format
0	Nickname (Species) @ Item
1	Ability: Name
2	Level: #
3	EVs: # Stat / # Stat / # Stat
4	Serious Nature
5	IVs: # Stat
6	- Move Name
7	- Move Name
8	- Move Name
9	- Move Name
	*/
	species = lines[0].split(' ')[0].trim(); //species is always first
	if(lines[0].indexOf('@') != -1)
		item = lines[0].substring(lines[0].indexOf('@')+1).trim(); //item is always after @
	ability = lines[1].substring(lines[1].indexOf(' ')+1).trim(); //ability is always second
	level = lines[2].split(' ')[1].trim(); //level is always third
	console.log(species)
	console.log(item)
	console.log(ability)
	console.log(level)
	if(lines.length > 3){
		for(var i = 3; i < lines.length; ++i){
			if(lines[i].indexOf("EVs") != -1) //if EVs are in this line
			{
				evList = lines[i].split(':')[1].split('/'); //splitting it into a list of " # Stat "
				for(var j = 0; j < evList.length; ++j){
					evList[j] = evList[j].trim();
					evListElements = evList[j].split(' ');
					if(evListElements[1] == "HP")
						EVs[0] = parseInt(evListElements[0])
					else if(evListElements[1] == "Atk")
						EVs[1] = parseInt(evListElements[0])
					else if(evListElements[1] == "Def")
						EVs[2] = parseInt(evListElements[0])
					else if(evListElements[1] == "SpA")
						EVs[3] = parseInt(evListElements[0])
					else if(evListElements[1] == "SpD")
						EVs[4] = parseInt(evListElements[0])
					else if(evListElements[1] == "Spe")
						EVs[5] = parseInt(evListElements[0])
				}

			}
			if(lines[i].indexOf("Nature") != -1) //if nature is in this line
			{
				nature = lines[i].split(' ')[0].trim()
			}
			if(lines[i].indexOf("- ") != -1){ //if there is a move in this line
				var nextMove = lines[i].substring(lines[i].indexOf(' ') + 1).trim()
				nextMove = nextMove.replace('[', '')
				nextMove = nextMove.replace(']', '')
				moves.push(nextMove)
			}

		}
	}
	console.log(EVs)
	console.log(nature)
	console.log(moves)

	//now, to save it
	/* Sample Calculator Format:
  "Yanmega": {
    "Common Showdown": {
      "level": 50,
      "evs": {
        "hp": 0,
        "at": 0,
        "df": 0,
        "sa": 252,
        "sd": 4,
        "sp": 252
      },
      "nature": "Modest",
      "ability": "",
      "item": "",
      "moves": [
        "Air Slash",
        "Bug Buzz",
        "Giga Drain",
        "Hidden Power Ice"
      ]
    }
  }
  */

  	
  	customFormat = {
  			"level": level, 
  			"evs": {
  				"hp": EVs[0],
  				"at": EVs[1],
  				"df": EVs[2],
  				"sa": EVs[3],
  				"sd": EVs[4],
  				"sp": EVs[5],
  			},
  			"nature": nature,
  			"ability": ability,
  			"item": item,
  			"moves": moves,
  		}
  	if(SETDEX_CUSTOM[species] == null)
  		SETDEX_CUSTOM[species] = {}
  	SETDEX_CUSTOM[species][spreadName] = customFormat
    document.cookie = JSON.stringify(SETDEX_CUSTOM)
	console.log(document.cookie)
    reloadXYScript()


}