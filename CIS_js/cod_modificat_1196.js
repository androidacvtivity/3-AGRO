function sumCap1196_Rind010() {
    var rowIDs = [
        { id: "77632", rind: "010-1" },
        { id: "77614", rind: "010-2" },
        { id: "77696", rind: "010-3" },
        { id: "77640", rind: "010-4" },
        { id: "77601", rind: "010-5" },
        { id: "77669", rind: "010-6" },
        { id: "77657", rind: "010-7" },
        { id: "77633", rind: "010-8" },
        { id: "77602", rind: "010-9" },
        { id: "77721", rind: "010-10" },
        { id: "77670", rind: "010-11" },
        { id: "77723", rind: "010-12" },
        { id: "77727", rind: "010-13" },
        { id: "77728", rind: "010-14" },
        { id: "77729", rind: "010-15" },
        { id: "77730", rind: "010-16" },
        { id: "77731", rind: "010-17" },
        { id: "77732", rind: "010-18" },
        { id: "77733", rind: "010-19" },
        { id: "77734", rind: "010-20" },
        { id: "77740", rind: "010-21" },
        { id: "77741", rind: "010-22" },
        { id: "77742", rind: "010-23" },
        { id: "77743", rind: "010-24" },
        { id: "77744", rind: "010-25" },
        { id: "77745", rind: "010-26" },
        { id: "77746", rind: "010-27" },
        { id: "77747", rind: "010-28" },
        { id: "77748", rind: "010-29" },
        { id: "77749", rind: "010-30" },
        { id: "77750", rind: "010-31" },
        { id: "77751", rind: "010-32" },
        { id: "77752", rind: "010-33" },
        { id: "77753", rind: "010-34" },
        { id: "77754", rind: "010-35" },
        { id: "77755", rind: "010-36" },
        { id: "77756", rind: "010-37" },
        { id: "77757", rind: "010-38" },
        { id: "77758", rind: "010-39" },
        { id: "77759", rind: "010-40" },
        { id: "77760", rind: "010-41" },
        { id: "77771", rind: "010-42" },
        { id: "77772", rind: "010-43" },
        { id: "77773", rind: "010-44" },
        { id: "77774", rind: "010-45" },
        { id: "77775", rind: "010-46" },
        { id: "77776", rind: "010-47" },
        { id: "77777", rind: "010-48" },
        { id: "77778", rind: "010-49" },
        { id: "77779", rind: "010-50" },
        { id: "77782", rind: "010-51" },
        { id: "77788", rind: "010-52" },
        { id: "77787", rind: "010-53" },
        { id: "77786", rind: "010-54" },
        { id: "77785", rind: "010-55" },
        { id: "77784", rind: "010-56" },
        { id: "77783", rind: "010-57" },
        { id: "77781", rind: "010-58" },
        { id: "77780", rind: "010-59" },
        { id: "77726", rind: "010-60" }
    ];
    var sumCol1 = 0.0, sumCol2 = 0.0, sumCol3 = 0.0, sumCol4 = 0.0, sumCol5 = 0.0;

    rowIDs.forEach(function (row) {
        sumCol1 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_3").val()) || 0.0;
        sumCol2 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_4").val()) || 0.0;
        sumCol3 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_5").val()) || 0.0;
        sumCol4 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_6").val()) || 0.0;
        sumCol5 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_7").val()) || 0.0;
    });

    $("#73_1196_77597_010_3").val(sumCol1 !== 0.0 ? sumCol1.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_77597_010_4").val(sumCol2 !== 0.0 ? sumCol2.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_77597_010_5").val(sumCol3 !== 0.0 ? sumCol3.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_77597_010_6").val(sumCol4 !== 0.0 ? sumCol4.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_77597_010_7").val(sumCol5 !== 0.0 ? sumCol5.toFixed(1) : "").prop("readonly", true);
}

