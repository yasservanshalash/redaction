/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   redactAll.ts                                       :+:    :+:            */
/*                                                     +:+                    */
/*   By: mstegema <mstegema@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2023/10/17 15:53:05 by mstegema      #+#    #+#                 */
/*   Updated: 2023/10/18 15:30:00 by mstegema      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

const nlp: any = require('compromise');

function redactAll(text: string, fullName: string): string {
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

	// const maritalStatus = /(\bMarital\b|\bMarital status\b|\bmarital\b|\bmarital status\b|\bmarriage\b)[^,.:;]*[:.,;]?[^,.:;]*/gi;

//	Personal info
	doc.match(fullName).forEach((match) => {
		match.replace('Candidate');
	});
	// doc = doc.replace(maritalStatus, 'Marital status: redacted');

// Location
	doc.match('#Country').forEach((match) => {
		match.replace('Country');
	});
	doc.match('#Region').forEach((match) => {
		match.replace('Region');
	});
	doc.match('#City').forEach((match) => {
		match.replace('City');
	});
	doc.match('#Address').forEach((match) => {
		match.replace('Address');
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
	// doc.match('#Year * #Year').forEach((match) => {
	// 	match.replace('Year');
	// });

	doc.match('#Year').forEach((match) => {
		match.replace('Year');
	});

// Contact information
	doc.emails().replace('Email address');
	// doc.phoneNumbers().replace('(###) ###-###')
	// doc.atMentions().replace('@***')
	// linkedin yasser

	return doc.text();
}

const fullName = "Ram Kumar"

// Some different test strings:
// const originalText = "I can only to something to me, but he can't."
// const originalText = "I called her and we went for a coffee but she had to leave early because of her job."
// const originalText = "His car was broken. She loves her sister. They are the best. He was ok. I spoke to her earlier."
const originalText = "RAM KUMAR\nMarketing and Sales Professional\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapi-bus\ndiam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus\nsed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora\ntorquent per conubia nostra, per inceptos himenaeos.\nMasters, Business Administration Graduated, July 2010\nSymbiosis Institute of Management Studies Marks 59%\nAICTE & UGC Board Division 2\nPune, Maharashtra\nBachelor, Technology Graduated, July 2008\nDeccan College of Engineering & Technology Marks 64%\nOsmania University Board Division 1\nHyderabad, Telangana\n10+2 Graduated, July 2004\nDPS Bokaro Marks 81%\nCBSE Board Division 1\nNew Delhi, Delhi\n• Lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit.\n• Lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit.\n• Lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit.\n• Lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit.\nLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum\nsociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies Lorem\nipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis\nnatoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\nEducation\nProfessional Qualifications and Affiliations\nCareer Highlights\nAbout Me\n6 Years experience\nOctober 28, 1982\nMumbai, Maharashtra\nLinkedin.com/in/ramkumar\n+91.0000000000\nshri.babuji@shriresume.com\n• Lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit.\n• Lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit.\n• Lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit.\n• Lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit.\n• Lorem ipsum\n• Ipsum dolor\n• Nulla quis sem\n• Lorem ipsum\n• Integer nec odio\nApril 2014 – Current\nSales Manager\nSolvent Solutions Pvt Ltd\nKolkata, West Bangal\nLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum\nsociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies Lorem\nipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis\nnatoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n• Lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit.\n• Lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit.\n• Lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit.\n• Lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit.\nOctober 2011 – March 2014\nTeam Leader\nSerena Global Pvt Ltd\nGurgaon, Delhi-NCR\nLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum\nsociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies Lorem\nipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis\nnatoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n• Lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit.\n• Lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit.\n• Lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit.\n• Lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit.\nAugust 2009 – October 2011\nSales Assistant\nTamcoj Technologies\nPimpri-Pune, Maharashtra\nLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum\nsociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies Lorem\nipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis\nnatoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\nSkills\nWork Experience\n• Lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit.\n• Lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit.\n• Lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit.\n• Word 2010\n• Excel 2010\n• Power Point 2010\n• Hindi\n• English\n• Lorem ipsum dolor sit amet • Lorem ipsum dolor sit\n• Lorem ipsum dolor • Lorem ipsum\n• Lorem ipsum dolor sit\nFather’s Name: Mr. Abhijeet Kumar Marital Status: Single\nBirthday: October 28, 1982 Nationality: Indian\nGender: Male\nDeclaration\nI, Ram Kumar, hereby declare that the information contained herein is true and correct to the best of my knowledge\nand belief.\n____________________________\nRam Kumar Mumbai, Maharashtra\nMarch 1, 2015";
const newText = redactAll(originalText, fullName)
// console.log(originalText);
console.log(newText);
