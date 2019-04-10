module.exports = {
    "required": (field)=>`${field} is required.`,
    "unique": (field)=>`${field} must be unique.`,
    "invalidEmail": ()=>'Please enter a valid E-mail Address.',
    "limitLettersOrNumbers": (field)=> `${field} must contain letters or/and  numbers.`,
    "limitNumbers": (field)=> `${field} must contain only numbers.`,
    "lenghtBetween": (min, max)=>`Total length must be between ${min} and ${max} characters.`,
    "exists": (field)=>`${field} already exists.`,
    "limitDecimal": (decimal)=>`Please enter a maximum of ${decimal} decimal places.`,
    "limitMaximum": (number) =>`Please enter less than ${number}.`,
    "limitDateStartEnd":()=>'End date can\'t be earlier than start date.',
};
