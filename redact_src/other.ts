/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   redact.ts                                          :+:    :+:            */
/*                                                     +:+                    */
/*   By: mstegema <mstegema@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2023/10/17 15:53:05 by mstegema      #+#    #+#                 */
/*   Updated: 2023/10/18 13:03:36 by mstegema      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

const nlp: any = require('compromise');

export function redactOther(text: string, fullName: string): string {
	let doc = nlp(text);

	const pronounMap: Record<string, string> = {
		he: 'they',
		she: 'they',
		him: 'them',
		her: 'them',
		his: 'their',
		hers: 'their',
		himself: 'themself',
		herself: 'themself',
	};

	const possesivePronounMap: Record<string, string> = {
		her: 'their',
		his: 'their',
		hers: 'their',
	};

//	Name
	doc.match(fullName).forEach((match) => {
		match.replace('Candidate');
	});

// Location
	doc.match('#Country').forEach((match) => {
		match.replace('Country');
	});
	doc.match('#City').forEach((match) => {
		match.replace('City');
	});
	doc.match('#Region').forEach((match) => {
		match.replace('Region');
	});

// Pronouns (gender)
doc.match('#Pronoun #Copula').match('was').forEach((match) => {
	match.replace('were');
});
doc.match('#Pronoun !#Noun').match('#Pronoun').forEach((match) => {
	const pronoun = match.text().toLowerCase();
	if (pronounMap[pronoun]) {
		match.replace(pronounMap[pronoun]);
	}
});
doc.match('#Pronoun #Noun').match('#Pronoun').forEach((match) => {
	const pronoun = match.text().toLowerCase();
	if (possesivePronounMap[pronoun]) {
		match.replace(possesivePronounMap[pronoun]);
	}
});
doc.match('#Pronoun #Verb').verbs().toPastTense()

// Dates
	doc.match('#Date').not('years').forEach((match) => {
		match.replace('Date');
	});

// Contact information
	doc.match('#Email').forEach((match) => {
		match.replace('***@***.***');
	});
	doc.phoneNumbers().replace('(###) ###-###')
	doc.atMentions().replace('@***')
	//linkedin yasser

	return doc.text();
}