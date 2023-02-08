export const capitalizeFirstLetter = (text) =>
    text.replace(/^./, text[0].toUpperCase());

export const shortenLongText = (text, maxChar = 50) =>
    text
        ? text.length > maxChar
            ? text.substring(0, maxChar) + "..."
            : text
        : "-";

export const numberWithDelimeter = (val, delimeter = ".") =>
    val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimeter);