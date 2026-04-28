//rand 1 - 73_100_114151_1_1
//rand 2 - 73_100_114152_2_1
//rand 3 - 73_100_114153_3_1
//rand 4 - 73_100_114154_4_1
//rand 5 - 73_100_114155_5_1
//rand 6 - 73_100_114157_6_1
//rand 7 - 73_100_114156_7_1

// modifica conform id- urilor din cap 100, pentru a se putea selecta doar o singura optiune din cele 7 randuri de 
//sus sunt id noi  

// 73

if (itemId == "78_100_113031_01_1" && isChecked == true) {    // 78_100_113031_01_1 - Rind 1 
    document.getElementById("78_100_113032_02_1").checked = false; // Rind 2
    document.getElementById("78_100_113033_03_1").checked = false; // Rind 3 
    document.getElementById("78_100_113034_04_1").checked = false; // Rind 4
    document.getElementById("78_100_113035_05_1").checked = false; // Rind 5
    document.getElementById("78_100_113036_06_1").checked = false; // Rind 6
    document.getElementById("78_100_113037_07_1").checked = false; // Rind 7

}

if (itemId == "78_100_113032_02_1" && isChecked == true) {    // 78_100_113032_02_1 - Rind 2
    document.getElementById("78_100_113031_01_1").checked = false; // Rind 1
    document.getElementById("78_100_113033_03_1").checked = false; // Rind 3 
    document.getElementById("78_100_113034_04_1").checked = false; // Rind 4
    document.getElementById("78_100_113035_05_1").checked = false; // Rind 5
    document.getElementById("78_100_113036_06_1").checked = false; // Rind 6
    document.getElementById("78_100_113037_07_1").checked = false; // Rind 7

}
if (itemId == "78_100_113033_03_1" && isChecked == true) {    // 78_100_113033_03_1 - Rind 3
    document.getElementById("78_100_113031_01_1").checked = false; // Rind 1
    document.getElementById("78_100_113032_02_1").checked = false; // Rind 2                                  
    document.getElementById("78_100_113034_04_1").checked = false; // Rind 4
    document.getElementById("78_100_113035_05_1").checked = false; // Rind 5
    document.getElementById("78_100_113036_06_1").checked = false; // Rind 6
    document.getElementById("78_100_113037_07_1").checked = false; // Rind 7

}

if (itemId == "78_100_113034_04_1" && isChecked == true) {    // 78_100_113034_04_1 - Rind 4
    document.getElementById("78_100_113031_01_1").checked = false; // Rind 1
    document.getElementById("78_100_113032_02_1").checked = false; // Rind 2                                  
    document.getElementById("78_100_113033_03_1").checked = false; // Rind 3
    document.getElementById("78_100_113035_05_1").checked = false; // Rind 5
    document.getElementById("78_100_113036_06_1").checked = false; // Rind 6
    document.getElementById("78_100_113037_07_1").checked = false; // Rind 7

}
if (itemId == "78_100_113035_05_1" && isChecked == true) {    // 78_100_113035_05_1 - Rind 5
    document.getElementById("78_100_113031_01_1").checked = false; // Rind 1
    document.getElementById("78_100_113032_02_1").checked = false; // Rind 2                                  
    document.getElementById("78_100_113033_03_1").checked = false; // Rind 3
    document.getElementById("78_100_113034_04_1").checked = false; // Rind 4
    document.getElementById("78_100_113036_06_1").checked = false; // Rind 6
    document.getElementById("78_100_113037_07_1").checked = false; // Rind 7

}
if (itemId == "78_100_113036_06_1" && isChecked == true) {    // 78_100_113036_06_1 - Rind 6
    document.getElementById("78_100_113031_01_1").checked = false; // Rind 1
    document.getElementById("78_100_113032_02_1").checked = false; // Rind 2                                
    document.getElementById("78_100_113033_03_1").checked = false; // Rind 3          
    document.getElementById("78_100_113034_04_1").checked = false; // Rind 4
    document.getElementById("78_100_113035_05_1").checked = false; // Rind 5
    document.getElementById("78_100_113037_07_1").checked = false; // Rind 7

}
if (itemId == "78_100_113037_07_1" && isChecked == true) {    // 78_100_113037_07_1 - Rind 7
    document.getElementById("78_100_113031_01_1").checked = false; // Rind 1
    document.getElementById("78_100_113032_02_1").checked = false; // Rind 2                                 
    document.getElementById("78_100_113033_03_1").checked = false; // Rind 3
    document.getElementById("78_100_113034_04_1").checked = false; // Rind 4
    document.getElementById("78_100_113035_05_1").checked = false; // Rind 5
    document.getElementById("78_100_113036_06_1").checked = false; // Rind 6


}



//73 

// CAP 100 - FORM 73
// Se poate selecta doar o singură opțiune din cele 7 rânduri

var cap100Options73 = [
    "73_100_114151_1_1", // rând 1
    "73_100_114152_2_1", // rând 2
    "73_100_114153_3_1", // rând 3
    "73_100_114154_4_1", // rând 4
    "73_100_114155_5_1", // rând 5
    "73_100_114157_6_1", // rând 6
    "73_100_114156_7_1"  // rând 7
];

if (isChecked === true && cap100Options73.indexOf(itemId) !== -1) {
    cap100Options73.forEach(function (id) {
        if (id !== itemId) {
            var el = document.getElementById(id);
            if (el) {
                el.checked = false;
            }
        }
    });
}

//adauga 73_100_114158_ER_1 sa fie readonly - doar atat 


40674950