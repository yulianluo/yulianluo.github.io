import * as XLSX from 'xlsx/xlsx.mjs';

function convertToCSV(objArray) {
    var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
    var str = "";

    for (var i = 0; i < array.length; i++) {
        var line = "";
        for (var index in array[i]) {
            if (line != "") line += ",";

            line += array[i][index];
        }

        str += line + "\r\n";
    }

    return str;
}

function JSONToCSVConvertor(JSONData) {
    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    var CSV = '';
    var row = "";

    //This loop will extract the label from 1st index of on array
    for (var index in arrData[0]) {
        //Now convert each value to string and comma-seprated
        row += index + ',';
    }
    row = row.slice(0, -1);

    //append Label row with line break
    CSV += row + '\r\n';


    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = "";

        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
            // if (row != "") row += ",";

            // row += arrData[i][index];

            row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);

        //add a line break after each row
        CSV += row + '\r\n';
    }

    if (CSV == '') {
        alert("Invalid data");
        return;
    }

    return CSV;
}





export function exportCSVFile( items, fileTitle) {
    // if (headers) {
    //     items.unshift(headers);
    // }

    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);

    var csv = JSONToCSVConvertor(jsonObject);

    var exportedFilenmae = fileTitle + ".csv" || "coracle.csv";

    var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    if (navigator.msSaveBlob) {
        // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) {
            // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = "hidden";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}


export function exportXLSX(data) {
    console.log("ExportXLSX WOrking")
    var filename = "coracle_report.xlsx";
  
    var ws = XLSX.utils.json_to_sheet(data);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "");
    XLSX.writeFile(wb, filename);
  }

  export function exportCSV(data) {
    var filename = "coracle_report.csv";

    var ws = XLSX.utils.json_to_sheet(data);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "");
    XLSX.writeFile(wb, filename, { bookType: "csv", FS: "," });
  }