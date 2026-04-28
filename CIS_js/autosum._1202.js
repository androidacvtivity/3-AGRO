function sumCap1202_Rind2000() {
    var sumCol4 = 0.0,
        sumCol5 = 0.0,
        sumCol6 = 0.0,
        sumCol7 = 0.0,
        sumCol8 = 0.0;

    CAP1202_ROWIDS_2000.forEach(function (row) {
        sumCol4 += parseFloat($("#73_1202_" + row.id + "_" + row.rind + "_4").val()) || 0.0;
        sumCol5 += parseFloat($("#73_1202_" + row.id + "_" + row.rind + "_5").val()) || 0.0;
        sumCol6 += parseFloat($("#73_1202_" + row.id + "_" + row.rind + "_6").val()) || 0.0;
        sumCol7 += parseFloat($("#73_1202_" + row.id + "_" + row.rind + "_7").val()) || 0.0;
        sumCol8 += parseFloat($("#73_1202_" + row.id + "_" + row.rind + "_8").val()) || 0.0;
    });

    $("#73_1202_113904_2000_4").val(sumCol4 !== 0.0 ? sumCol4.toFixed(1) : "").prop("readonly", true);
    $("#73_1202_113904_2000_5").val(sumCol5 !== 0.0 ? sumCol5.toFixed(1) : "").prop("readonly", true);
    $("#73_1202_113904_2000_6").val(sumCol6 !== 0.0 ? sumCol6.toFixed(1) : "").prop("readonly", true);
    $("#73_1202_113904_2000_7").val(sumCol7 !== 0.0 ? sumCol7.toFixed(1) : "").prop("readonly", true);
    $("#73_1202_113904_2000_8").val(sumCol8 !== 0.0 ? sumCol8.toFixed(1) : "").prop("readonly", true);
}

function sumCap1202_Rind2100() {
    var sumCol4 = 0.0,
        sumCol5 = 0.0,
        sumCol6 = 0.0,
        sumCol7 = 0.0,
        sumCol8 = 0.0;

    CAP1202_ROWIDS_2100.forEach(function (row) {
        sumCol4 += parseFloat($("#73_1202_" + row.id + "_" + row.rind + "_4").val()) || 0.0;
        sumCol5 += parseFloat($("#73_1202_" + row.id + "_" + row.rind + "_5").val()) || 0.0;
        sumCol6 += parseFloat($("#73_1202_" + row.id + "_" + row.rind + "_6").val()) || 0.0;
        sumCol7 += parseFloat($("#73_1202_" + row.id + "_" + row.rind + "_7").val()) || 0.0;
        sumCol8 += parseFloat($("#73_1202_" + row.id + "_" + row.rind + "_8").val()) || 0.0;
    });

    $("#73_1202_113967_2100_4").val(sumCol4 !== 0.0 ? sumCol4.toFixed(1) : "").prop("readonly", true);
    $("#73_1202_113967_2100_5").val(sumCol5 !== 0.0 ? sumCol5.toFixed(1) : "").prop("readonly", true);
    $("#73_1202_113967_2100_6").val(sumCol6 !== 0.0 ? sumCol6.toFixed(1) : "").prop("readonly", true);
    $("#73_1202_113967_2100_7").val(sumCol7 !== 0.0 ? sumCol7.toFixed(1) : "").prop("readonly", true);
    $("#73_1202_113967_2100_8").val(sumCol8 !== 0.0 ? sumCol8.toFixed(1) : "").prop("readonly", true);
}

function sumCap1202_Rind2200() {
    var sumCol4 = 0.0,
        sumCol5 = 0.0,
        sumCol6 = 0.0,
        sumCol7 = 0.0,
        sumCol8 = 0.0;

    CAP1202_ROWIDS_2200.forEach(function (row) {
        sumCol4 += parseFloat($("#73_1202_" + row.id + "_" + row.rind + "_4").val()) || 0.0;
        sumCol5 += parseFloat($("#73_1202_" + row.id + "_" + row.rind + "_5").val()) || 0.0;
        sumCol6 += parseFloat($("#73_1202_" + row.id + "_" + row.rind + "_6").val()) || 0.0;
        sumCol7 += parseFloat($("#73_1202_" + row.id + "_" + row.rind + "_7").val()) || 0.0;
        sumCol8 += parseFloat($("#73_1202_" + row.id + "_" + row.rind + "_8").val()) || 0.0;
    });

    $("#73_1202_114028_2200_4").val(sumCol4 !== 0.0 ? sumCol4.toFixed(1) : "").prop("readonly", true);
    $("#73_1202_114028_2200_5").val(sumCol5 !== 0.0 ? sumCol5.toFixed(1) : "").prop("readonly", true);
    $("#73_1202_114028_2200_6").val(sumCol6 !== 0.0 ? sumCol6.toFixed(1) : "").prop("readonly", true);
    $("#73_1202_114028_2200_7").val(sumCol7 !== 0.0 ? sumCol7.toFixed(1) : "").prop("readonly", true);
    $("#73_1202_114028_2200_8").val(sumCol8 !== 0.0 ? sumCol8.toFixed(1) : "").prop("readonly", true);
}

function sumCap1202_Rind2300() {
    var staticRows_2300 = [
        { id: "113904", rind: "2000" },
        { id: "113967", rind: "2100" },
        { id: "114028", rind: "2200" }
    ];

    var sumCol4 = 0.0,
        sumCol5 = 0.0,
        sumCol6 = 0.0,
        sumCol7 = 0.0,
        sumCol8 = 0.0;

    staticRows_2300.forEach(function (row) {
        sumCol4 += parseFloat($("#73_1202_" + row.id + "_" + row.rind + "_4").val()) || 0.0;
        sumCol5 += parseFloat($("#73_1202_" + row.id + "_" + row.rind + "_5").val()) || 0.0;
        sumCol6 += parseFloat($("#73_1202_" + row.id + "_" + row.rind + "_6").val()) || 0.0;
        sumCol7 += parseFloat($("#73_1202_" + row.id + "_" + row.rind + "_7").val()) || 0.0;
        sumCol8 += parseFloat($("#73_1202_" + row.id + "_" + row.rind + "_8").val()) || 0.0;
    });

    $("#73_1202_114089_2300_4").val(sumCol4 !== 0.0 ? sumCol4.toFixed(1) : "").prop("readonly", true);
    $("#73_1202_114089_2300_5").val(sumCol5 !== 0.0 ? sumCol5.toFixed(1) : "").prop("readonly", true);
    $("#73_1202_114089_2300_6").val(sumCol6 !== 0.0 ? sumCol6.toFixed(1) : "").prop("readonly", true);
    $("#73_1202_114089_2300_7").val(sumCol7 !== 0.0 ? sumCol7.toFixed(1) : "").prop("readonly", true);
    $("#73_1202_114089_2300_8").val(sumCol8 !== 0.0 ? sumCol8.toFixed(1) : "").prop("readonly", true);
}

//Change autosum to integers