"use strict";

module.exports = {
    "required": function required(field) {
        return field + " is required.";
    },
    "unique": function unique(field) {
        return field + " must be unique.";
    },
    "invalidEmail": function invalidEmail() {
        return 'Please enter a valid E-mail Address.';
    },
    "limitLettersOrNumbers": function limitLettersOrNumbers(field) {
        return field + " must contain letters or/and  numbers.";
    },
    "limitNumbers": function limitNumbers(field) {
        return field + " must contain only numbers.";
    },
    "lenghtBetween": function lenghtBetween(min, max) {
        return "Total length must be between " + min + " and " + max + " characters.";
    },
    "exists": function exists(field) {
        return field + " already exists.";
    },
    "limitDecimal": function limitDecimal(decimal) {
        return "Please enter a maximum of " + decimal + " decimal places.";
    },
    "limitMaximum": function limitMaximum(number) {
        return "Please enter less than " + number + ".";
    },
    "limitDateStartEnd": function limitDateStartEnd() {
        return 'End date can\'t be earlier than start date.';
    }
};