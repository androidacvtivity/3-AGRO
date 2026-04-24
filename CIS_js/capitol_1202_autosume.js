var from = "";

function sumCap1202_Rind2000() {
    var rowIDs_2000 = [
        { id: "113905", rind: "2000-1" },
        { id: "113907", rind: "2000-1" },
        { id: "113908", rind: "2000-2" },
        { id: "113909", rind: "2000-3" },
        { id: "113910", rind: "2000-4" },
        { id: "113911", rind: "2000-5" },
        { id: "113912", rind: "2000-6" },
        { id: "113913", rind: "2000-7" },
        { id: "113914", rind: "2000-8" },
        { id: "113915", rind: "2000-9" },
        { id: "113916", rind: "2000-10" },
        { id: "113917", rind: "2000-11" },
        { id: "113918", rind: "2000-12" },
        { id: "113919", rind: "2000-13" },
        { id: "113920", rind: "2000-14" },
        { id: "113921", rind: "2000-15" },
        { id: "113922", rind: "2000-16" },
        { id: "113923", rind: "2000-17" },
        { id: "113924", rind: "2000-18" },
        { id: "113925", rind: "2000-19" },
        { id: "113926", rind: "2000-20" },
        { id: "113927", rind: "2000-21" },
        { id: "113928", rind: "2000-22" },
        { id: "113929", rind: "2000-23" },
        { id: "113930", rind: "2000-24" },
        { id: "113931", rind: "2000-25" },
        { id: "113932", rind: "2000-26" },
        { id: "113933", rind: "2000-27" },
        { id: "113934", rind: "2000-28" },
        { id: "113935", rind: "2000-29" },
        { id: "113936", rind: "2000-30" },
        { id: "113937", rind: "2000-31" },
        { id: "113938", rind: "2000-32" },
        { id: "113939", rind: "2000-33" },
        { id: "113940", rind: "2000-34" },
        { id: "113941", rind: "2000-35" },
        { id: "113942", rind: "2000-36" },
        { id: "113943", rind: "2000-37" },
        { id: "113944", rind: "2000-38" },
        { id: "113945", rind: "2000-39" },
        { id: "113946", rind: "2000-40" },
        { id: "113947", rind: "2000-41" },
        { id: "113948", rind: "2000-42" },
        { id: "113949", rind: "2000-43" },
        { id: "113950", rind: "2000-44" },
        { id: "113951", rind: "2000-45" },
        { id: "113952", rind: "2000-46" },
        { id: "113953", rind: "2000-47" },
        { id: "113954", rind: "2000-48" },
        { id: "113955", rind: "2000-49" },
        { id: "113956", rind: "2000-50" },
        { id: "113957", rind: "2000-51" },
        { id: "113958", rind: "2000-52" },
        { id: "113959", rind: "2000-53" },
        { id: "113960", rind: "2000-54" },
        { id: "113961", rind: "2000-55" },
        { id: "113962", rind: "2000-56" },
        { id: "113963", rind: "2000-57" },
        { id: "113964", rind: "2000-58" },
        { id: "113965", rind: "2000-59" },
        { id: "113966", rind: "2000-60" }
    ];

    var sumCol4 = 0.0,
        sumCol5 = 0.0,
        sumCol6 = 0.0,
        sumCol7 = 0.0,
        sumCol8 = 0.0;

    rowIDs_2000.forEach(function (row) {
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
    var rowIDs_2100 = [
        { id: "113968", rind: "2100-1" },
        { id: "113969", rind: "2100-2" },
        { id: "113970", rind: "2100-3" },
        { id: "113971", rind: "2100-4" },
        { id: "113972", rind: "2100-5" },
        { id: "113973", rind: "2100-6" },
        { id: "113974", rind: "2100-7" },
        { id: "113975", rind: "2100-8" },
        { id: "113976", rind: "2100-9" },
        { id: "113977", rind: "2100-10" },
        { id: "113978", rind: "2100-11" },
        { id: "113979", rind: "2100-12" },
        { id: "113980", rind: "2100-13" },
        { id: "113981", rind: "2100-14" },
        { id: "113982", rind: "2100-15" },
        { id: "113983", rind: "2100-16" },
        { id: "113984", rind: "2100-17" },
        { id: "113985", rind: "2100-18" },
        { id: "113986", rind: "2100-19" },
        { id: "113987", rind: "2100-20" },
        { id: "113988", rind: "2100-21" },
        { id: "113989", rind: "2100-22" },
        { id: "113990", rind: "2100-23" },
        { id: "113991", rind: "2100-24" },
        { id: "113992", rind: "2100-25" },
        { id: "113993", rind: "2100-26" },
        { id: "113994", rind: "2100-27" },
        { id: "113995", rind: "2100-28" },
        { id: "113996", rind: "2100-29" },
        { id: "113997", rind: "2100-30" },
        { id: "113998", rind: "2100-31" },
        { id: "113999", rind: "2100-32" },
        { id: "114000", rind: "2100-33" },
        { id: "114001", rind: "2100-34" },
        { id: "114002", rind: "2100-35" },
        { id: "114003", rind: "2100-36" },
        { id: "114004", rind: "2100-37" },
        { id: "114005", rind: "2100-38" },
        { id: "114006", rind: "2100-39" },
        { id: "114007", rind: "2100-40" },
        { id: "114008", rind: "2100-41" },
        { id: "114009", rind: "2100-42" },
        { id: "114010", rind: "2100-43" },
        { id: "114011", rind: "2100-44" },
        { id: "114012", rind: "2100-45" },
        { id: "114013", rind: "2100-46" },
        { id: "114014", rind: "2100-47" },
        { id: "114015", rind: "2100-48" },
        { id: "114016", rind: "2100-49" },
        { id: "114017", rind: "2100-50" },
        { id: "114018", rind: "2100-51" },
        { id: "114019", rind: "2100-52" },
        { id: "114020", rind: "2100-53" },
        { id: "114021", rind: "2100-54" },
        { id: "114022", rind: "2100-55" },
        { id: "114023", rind: "2100-56" },
        { id: "114024", rind: "2100-57" },
        { id: "114025", rind: "2100-58" },
        { id: "114026", rind: "2100-59" },
        { id: "114027", rind: "2100-60" }
    ];

    var sumCol4 = 0.0,
        sumCol5 = 0.0,
        sumCol6 = 0.0,
        sumCol7 = 0.0,
        sumCol8 = 0.0;

    rowIDs_2100.forEach(function (row) {
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
    var rowIDs_2200 = [
        { id: "114029", rind: "2200-1" },
        { id: "114030", rind: "2200-2" },
        { id: "114031", rind: "2200-3" },
        { id: "114032", rind: "2200-4" },
        { id: "114033", rind: "2200-5" },
        { id: "114034", rind: "2200-6" },
        { id: "114035", rind: "2200-7" },
        { id: "114036", rind: "2200-8" },
        { id: "114037", rind: "2200-9" },
        { id: "114038", rind: "2200-10" },
        { id: "114039", rind: "2200-11" },
        { id: "114040", rind: "2200-12" },
        { id: "114041", rind: "2200-13" },
        { id: "114042", rind: "2200-14" },
        { id: "114043", rind: "2200-15" },
        { id: "114044", rind: "2200-16" },
        { id: "114045", rind: "2200-17" },
        { id: "114046", rind: "2200-18" },
        { id: "114047", rind: "2200-19" },
        { id: "114048", rind: "2200-20" },
        { id: "114049", rind: "2200-21" },
        { id: "114050", rind: "2200-22" },
        { id: "114051", rind: "2200-23" },
        { id: "114052", rind: "2200-24" },
        { id: "114053", rind: "2200-25" },
        { id: "114054", rind: "2200-26" },
        { id: "114055", rind: "2200-27" },
        { id: "114056", rind: "2200-28" },
        { id: "114057", rind: "2200-29" },
        { id: "114058", rind: "2200-30" },
        { id: "114059", rind: "2200-31" },
        { id: "114060", rind: "2200-32" },
        { id: "114061", rind: "2200-33" },
        { id: "114062", rind: "2200-34" },
        { id: "114063", rind: "2200-35" },
        { id: "114064", rind: "2200-36" },
        { id: "114065", rind: "2200-37" },
        { id: "114066", rind: "2200-38" },
        { id: "114067", rind: "2200-39" },
        { id: "114068", rind: "2200-40" },
        { id: "114069", rind: "2200-41" },
        { id: "114070", rind: "2200-42" },
        { id: "114071", rind: "2200-43" },
        { id: "114072", rind: "2200-44" },
        { id: "114073", rind: "2200-45" },
        { id: "114074", rind: "2200-46" },
        { id: "114075", rind: "2200-47" },
        { id: "114076", rind: "2200-48" },
        { id: "114077", rind: "2200-49" },
        { id: "114078", rind: "2200-50" },
        { id: "114079", rind: "2200-51" },
        { id: "114080", rind: "2200-52" },
        { id: "114081", rind: "2200-53" },
        { id: "114082", rind: "2200-54" },
        { id: "114083", rind: "2200-55" },
        { id: "114084", rind: "2200-56" },
        { id: "114085", rind: "2200-57" },
        { id: "114086", rind: "2200-58" },
        { id: "114087", rind: "2200-59" },
        { id: "114088", rind: "2200-60" }
    ];

    var sumCol4 = 0.0,
        sumCol5 = 0.0,
        sumCol6 = 0.0,
        sumCol7 = 0.0,
        sumCol8 = 0.0;

    rowIDs_2200.forEach(function (row) {
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

function f_Capitol_1202() {
    sumCap1202_Rind2000();
    sumCap1202_Rind2100();
    sumCap1202_Rind2200();
    sumCap1202_Rind2300();
}

$(document).ready(function () {
    from = $("#formDenShort").val();
    f_Capitol_1202();

    $(document).on(
        "change",
        "input:not([type='button']):not([readonly]):not([disabled])",
        f_Capitol_1202
    );
});
