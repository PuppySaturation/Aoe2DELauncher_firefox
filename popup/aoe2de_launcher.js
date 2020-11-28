/**
 * Listen for clicks on the buttons, and send the appropriate message to
 * the content script in the page.
 */

function getGameId() {
	gameIdRe = /^aoe2de:\/\/\d\/(\d+)$/
	gameid_tb = document.getElementById('gameid');
	gameid = gameid_tb.value;

	re_match = gameIdRe.exec(gameid);
	if(re_match){
		gameid = re_match[1];
		gameid_tb.value = gameid;
	}
	console.log('game id: '+gameid);
	return gameid;
}

function gotoPlayLobby() {
	gameid = getGameId();
	aoe2url = 'aoe2de://0/'+gameid;
	window.location.href = aoe2url;
}

function gotoSpectateLobby() {
	gameid = getGameId();
	aoe2url = 'aoe2de://1/'+gameid;
	window.location.href = aoe2url;
}
document.getElementById("spectate").onclick = gotoSpectateLobby;
document.getElementById("play").onclick = gotoPlayLobby;