function sumCap1196_Rind020() {
    var rowIDs_020 = [
        { id: "77671", rind: "020-1" },
        { id: "77697", rind: "020-2" },
        { id: "77641", rind: "020-3" },
        { id: "77603", rind: "020-4" },
        { id: "77672", rind: "020-5" },
        { id: "77642", rind: "020-6" },
        { id: "77673", rind: "020-7" },
        { id: "77698", rind: "020-8" },
        { id: "77699", rind: "020-9" },
        { id: "77643", rind: "020-10" },
        { id: "77658", rind: "020-11" },
        { id: "77604", rind: "020-12" },
        { id: "77634", rind: "020-13" },
        { id: "77700", rind: "020-14" },
        { id: "77674", rind: "020-15" },
        { id: "77659", rind: "020-16" },
        { id: "77644", rind: "020-17" },
        { id: "77605", rind: "020-18" },
        { id: "77606", rind: "020-19" },
        { id: "77615", rind: "020-20" },
        { id: "77675", rind: "020-21" },
        { id: "77701", rind: "020-22" },
        { id: "77702", rind: "020-23" },
        { id: "77616", rind: "020-24" },
        { id: "77607", rind: "020-25" },
        { id: "77676", rind: "020-26" },
        { id: "77677", rind: "020-27" },
        { id: "77678", rind: "020-28" },
        { id: "77617", rind: "020-29" },
        { id: "77635", rind: "020-30" },
        { id: "77770", rind: "020-31" },
        { id: "77769", rind: "020-32" },
        { id: "77768", rind: "020-33" },
        { id: "77767", rind: "020-34" },
        { id: "77766", rind: "020-35" },
        { id: "77765", rind: "020-36" },
        { id: "77764", rind: "020-37" },
        { id: "77763", rind: "020-38" },
        { id: "77762", rind: "020-39" },
        { id: "77761", rind: "020-40" }
    ];

    var sumCol1_020 = 0.0, sumCol2_020 = 0.0, sumCol3_020 = 0.0, sumCol4_020 = 0.0, sumCol5_020 = 0.0;

    rowIDs_020.forEach(function (row) {
        sumCol1_020 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_3").val()) || 0.0;
        sumCol2_020 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_4").val()) || 0.0;
        sumCol3_020 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_5").val()) || 0.0;
        sumCol4_020 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_6").val()) || 0.0;
        sumCol5_020 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_7").val()) || 0.0;
    });

    $("#73_1196_77667_020_3").val(sumCol1_020 !== 0.0 ? sumCol1_020.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_77667_020_4").val(sumCol2_020 !== 0.0 ? sumCol2_020.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_77667_020_5").val(sumCol3_020 !== 0.0 ? sumCol3_020.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_77667_020_6").val(sumCol4_020 !== 0.0 ? sumCol4_020.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_77667_020_7").val(sumCol5_020 !== 0.0 ? sumCol5_020.toFixed(1) : "").prop("readonly", true);
}

function sumCap1196_Rind080() {
    var rowIDs_080 = [
        { id: "77597", rind: "010" },
        { id: "77667", rind: "020" },
        { id: "77656", rind: "030" },
        { id: "77598", rind: "040" },
        { id: "77714", rind: "050" },
        { id: "77639", rind: "060" },
        { id: "77599", rind: "070" }
    ];

    var sumCol2_080 = 0.0, sumCol3_080 = 0.0, sumCol4_080 = 0.0, sumCol5_080 = 0.0;

    rowIDs_080.forEach(function (row) {
        sumCol2_080 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_4").val()) || 0.0;
        sumCol3_080 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_5").val()) || 0.0;
        sumCol4_080 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_6").val()) || 0.0;
        sumCol5_080 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_7").val()) || 0.0;
    });

    $("#73_1196_77722_080_4").val(sumCol2_080 !== 0.0 ? sumCol2_080.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_77722_080_5").val(sumCol3_080 !== 0.0 ? sumCol3_080.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_77722_080_6").val(sumCol4_080 !== 0.0 ? sumCol4_080.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_77722_080_7").val(sumCol5_080 !== 0.0 ? sumCol5_080.toFixed(1) : "").prop("readonly", true);
}

function sumCap1196_Rind1000() {
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

    var sumCol4_1000 = 0.0, sumCol5_1000 = 0.0, sumCol6_1000 = 0.0, sumCol7_1000 = 0.0, sumCol8_1000 = 0.0;

    rowIDs_1000.forEach(function (row) {
        sumCol4_1000 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_4").val()) || 0.0;
        sumCol5_1000 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_5").val()) || 0.0;
        sumCol6_1000 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_6").val()) || 0.0;
        sumCol7_1000 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_7").val()) || 0.0;
        sumCol8_1000 += parseFloat($("#73_1196_" + row.id + "_" + row.rind + "_8").val()) || 0.0;
    });

    $("#73_1196_113835_1000_4").val(sumCol4_1000 !== 0.0 ? sumCol4_1000.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_113835_1000_5").val(sumCol5_1000 !== 0.0 ? sumCol5_1000.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_113835_1000_6").val(sumCol6_1000 !== 0.0 ? sumCol6_1000.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_113835_1000_7").val(sumCol7_1000 !== 0.0 ? sumCol7_1000.toFixed(1) : "").prop("readonly", true);
    $("#73_1196_113835_1000_8").val(sumCol8_1000 !== 0.0 ? sumCol8_1000.toFixed(1) : "").prop("readonly", true);
}

function f_Capitol_1196() {
    sumCap1196_Rind010();
    sumCap1196_Rind020();
    sumCap1196_Rind080();
    sumCap1196_Rind1000();
}

var from = "";
$(document).ready(function () {
    from = $("#formDenShort").val();
    f_Capitol_1196();
    $("input:not([type='button']):not([readonly]):not([disabled])").on("change", f_Capitol_1196);
    $(document).on("change", "input:not([type='button']):not([readonly]):not([disabled])", f_Capitol_1196);
});
