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

function f_Capitol_1196() {
    // Execute the custom functions
    sumCap1196_Rind010();
    sumCap1196_Rind020();  // Ensures that sum for Row.020 is calculated after Row.010
    sumCap1196_Rind080();  // Ensures that sum for Row.080 is calculated after both Row.010 and Row.020
}

var from = "";
$(document).ready(function () {
    from = $("#formDenShort").val();
    f_Capitol_1196();
    $("input:not([type='button']):not([readonly]):not([disabled])").on("change", f_Capitol_1196);
    $(document).on("change", "input:not([type='button']):not([readonly]):not([disabled])", f_Capitol_1196);
});
