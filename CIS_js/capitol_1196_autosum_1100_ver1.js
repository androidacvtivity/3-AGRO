function sumCap1196_Rind1000() {
    //Da adaugat o validare  inline - daca la id se introduce alt rand care nu corespunde randului implicita sa apara un mesaj - sub r
    //rand ca nu este corect randdul - 
    var rowIDs_1000 = [
        { id: "113799", rind: "1000-1" },
        { id: "113719", rind: "1000-2" },
        { id: "113800", rind: "1000-3" },
        { id: "113688", rind: "1000-4" },
        { id: "113770", rind: "1000-5" },
        { id: "113621", rind: "1000-6" },
        { id: "113689", rind: "1000-7" },
        { id: "113690", rind: "1000-8" },
        { id: "113691", rind: "1000-9" },
        { id: "113694", rind: "1000-10" },
        { id: "113802", rind: "1000-11" },
        { id: "113723", rind: "1000-12" },
        { id: "113667", rind: "1000-13" },
        { id: "113668", rind: "1000-14" },
        { id: "113669", rind: "1000-15" },
        { id: "113670", rind: "1000-16" },
        { id: "113695", rind: "1000-17" },
        { id: "113724", rind: "1000-18" },
        { id: "113696", rind: "1000-19" },
        { id: "113671", rind: "1000-20" },
        { id: "113644", rind: "1000-21" },
        { id: "113744", rind: "1000-22" },
        { id: "113803", rind: "1000-23" },
        { id: "113697", rind: "1000-24" },
        { id: "113625", rind: "1000-25" },
        { id: "113698", rind: "1000-26" },
        { id: "113745", rind: "1000-27" },
        { id: "113773", rind: "1000-28" },
        { id: "113645", rind: "1000-29" },
        { id: "113725", rind: "1000-30" },
        { id: "113646", rind: "1000-31" },
        { id: "113726", rind: "1000-32" },
        { id: "113746", rind: "1000-33" },
        { id: "113647", rind: "1000-34" },
        { id: "113699", rind: "1000-35" },
        { id: "113648", rind: "1000-36" },
        { id: "113747", rind: "1000-37" },
        { id: "113804", rind: "1000-38" },
        { id: "113774", rind: "1000-39" },
        { id: "113700", rind: "1000-40" },
        { id: "113649", rind: "1000-41" },
        { id: "113727", rind: "1000-42" },
        { id: "113805", rind: "1000-43" },
        { id: "113701", rind: "1000-44" },
        { id: "113728", rind: "1000-45" },
        { id: "113702", rind: "1000-46" },
        { id: "113650", rind: "1000-47" },
        { id: "113651", rind: "1000-48" },
        { id: "113626", rind: "1000-49" },
        { id: "113775", rind: "1000-50" },
        { id: "113703", rind: "1000-51" },
        { id: "113627", rind: "1000-52" },
        { id: "113748", rind: "1000-53" },
        { id: "113776", rind: "1000-54" },
        { id: "113628", rind: "1000-55" },
        { id: "113806", rind: "1000-56" },
        { id: "113629", rind: "1000-57" },
        { id: "113749", rind: "1000-58" },
        { id: "113777", rind: "1000-59" },
        { id: "113630", rind: "1000-60" }
    ];

    var sumCol4 = 0.0,
        sumCol5 = 0.0,
        sumCol6 = 0.0,
        sumCol7 = 0.0,
        sumCol8 = 0.0;

    rowIDs_1000.forEach(function (row) {
        sumCol4 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_4").val()) || 0.0;
        sumCol5 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_5").val()) || 0.0;
        sumCol6 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_6").val()) || 0.0;
        sumCol7 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_7").val()) || 0.0;
        sumCol8 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_8").val()) || 0.0;
    });

    $("#73_1196_113835_1000_4").val(sumCol4 !== 0.0 ? sumCol4.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_113835_1000_5").val(sumCol5 !== 0.0 ? sumCol5.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_113835_1000_6").val(sumCol6 !== 0.0 ? sumCol6.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_113835_1000_7").val(sumCol7 !== 0.0 ? sumCol7.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_113835_1000_8").val(sumCol8 !== 0.0 ? sumCol8.toFixed(1) : "").prop("readonly", true);
}

