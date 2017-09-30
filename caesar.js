console.log('CaesarJS has loaded');
//generate
//functions which generate keys for relevant cyphers


caesar = {
	config:{
		plainText: 'Hello my name is luke',
		
	},
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
			info: "allows you to encrypt using the Caesar Cipher. Takes 2 arguments, FIRST (INT): How many letters to shift the alphabet by, SECOND(STR): Message to be encrypted. use .example command to see an example",
			go:function(shiftVal,set){
				if(set == ''){
					set = caesar.config.plainText;
					console.log('caesar has used the value stored in the plainText value of the config object.');
				}
				var setLength = set.length;
				//string to push character codes to be held in before converted into encrypted text.
				var ascValues = [];
				//string to hold result,
				var finalOutput = '';
				var pivotPoint = 122-shiftVal;
				//loop, loop through each char in string
				console.log('pivotPoint = '+pivotPoint);
				for(var i=0;i<set.length;i++){
					//TO BE DELETED FOR TEST DEVELOPMENT ONLY
					
					if(set.charCodeAt(i)<=pivotPoint && set.charCodeAt(i)!= 32){
						ascValues.push((set.charCodeAt(i))+shiftVal);
					}else if(set.charCodeAt(i)!=32){
						ascValues.push((set.charCodeAt(i))-(26-shiftVal));
					}else{
						ascValues.push(set.charCodeAt(i));
					}
				}

				for(var x=0;x<ascValues.length;x++){
					finalOutput += String.fromCharCode(ascValues[x]);
				}
				//
				console.log(ascValues);
				//return the encoded text.
				return finalOutput;
			}
		}
	},
	decrypt:{
		info: "Use this category of functions to decrypt specific texts - opposite to the encrypt functions.",
	},
	analyse:{
		info:"Use this category of functions to analyse plain text / cypher text. For example frequency analysis."
	},
	utilities:{
			// This object stores all the functions used internally within the core caesar js functions
	}
}
