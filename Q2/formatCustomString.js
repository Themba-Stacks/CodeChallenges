function formateAsCustomeString(date, number){
    return padLeft(number,5) + "-" + formatDate(date);
}

function padLeft (str, max){
    str = str.toString();
    return str.length < max ? padLeft("0"+ str, str.length) : str;
}

function formatDate(date){
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = '' + d.getFullYear().toString();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join("-")
}

module.exports = formateAsCustomeString
