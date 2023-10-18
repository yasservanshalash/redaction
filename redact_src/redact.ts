import { replaceGender } from './gender';
import { redactContacts } from './contacts';
import { redactOther } from './other';
import { redactMaritalStatus } from './maritalStatus';
import { pluralize_verbs } from './pluralizeVerbs';

export function redact(cv:string, name:string)
{
    cv = redactContacts(cv);
    // cv = pluralize_verbs(cv);
    cv = replaceGender(cv);
	cv = redactMaritalStatus(cv);
    cv = redactOther(cv, name);
    
	return (cv);
}