function sumCap1196_Rind1300() {
    var rowIDs_1300 = [
        { id: "113836", rind: "1300-1" },
        { id: "113837", rind: "1300-2" },
        { id: "113838", rind: "1300-3" },
        { id: "113839", rind: "1300-4" },
        { id: "113840", rind: "1300-5" },
        { id: "113841", rind: "1300-6" },
        { id: "113842", rind: "1300-7" },
        { id: "113843", rind: "1300-8" },
        { id: "113844", rind: "1300-9" },
        { id: "113845", rind: "1300-10" },
        { id: "113846", rind: "1300-11" },
        { id: "113847", rind: "1300-12" },
        { id: "113848", rind: "1300-13" },
        { id: "113849", rind: "1300-14" },
        { id: "113850", rind: "1300-15" },
        { id: "113851", rind: "1300-16" },
        { id: "113852", rind: "1300-17" },
        { id: "113853", rind: "1300-18" },
        { id: "113854", rind: "1300-19" },
        { id: "113855", rind: "1300-20" },
        { id: "113856", rind: "1300-21" },
        { id: "113857", rind: "1300-22" },
        { id: "113858", rind: "1300-23" },
        { id: "113859", rind: "1300-24" },
        { id: "113860", rind: "1300-25" },
        { id: "113861", rind: "1300-26" },
        { id: "113862", rind: "1300-27" },
        { id: "113863", rind: "1300-28" },
        { id: "113864", rind: "1300-29" },
        { id: "113865", rind: "1300-30" },
        { id: "113866", rind: "1300-31" },
        { id: "113867", rind: "1300-32" },
        { id: "113868", rind: "1300-33" },
        { id: "113869", rind: "1300-34" },
        { id: "113870", rind: "1300-35" },
        { id: "113871", rind: "1300-36" },
        { id: "113872", rind: "1300-37" },
        { id: "113873", rind: "1300-38" },
        { id: "113874", rind: "1300-39" },
        { id: "113875", rind: "1300-40" },
        { id: "113876", rind: "1300-41" },
        { id: "113877", rind: "1300-42" },
        { id: "113878", rind: "1300-43" },
        { id: "113879", rind: "1300-44" },
        { id: "113880", rind: "1300-45" },
        { id: "113881", rind: "1300-46" },
        { id: "113882", rind: "1300-47" },
        { id: "113883", rind: "1300-48" },
        { id: "113884", rind: "1300-49" },
        { id: "113885", rind: "1300-50" },
        { id: "113886", rind: "1300-51" },
        { id: "113887", rind: "1300-52" },
        { id: "113888", rind: "1300-53" },
        { id: "113889", rind: "1300-54" },
        { id: "113890", rind: "1300-55" },
        { id: "113891", rind: "1300-56" },
        { id: "113892", rind: "1300-57" },
        { id: "113893", rind: "1300-58" },
        { id: "113894", rind: "1300-59" },
        { id: "113895", rind: "1300-60" },
        { id: "113896", rind: "1300-61" },
        { id: "113897", rind: "1300-62" }
    ];

    var sumCol4 = 0.0,
        sumCol5 = 0.0,
        sumCol6 = 0.0,
        sumCol7 = 0.0,
        sumCol8 = 0.0;

    rowIDs_1300.forEach(function (row) {
        sumCol4 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_4").val()) || 0.0;
        sumCol5 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_5").val()) || 0.0;
        sumCol6 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_6").val()) || 0.0;
        sumCol7 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_7").val()) || 0.0;
        sumCol8 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_8").val()) || 0.0;
    });

    $("#73_1196_113768_1300_4").val(sumCol4 !== 0.0 ? sumCol4.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_113768_1300_5").val(sumCol5 !== 0.0 ? sumCol5.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_113768_1300_6").val(sumCol6 !== 0.0 ? sumCol6.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_113768_1300_7").val(sumCol7 !== 0.0 ? sumCol7.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_113768_1300_8").val(sumCol8 !== 0.0 ? sumCol8.toFixed(1) : "").prop("readonly", true);
}


function sumCap1196_Rind1100() {
    var staticRows_1100 = [
        { id: "113831", rind: "1110" },
        { id: "113832", rind: "1120" },
        { id: "113833", rind: "1130" },
        { id: "113769", rind: "1140" },
        { id: "113717", rind: "1150" },
        { id: "113641", rind: "1160" },
        { id: "113620", rind: "1170" },
        { id: "113684", rind: "1180" },
        { id: "113685", rind: "1190" },
        { id: "113834", rind: "1200" }
    ];

    var sumCol4 = 0.0,
        sumCol5 = 0.0;

    staticRows_1100.forEach(function (row) {
        sumCol4 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_4").val()) || 0.0;
        sumCol5 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_5").val()) || 0.0;
    });

    $("#73_1196_113830_1100_4").val(sumCol4 !== 0.0 ? sumCol4.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_113830_1100_5").val(sumCol5 !== 0.0 ? sumCol5.toFixed(1) : "").prop("readonly", true);
}

function sumCap1196_Rind1900() {
    var staticRows_1900 = [
        { id: "113835", rind: "1000" },
        { id: "113830", rind: "1100" },
        { id: "113768", rind: "1300" },
        { id: "113898", rind: "1400" },
        { id: "113899", rind: "1500" },
        { id: "113900", rind: "1600" },
        { id: "113901", rind: "1700" },
        { id: "113902", rind: "1800" }
    ];

    var sumCol5 = 0.0,
        sumCol6 = 0.0,
        sumCol7 = 0.0,
        sumCol8 = 0.0;

    staticRows_1900.forEach(function (row) {
        sumCol5 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_5").val()) || 0.0;
        sumCol6 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_6").val()) || 0.0;
        sumCol7 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_7").val()) || 0.0;
        sumCol8 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_8").val()) || 0.0;
    });

    $("#73_1196_113903_1900_5").val(sumCol5 !== 0.0 ? sumCol5.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_113903_1900_6").val(sumCol6 !== 0.0 ? sumCol6.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_113903_1900_7").val(sumCol7 !== 0.0 ? sumCol7.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_113903_1900_8").val(sumCol8 !== 0.0 ? sumCol8.toFixed(1) : "").prop("readonly", true);
}

function f_Capitol_1196() {
    sumCap1196_Rind1000();
    sumCap1196_Rind1300();
    sumCap1196_Rind1100();
    sumCap1196_Rind1900();
}

var from = "";
$(document).ready(function () {
    from = $("#formDenShort").val();
    f_Capitol_1196();

    $(document).on(
        "change",
        "input:not([type='button']):not([readonly]):not([disabled])",
        f_Capitol_1196
    );
});





