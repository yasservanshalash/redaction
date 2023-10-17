import mfn from './mfn.json';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function replace_gender(word:string)
{
	let find:string = word;
	let return_value:string = word;

	find = word.toLocaleLowerCase();
	mfn.forEach(function (value){
		if (find == value.m || find == value.f)
			return_value = value.n;
	});
	if (word == capitalizeFirstLetter(word))
		return_value = capitalizeFirstLetter(return_value);
	return (return_value);
}
