console.log('CaesarJS has loaded');
//generate
//functions which generate keys for relevant cyphers

caesar = {
	info:"Caesar JS - Encrypt, Decrypt, Analyse and Learn using Front End Technologies. To learn more about using Caesar, use the command caesar.learn Author: Luke Punnett; Version: 0.1",
	generate: {
		info:"This information about the generate functions within Caesar JS",
		key:{
			info:"use this function set to generate encryption keys. Encryptions keys provide the information to encrypt/decrypt data.",
		}
	},
	encrypt:{
		info:"Use this category of functions to encrypt data",
		caesar:{
			info:"allows you to encrypt using the Caesar Cipher. Takes 2 arguments, FIRST (INT): How many letters to shift the alphabet by, SECOND(STR): Message to be encrypted. use .example command to see an example",
			go: function(shiftVal,set){
				var testString = 'HELLO';
				var ascValues = [];
				var finalOutput = '';
				for(var i=0;i<testString.length;i++){
					ascValues.push((testString.charCodeAt(i))+shiftVal);
				}
				for(var x=0;x<ascValues.length;x++){
					finalOutput += String.fromCharCode(ascValues[x]);
				}
				return finalOutput;
			}
		}
	},
	decrypt:{
		info: "Use this category of functions to decrypt specific texts - opposite to the encrypt functions.",
	},
	analyse:{
		info:"Use this category of functions to analyse plain text / cypher text. For example frequency analysis."
	}
}
