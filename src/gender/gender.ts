import mfn from './mfn.json';

export function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function findPunctuation(word)
{
	for(let i = 0; i < word.length; i++)
	{
		if (!word.charAt(i).match(/[a-zA-Z]/g))
			return(i);
	}
	return (0);
}

function normalise(word) {
	word = word.toLocaleLowerCase();
	let punct = findPunctuation(word);
	if (punct)
		return (word.substring(0, punct));
	return (word);
}

function restore(word:string, returnValue:string)
{
	if (word == capitalizeFirstLetter(word))
		returnValue = capitalizeFirstLetter(returnValue);
	let punct = findPunctuation(word);
	if (punct)
	{
		let add:string = word.substring(punct, word.length)
		returnValue += add;
	}
	return (returnValue);
}

export function replaceGender(word:string)
{
	let find:string = normalise(word);
	let returnValue:string = find;

	mfn.forEach(function (value){
		if (find == value.m || find == value.f)
			returnValue = value.n;
	});
	return(restore(word, returnValue));
}
