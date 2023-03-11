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

export const cellFormatter = (value, type, shorten, maxChar = 50) => {
    if (!value) return "-";

    switch (type) {
        case "string":
            return shorten ? shortenLongText(value, maxChar) : value;
        case "array":
            return value.length ? value.join(", ") : "-";
        default:
            return value;
    }
};