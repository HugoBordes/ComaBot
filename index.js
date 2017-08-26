// Mise en place des en tetes
const discord = require('discord.js');
const client = new discord.Client();
const token = "MzQ2OTI1NTgwNDU5MDQ4OTYw.DHS6Ng.Wthay4iV4BNKMahxQyjVPHEN_H4"
const prefix = ('+');

//lancement du bot
client.on("ready", () => {
	var servers = client.guilds.array().map(g => g.name).join(',');
	console.log ("-------------------------------------");
	console.log('[!] Connexion en cours... \n[!] Veuillez Patienté! \n[Les événements sont apres ! :) \n');
});

client.on('message', messsssage =>{
	// Mon code ici

	if(message.content.startesWith('ping')){
		message.reply("pong");
	}
	//Variable d'environnement
  let adminrole = message.guild.roles.find("name", "Anti-modo");
  let modorole = message.guild.roles.find("name", "Modo");
  const voiceConnection = message.member.voiceConnection;
  const voiceChannel = message.member.voiceChannel;

//Traitement
  

  if(message.content.startsWith(prefix +'admin')){
	  //2eme condition: vérification
	  if(message.member.roles.has(adminrole.id)){
		  //oui il a bien le role
		  message.reply('GOOD ! Tu as bien le role ;)')
	  } else {
		  //non il y a pas
		  message.reply('AH ! Tu ne l\'as pas :(');
	  }
	}
	if (message.content.startsWith(prefix)){
		client.user.setGame(message.content.substring())
		console.log('[!] SETGAME FAIS [!]'); 
	}
	
	if (message.content.startsWith(prefix + 'leave')){
		const voiceChannel = message.member.voiceChannel;
		if(!voiceChannel){
			//Il est pas co a un channel
		  message.reply("Erreur, je ne suis pas connecté a un channel");
		  // Il se deco
		}else{
		  message.reply("Déconnexion en cours ...");
		  message.member.voiceChannel.leave();
		}
	}

	if(message.content.startsWith(prefix + 'modo')){
		if(message.member.roles.has(modorole.id)){
			// Non ta pas
			message.reply('Tu es modo :)');
		} else {
			// oui ta le role
			message.reply('Tu n\'est pas modo');
		}
	}
	if(message.content.startsWith(prefix + 'play')){
		if(!voiceChannel){
			//le membre est pas sur un channel
			message.reply('Attention padawan, vous n\' êtes pas connecte a un salon vocale :( ');
		} else {
			message.reply('C\'est comme si c\'était fait')
	var URLyoutube = message.content.substr(5);
	const ytdl = require('ytdl-core');
	const streamOptions = { seek: 0, volume: 1 };
	voiceChannel.join()
	 .then(connection => {
	   const stream = ytdl(URLyoutube, { filter : 'audioonly' });
	   const dispatcher = connection.playStream(stream, streamOptions);
	 })
	 .catch(console.error);
	 
		}
	  if (message.content.startsWith('#stop')){
		  const voiceChannel = message.member.voiceChannel;
		  if(!voiceChannel){
			message.reply("Erreur, je ne suis pas connecté a un channel");
			message.member.voiceChannel.leave();
			  
		  }else{
			message.reply("Déconnexion en cours ...");
			
		  }
	  }

	} 
})

client.login(token)
