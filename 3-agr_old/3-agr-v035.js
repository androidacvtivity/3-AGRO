(function ($) {
    Drupal.behaviors.arg3 = {
        attach: function (context, settings) {
            // Scrie doar numere
            jQuery("table").on(
                "keypress",
                "input.float, input.numeric",
                function (event) {
                    if (isNumberPressed(this, event) === false) {
                        event.preventDefault();
                    }
                },
            );
        },
    };

    // ══════════════════════════════════════════════════════════════════════
    //  AUTO-SUM: Actualizează rândul 1000 (Col.1–5) ca sumă a rândurilor
    //  dinamice din #CAP1 (1001–1099), la fiecare modificare de valoare.
    // ══════════════════════════════════════════════════════════════════════



    function renumeroteazaTabele() {
        const baseIndexes = {
            CAP1: 1000,
            CAP12: 1300,
            CAP2: 2000,
            CAP21: 2100,
            CAP22: 2200,
        };

        const ROWS_PER_PAGE = 50;

        Object.entries(baseIndexes).forEach(([cap, baseCount]) => {
            const tableContainer = $("#" + cap);
            if (!tableContainer.length) return;

            const activePageElement = tableContainer.find("ul.pages a.active");
            let currentPage = 1;
            if (activePageElement.length > 0) {
                const pageNum = parseInt(activePageElement.attr("page"), 10);
                if (!isNaN(pageNum) && pageNum > 0) currentPage = pageNum;
            }

            const offset = (currentPage - 1) * ROWS_PER_PAGE;
            const inputs = tableContainer.find(
                `table tbody tr:visible input.${cap}-custom-row-index`
            );
            inputs.each(function (i) {
                //numerotare a randurilor gen 1001,1002,...2001, 2002.
                //$(this).val(baseCount + offset + i + 1);

                //numerotare a randurilor gen 1000-1,1000-2,...2000-1, 2000-2.
                $(this).val(baseCount + "-" + (offset + i + 1));
            });
        });
    }

    $(document).ready(function () {
        renumeroteazaTabele();

        // Observă modificările structurale (adăugare/ștergere rânduri)
        const tablesToWatch = $(
            "#tab_cap1 tbody, #tab_cap12 tbody, #tab_cap2 tbody, #tab_cap21 tbody, #tab_cap22 tbody"
        );
        const observerBugFix = new MutationObserver(function () {
            renumeroteazaTabele();
        });
        tablesToWatch.each(function () {
            observerBugFix.observe(this, { childList: true });
        });

        // Observă modificările de valori în rândurile dinamice din #CAP1
        $(document).on(
            "input change",
            "#CAP1 table tbody tr.drow input.float, #CAP1 table tbody tr.drow input.numeric",
            function () {
            }
        );
    });

    webform.afterLoad.arg3 = function () { };

    webform.validators.arg3 = function () {
        var values = Drupal.settings.mywebform.values;

        // ── Helper: conversie sigură la număr ─────────────────────────────────
        function toFloat(val) {
            if (typeof val === "undefined" || val === null || val === "") return 0;
            var parsed = parseFloat(val);
            return isNaN(parsed) ? 0 : parsed;
        }

        // ── Helper: valoare numerică prezentă (nenulă) ─────────────────────────
        function hasValue(val) {
            if (typeof val === "undefined" || val === null || val === "") return false;
            var parsed = parseFloat(val);
            return !isNaN(parsed) && parsed !== 0;
        }

        // ── Helper: text prezent (cel puțin un caracter non-spațiu) ───────────
        function hasText(val) {
            return typeof val === "string" && val.trim().length > 0;
        }

        // ── Helper: eticheta rândului dinamic (numărul real sau fallback) ──────
        function dynRowLabel(caArr, idx, base) {
            var rn = caArr && caArr[idx];
            return (rn !== undefined && rn !== null && rn !== "") ? rn : (base + idx + 1);
        }

        // ══════════════════════════════════════════════════════════════════════
        //  Citire valori
        // ══════════════════════════════════════════════════════════════════════

        var r1000_c1 = values["CAP1_R1000_C1"];
        var r1000_c2 = values["CAP1_R1000_C2"];
        var r1000_c3 = toFloat(values["CAP1_R1000_C3"]);
        var r1000_c4 = toFloat(values["CAP1_R1000_C4"]);
        var r1000_c5 = toFloat(values["CAP1_R1000_C5"]);

        var staticRows1110to1200 = [
            { rnd: "1110", c1: values["CAP1_R1110_C1"], c2: values["CAP1_R1110_C2"] },
            { rnd: "1120", c1: values["CAP1_R1120_C1"], c2: values["CAP1_R1120_C2"] },
            { rnd: "1130", c1: values["CAP1_R1130_C1"], c2: values["CAP1_R1130_C2"] },
            { rnd: "1140", c1: values["CAP1_R1140_C1"], c2: values["CAP1_R1140_C2"] },
            { rnd: "1150", c1: values["CAP1_R1150_C1"], c2: values["CAP1_R1150_C2"] },
            { rnd: "1160", c1: values["CAP1_R1160_C1"], c2: values["CAP1_R1160_C2"] },
            { rnd: "1170", c1: values["CAP1_R1170_C1"], c2: values["CAP1_R1170_C2"] },
            { rnd: "1180", c1: values["CAP1_R1180_C1"], c2: values["CAP1_R1180_C2"] },
            { rnd: "1190", c1: values["CAP1_R1190_C1"], c2: values["CAP1_R1190_C2"] },
            { rnd: "1200", c1: values["CAP1_R1200_C1"], c2: values["CAP1_R1200_C2"] },
        ];

        var r1300_c1 = values["CAP1_R1300_C1"];
        var r1300_c2 = values["CAP1_R1300_C2"];
        var r1300_c3 = toFloat(values["CAP1_R1300_C3"]);
        var r1300_c4 = toFloat(values["CAP1_R1300_C4"]);
        var r1300_c5 = toFloat(values["CAP1_R1300_C5"]);

        var r1400_c1 = values["CAP1_R1400_C1"];
        var r1400_c2 = values["CAP1_R1400_C2"];
        var r1500_c1 = values["CAP1_R1500_C1"];
        var r1500_c2 = values["CAP1_R1500_C2"];
        var r1600_c1 = values["CAP1_R1600_C1"];
        var r1600_c2 = values["CAP1_R1600_C2"];
        var r1700_c1 = values["CAP1_R1700_C1"];
        var r1700_c2 = values["CAP1_R1700_C2"];
        var r1800_c1 = values["CAP1_R1800_C1"];

        var r1800_c2 = toFloat(values["CAP1_R1800_C2"]);
        var r1800_c3 = toFloat(values["CAP1_R1800_C3"]);
        var r1800_c4 = toFloat(values["CAP1_R1800_C4"]);
        var r1800_c5 = toFloat(values["CAP1_R1800_C5"]);

        var r1900_c2 = toFloat(values["CAP1_R1900_C2"]);
        var r1900_c3 = toFloat(values["CAP1_R1900_C3"]);
        var r1900_c4 = toFloat(values["CAP1_R1900_C4"]);
        var r1900_c5 = toFloat(values["CAP1_R1900_C5"]);

        // Rânduri dinamice #CAP1 (1001–1099)
        var dyn1_ca = values["CAP1_R_CA"] || [];
        var dyn1_cc = values["CAP1_R_CC"] || [];
        var dyn1_cd = values["CAP1_R_CD"] || [];
        var dyn1_ce = values["CAP1_R_CE"] || [];
        var dyn1_c1 = values["CAP1_R_C1"] || [];
        var dyn1_c2 = values["CAP1_R_C2"] || [];
        var dyn1_c3 = values["CAP1_R_C3"] || [];
        var dyn1_c4 = values["CAP1_R_C4"] || [];
        var dyn1_c5 = values["CAP1_R_C5"] || [];

        // Rânduri dinamice #CAP12 (1301–1399)
        var dyn12_ca = values["CAP12_R_CA"] || [];
        var dyn12_cc = values["CAP12_R_CC"] || [];
        var dyn12_cd = values["CAP12_R_CD"] || [];
        var dyn12_ce = values["CAP12_R_CE"] || [];
        var dyn12_c1 = values["CAP12_R_C1"] || [];
        var dyn12_c2 = values["CAP12_R_C2"] || [];
        var dyn12_c3 = values["CAP12_R_C3"] || [];
        var dyn12_c4 = values["CAP12_R_C4"] || [];
        var dyn12_c5 = values["CAP12_R_C5"] || [];

        // ══════════════════════════════════════════════════════════════════════
        //  REGULA 1-001: Dacă un rând are orice date completate (Col.2-5 sau
        //  coloanele text C/D/E), atunci Col.1 (Numărul entităților economice)
        //  devine obligatoriu. Rândurile complet goale sunt ignorate.
        // ══════════════════════════════════════════════════════════════════════

        // Helper: verifică dacă un rând static Cap.1 are date (altele decât Col.1)
        function staticRowHasData_c1(c2, c3, c4, c5) {
            return hasValue(c2) || hasValue(c3) || hasValue(c4) || hasValue(c5);
        }

        function applyRule1001() {
            // Rând static 1000 — obligatoriu dacă există date în Col.2-5
            if (staticRowHasData_c1(r1000_c2, r1000_c3, r1000_c4, r1000_c5) && !hasValue(r1000_c1)) {
                webform.errors.push({
                    fieldName: "CAP1_R1000_C1",
                    options: { hide_title: true },
                    msg: Drupal.t(
                        "Cod eroare 1-001: Cap.1 Rând.1000 – dacă rândul conține date, Col.1 (Numărul entităților economice) este obligatoriu.",
                        {}
                    ),
                });
            }

            // Rânduri statice 1110–1200 — obligatoriu dacă există date în Col.2
            staticRows1110to1200.forEach(function (row) {
                if (hasValue(row.c2) && !hasValue(row.c1)) {
                    webform.errors.push({
                        fieldName: "CAP1_R" + row.rnd + "_C1",
                        options: { hide_title: true },
                        msg: Drupal.t(
                            "Cod eroare 1-001: Cap.1 Rând." + row.rnd +
                            " – dacă rândul conține date, Col.1 (Numărul entităților economice) este obligatoriu.",
                            {}
                        ),
                    });
                }
            });

            // Rând static 1300
            if (staticRowHasData_c1(r1300_c2, r1300_c3, r1300_c4, r1300_c5) && !hasValue(r1300_c1)) {
                webform.errors.push({
                    fieldName: "CAP1_R1300_C1",
                    options: { hide_title: true },
                    msg: Drupal.t(
                        "Cod eroare 1-001: Cap.1 Rând.1300 – dacă rândul conține date, Col.1 (Numărul entităților economice) este obligatoriu.",
                        {}
                    ),
                });
            }

            // Rând static 1400
            if (hasValue(r1400_c2) && !hasValue(r1400_c1)) {
                webform.errors.push({
                    fieldName: "CAP1_R1400_C1",
                    options: { hide_title: true },
                    msg: Drupal.t(
                        "Cod eroare 1-001: Cap.1 Rând.1400 – dacă rândul conține date, Col.1 (Numărul entităților economice) este obligatoriu.",
                        {}
                    ),
                });
            }
            // Rânduri statice 1500, 1600, 1700, 1800 — Col.1 nu mai există în formular (câmp șters), validarea ignorată.
            // Rânduri dinamice #CAP1 — obligatoriu dacă rândul are orice dată
            for (var i = 0; i < Math.max(dyn1_c1.length, dyn1_c2.length, dyn1_cc.length, dyn1_cd.length, dyn1_ce.length); i++) {
                var dynHasData1 = hasValue(dyn1_c2[i]) || hasValue(dyn1_c3[i]) || hasValue(dyn1_c4[i]) || hasValue(dyn1_c5[i]) ||
                    hasText(dyn1_cc[i]) || hasText(dyn1_cd[i]) || hasText(dyn1_ce[i]);
                if (dynHasData1 && !hasValue(dyn1_c1[i])) {
                    webform.errors.push({
                        fieldName: "CAP1_R_C1",
                        index: i,
                        options: { hide_title: true },
                        msg: Drupal.t(
                            "Cod eroare 1-001: Cap.1 Rând." + dynRowLabel(dyn1_ca, i, 1000) +
                            " – dacă rândul conține date, Col.1 (Numărul entităților economice) este obligatoriu.",
                            {}
                        ),
                    });
                }
            }

            // Rânduri dinamice #CAP12 — obligatoriu dacă rândul are orice dată
            for (var j = 0; j < Math.max(dyn12_c1.length, dyn12_c2.length, dyn12_cc.length, dyn12_cd.length, dyn12_ce.length); j++) {
                var dynHasData12 = hasValue(dyn12_c2[j]) || hasValue(dyn12_c3[j]) || hasValue(dyn12_c4[j]) || hasValue(dyn12_c5[j]) ||
                    hasText(dyn12_cc[j]) || hasText(dyn12_cd[j]) || hasText(dyn12_ce[j]);
                if (dynHasData12 && !hasValue(dyn12_c1[j])) {
                    webform.errors.push({
                        fieldName: "CAP12_R_C1",
                        index: j,
                        options: { hide_title: true },
                        msg: Drupal.t(
                            "Cod eroare 1-001: Cap.1 Rând." + dynRowLabel(dyn12_ca, j, 1300) +
                            " – dacă rândul conține date, Col.1 (Numărul entităților economice) este obligatoriu.",
                            {}
                        ),
                    });
                }
            }
        } // end applyRule1001()

        // ══════════════════════════════════════════════════════════════════════
        //  REGULA 1-002: Dacă Col.1 este completat → Col.2 (Teren arabil)
        //  este obligatoriu.
        // ══════════════════════════════════════════════════════════════════════

        // Rând static 1000
        if (hasValue(r1000_c1) && !hasValue(r1000_c2)) {
            webform.errors.push({
                fieldName: "CAP1_R1000_C2",
                options: { hide_title: true },
                msg: Drupal.t(
                    "Cod eroare 1-002: Cap.1 Rând.1000 – dacă Col.1 este completat, Col.2 (Teren arabil) este obligatoriu.",
                    {}
                ),
            });
        }

        // Rânduri statice 1110–1200
        staticRows1110to1200.forEach(function (row) {
            if (hasValue(row.c1) && !hasValue(row.c2)) {
                webform.errors.push({
                    fieldName: "CAP1_R" + row.rnd + "_C2",
                    options: { hide_title: true },
                    msg: Drupal.t(
                        "Cod eroare 1-002: Cap.1 Rând." + row.rnd +
                        " – dacă Col.1 este completat, Col.2 (Teren arabil) este obligatoriu.",
                        {}
                    ),
                });
            }
        });

        // Rând static 1300
        if (hasValue(r1300_c1) && !hasValue(r1300_c2)) {
            webform.errors.push({
                fieldName: "CAP1_R1300_C2",
                options: { hide_title: true },
                msg: Drupal.t(
                    "Cod eroare 1-002: Cap.1 Rând.1300 – dacă Col.1 este completat, Col.2 (Teren arabil) este obligatoriu.",
                    {}
                ),
            });
        }

        // Rând static 1400
        if (hasValue(r1400_c1) && !hasValue(r1400_c2)) {
            webform.errors.push({
                fieldName: "CAP1_R1400_C2",
                options: { hide_title: true },
                msg: Drupal.t(
                    "Cod eroare 1-002: Cap.1 Rând.1400 – dacă Col.1 este completat, Col.2 (Teren arabil) este obligatoriu.",
                    {}
                ),
            });
        }

        // Rânduri dinamice #CAP1
        for (var i2 = 0; i2 < dyn1_c1.length; i2++) {
            if (hasValue(dyn1_c1[i2]) && !hasValue(dyn1_c2[i2])) {
                webform.errors.push({
                    fieldName: "CAP1_R_C2",
                    index: i2,
                    options: { hide_title: true },
                    msg: Drupal.t(
                        "Cod eroare 1-002: Cap.1 Rând." + dynRowLabel(dyn1_ca, i2, 1000) +
                        " – dacă Col.1 este completat, Col.2 (Teren arabil) este obligatoriu.",
                        {}
                    ),
                });
            }
        }

        // Rânduri dinamice #CAP12
        for (var j2 = 0; j2 < dyn12_c1.length; j2++) {
            if (hasValue(dyn12_c1[j2]) && !hasValue(dyn12_c2[j2])) {
                webform.errors.push({
                    fieldName: "CAP12_R_C2",
                    index: j2,
                    options: { hide_title: true },
                    msg: Drupal.t(
                        "Cod eroare 1-002: Cap.1 Rând." + dynRowLabel(dyn12_ca, j2, 1300) +
                        " – dacă Col.1 este completat, Col.2 (Teren arabil) este obligatoriu.",
                        {}
                    ),
                });
            }
        }

        // ══════════════════════════════════════════════════════════════════════
        //  REGULA 1-003: Col.2 ≥ Col.3 + Col.4 + Col.5
        //  Aplicabil: rânduri statice 1000, 1300, 1800, 1900
        //             + rânduri dinamice ale 1000 și 1300
        // ══════════════════════════════════════════════════════════════════════

        // Rând static 1000
        var sum1000_345 = Math.round((r1000_c3 + r1000_c4 + r1000_c5) * 100) / 100;
        if (toFloat(r1000_c2) < sum1000_345) {
            webform.errors.push({
                fieldName: "CAP1_R1000_C2",
                options: { hide_title: true },
                msg: Drupal.t(
                    "Cod eroare 1-003: Cap.1 Rând.1000 Col.2 (Teren arabil) trebuie să fie ≥ Col.3 + Col.4 + Col.5 " +
                    "(calculat: " + sum1000_345 + ", introdus: " + toFloat(r1000_c2) + ")",
                    {}
                ),
            });
        }

        // Rând static 1300
        var sum1300_345 = Math.round((r1300_c3 + r1300_c4 + r1300_c5) * 100) / 100;
        if (toFloat(r1300_c2) < sum1300_345) {
            webform.errors.push({
                fieldName: "CAP1_R1300_C2",
                options: { hide_title: true },
                msg: Drupal.t(
                    "Cod eroare 1-003: Cap.1 Rând.1300 Col.2 (Teren arabil) trebuie să fie ≥ Col.3 + Col.4 + Col.5 " +
                    "(calculat: " + sum1300_345 + ", introdus: " + toFloat(r1300_c2) + ")",
                    {}
                ),
            });
        }

        // Rând static 1800
        var sum1800_345 = Math.round((r1800_c3 + r1800_c4 + r1800_c5) * 100) / 100;
        if (r1800_c2 < sum1800_345) {
            webform.errors.push({
                fieldName: "CAP1_R1800_C2",
                options: { hide_title: true },
                msg: Drupal.t(
                    "Cod eroare 1-003: Cap.1 Rând.1800 Col.2 (Teren arabil) trebuie să fie ≥ Col.3 + Col.4 + Col.5 " +
                    "(calculat: " + sum1800_345 + ", introdus: " + r1800_c2 + ")",
                    {}
                ),
            });
        }

        // Rând static 1900
        var sum1900_345 = Math.round((r1900_c3 + r1900_c4 + r1900_c5) * 100) / 100;
        if (r1900_c2 < sum1900_345) {
            webform.errors.push({
                fieldName: "CAP1_R1900_C2",
                options: { hide_title: true },
                msg: Drupal.t(
                    "Cod eroare 1-003: Cap.1 Rând.1900 Col.2 (Teren arabil) trebuie să fie ≥ Col.3 + Col.4 + Col.5 " +
                    "(calculat: " + sum1900_345 + ", introdus: " + r1900_c2 + ")",
                    {}
                ),
            });
        }

        // Rânduri dinamice #CAP1
        for (var k = 0; k < dyn1_c2.length; k++) {
            var dynSum1_345 = Math.round(
                (toFloat(dyn1_c3[k]) + toFloat(dyn1_c4[k]) + toFloat(dyn1_c5[k])) * 100
            ) / 100;
            if (toFloat(dyn1_c2[k]) < dynSum1_345) {
                webform.errors.push({
                    fieldName: "CAP1_R_C2",
                    index: k,
                    options: { hide_title: true },
                    msg: Drupal.t(
                        "Cod eroare 1-003: Cap.1 Rând." + dynRowLabel(dyn1_ca, k, 1000) +
                        " Col.2 (Teren arabil) trebuie să fie ≥ Col.3 + Col.4 + Col.5 " +
                        "(calculat: " + dynSum1_345 + ", introdus: " + toFloat(dyn1_c2[k]) + ")",
                        {}
                    ),
                });
            }
        }

        // Rânduri dinamice #CAP12
        for (var m = 0; m < dyn12_c2.length; m++) {
            var dynSum12_345 = Math.round(
                (toFloat(dyn12_c3[m]) + toFloat(dyn12_c4[m]) + toFloat(dyn12_c5[m])) * 100
            ) / 100;
            if (toFloat(dyn12_c2[m]) < dynSum12_345) {
                webform.errors.push({
                    fieldName: "CAP12_R_C2",
                    index: m,
                    options: { hide_title: true },
                    msg: Drupal.t(
                        "Cod eroare 1-003: Cap.1 Rând." + dynRowLabel(dyn12_ca, m, 1300) +
                        " Col.2 (Teren arabil) trebuie să fie ≥ Col.3 + Col.4 + Col.5 " +
                        "(calculat: " + dynSum12_345 + ", introdus: " + toFloat(dyn12_c2[m]) + ")",
                        {}
                    ),
                });
            }
        }

        // ══════════════════════════════════════════════════════════════════════
        //  REGULA 1-004: Coloanele C, D, E (text) sunt obligatorii pe fiecare
        //  rând dinamic din #CAP1 (1001–1099).
        // ══════════════════════════════════════════════════════════════════════

        var dynTextCols = [
            // CAP1_R_CC (Col.C Cod CUIIO) exclus - câmpul este neobligatoriu.
            // CAP1_R_CD (Col.D Cod IDNO) exclus - câmpul este neobligatoriu.
            { arr: dyn1_ce, fieldName: "CAP1_R_CE", colLabel: "E (Denumirea entității economice)" },
        ];

        var dynLen = Math.max(dyn1_cc.length, dyn1_cd.length, dyn1_ce.length, dyn1_c1.length, dyn1_c2.length, 0);
        for (var n = 0; n < dynLen; n++) {
            // Validăm col. C/D/E doar dacă rândul dinamic are date
            var dynRow1HasAnyData = hasValue(dyn1_c1[n]) || hasValue(dyn1_c2[n]) || hasValue(dyn1_c3[n]) ||
                hasValue(dyn1_c4[n]) || hasValue(dyn1_c5[n]) ||
                hasText(dyn1_cc[n]) || hasText(dyn1_cd[n]) || hasText(dyn1_ce[n]);
            if (!dynRow1HasAnyData) { continue; }
            dynTextCols.forEach(function (col) {
                if (!hasText(col.arr[n])) {
                    webform.errors.push({
                        fieldName: col.fieldName,
                        index: n,
                        options: { hide_title: true },
                        msg: Drupal.t(
                            "Cod eroare 1-004: Cap.1 Rând." + dynRowLabel(dyn1_ca, n, 1000) +
                            " – Col." + col.colLabel + " este obligatorie (trebuie să conțină caractere).",
                            {}
                        ),
                    });
                }
            });
        }

        // ══════════════════════════════════════════════════════════════════════
        //  REGULA 1-004 (#CAP12): Coloanele C, D, E (text) sunt obligatorii pe
        //  fiecare rand dinamic din #CAP12 (1301-1399).
        // ══════════════════════════════════════════════════════════════════════

        var dynTextCols12 = [
            { arr: dyn12_cc, fieldName: "CAP12_R_CC", colLabel: "C (Cod CUIIO)" },
            { arr: dyn12_cd, fieldName: "CAP12_R_CD", colLabel: "D (Cod IDNO)" },
            { arr: dyn12_ce, fieldName: "CAP12_R_CE", colLabel: "E (Denumirea entitatii economice)" },
        ];

        var dynLen12 = Math.max(dyn12_cc.length, dyn12_cd.length, dyn12_ce.length, dyn12_c1.length, dyn12_c2.length, 0);
        for (var n2 = 0; n2 < dynLen12; n2++) {
            var dynRow12HasAnyData = hasValue(dyn12_c1[n2]) || hasValue(dyn12_c2[n2]) || hasValue(dyn12_c3[n2]) ||
                hasValue(dyn12_c4[n2]) || hasValue(dyn12_c5[n2]) ||
                hasText(dyn12_cc[n2]) || hasText(dyn12_cd[n2]) || hasText(dyn12_ce[n2]);
            if (!dynRow12HasAnyData) { continue; }
            dynTextCols12.forEach(function (col) {
                if (!hasText(col.arr[n2])) {
                    webform.errors.push({
                        fieldName: col.fieldName,
                        index: n2,
                        options: { hide_title: true },
                        msg: Drupal.t(
                            "Cod eroare 1-004: Cap.1 Rand." + dynRowLabel(dyn12_ca, n2, 1300) +
                            " - Col." + col.colLabel + " este obligatorie (trebuie sa contina caractere).",
                            {}
                        ),
                    });
                }
            });
        }

        // ══════════════════════════════════════════════════════════════════════
        //  CAP. 2 — Citire valori statice
        // ══════════════════════════════════════════════════════════════════════

        var r2000_c1 = values["CAP2_R2000_C1"];
        var r2000_c2 = values["CAP2_R2000_C2"];
        var r2000_c3 = values["CAP2_R2000_C3"];
        var r2000_c4 = values["CAP2_R2000_C4"];
        var r2000_c5 = values["CAP2_R2000_C5"];

        var r2100_c1 = values["CAP2_R2100_C1"];
        var r2100_c2 = values["CAP2_R2100_C2"];
        var r2100_c3 = values["CAP2_R2100_C3"];
        var r2100_c4 = values["CAP2_R2100_C4"];
        var r2100_c5 = values["CAP2_R2100_C5"];

        var r2200_c1 = values["CAP2_R2200_C1"];
        var r2200_c2 = values["CAP2_R2200_C2"];
        var r2200_c3 = values["CAP2_R2200_C3"];
        var r2200_c4 = values["CAP2_R2200_C4"];
        var r2200_c5 = values["CAP2_R2200_C5"];

        var r2300_c1 = values["CAP2_R2300_C1"];
        var r2300_c2 = values["CAP2_R2300_C2"];
        var r2300_c3 = values["CAP2_R2300_C3"];
        var r2300_c4 = values["CAP2_R2300_C4"];
        var r2300_c5 = values["CAP2_R2300_C5"];

        var r999_c1 = values["CAP2_R999_C1"];

        // Rânduri dinamice #CAP2 (2001+)
        var dyn2_ca = values["CAP2_R_CA"] || [];
        var dyn2_cc = values["CAP2_R_CC"] || [];
        var dyn2_cd = values["CAP2_R_CD"] || [];
        var dyn2_ce = values["CAP2_R_CE"] || [];
        var dyn2_c1 = values["CAP2_R_C1"] || [];
        var dyn2_c2 = values["CAP2_R_C2"] || [];
        var dyn2_c3 = values["CAP2_R_C3"] || [];
        var dyn2_c4 = values["CAP2_R_C4"] || [];
        var dyn2_c5 = values["CAP2_R_C5"] || [];

        // Rânduri dinamice #CAP21 (2101+)
        var dyn21_ca = values["CAP21_R_CA"] || [];
        var dyn21_cc = values["CAP21_R_CC"] || [];
        var dyn21_cd = values["CAP21_R_CD"] || [];
        var dyn21_ce = values["CAP21_R_CE"] || [];
        var dyn21_c1 = values["CAP21_R_C1"] || [];
        var dyn21_c2 = values["CAP21_R_C2"] || [];
        var dyn21_c3 = values["CAP21_R_C3"] || [];
        var dyn21_c4 = values["CAP21_R_C4"] || [];
        var dyn21_c5 = values["CAP21_R_C5"] || [];

        // Rânduri dinamice #CAP22 (2201+)
        var dyn22_ca = values["CAP22_R_CA"] || [];
        var dyn22_cc = values["CAP22_R_CC"] || [];
        var dyn22_cd = values["CAP22_R_CD"] || [];
        var dyn22_ce = values["CAP22_R_CE"] || [];
        var dyn22_c1 = values["CAP22_R_C1"] || [];
        var dyn22_c2 = values["CAP22_R_C2"] || [];
        var dyn22_c3 = values["CAP22_R_C3"] || [];
        var dyn22_c4 = values["CAP22_R_C4"] || [];
        var dyn22_c5 = values["CAP22_R_C5"] || [];

        // ══════════════════════════════════════════════════════════════════════
        //  Apelăm validarea 1-001 — Col.1 obligatoriu când rândul are date.
        //  Se execută întotdeauna (condiția internă verifică fiecare rând).
        // ══════════════════════════════════════════════════════════════════════
        applyRule1001();

        // ══════════════════════════════════════════════════════════════════════
        //  CAP. 2 — Validări: se aplică DOAR dacă Cap.2 conține date.
        //  Dacă niciunul din câmpurile Cap.2 nu are valoare, validările 2-001,
        //  2-002, 2-003, 2-004 sunt ignorate complet.
        // ══════════════════════════════════════════════════════════════════════

        // Verificăm dacă există cel puțin o valoare în Cap.2 (statice sau dinamice)
        var cap2StaticAllC1 = [r2000_c1, r2100_c1, r2200_c1, r2300_c1];
        var cap2StaticOther = [
            r2000_c2, r2000_c3, r2000_c4, r2000_c5,
            r2100_c2, r2100_c3, r2100_c4, r2100_c5,
            r2200_c2, r2200_c3, r2200_c4, r2200_c5,
            r2300_c2, r2300_c3, r2300_c4, r2300_c5,
        ];
        var allDynCap2Data = [].concat(dyn2_c1, dyn2_c2, dyn2_c3, dyn2_c4, dyn2_c5,
            dyn21_c1, dyn21_c2, dyn21_c3, dyn21_c4, dyn21_c5,
            dyn22_c1, dyn22_c2, dyn22_c3, dyn22_c4, dyn22_c5);
        var allDynCap2Text = [].concat(dyn2_cc, dyn2_cd, dyn2_ce,
            dyn21_cc, dyn21_cd, dyn21_ce,
            dyn22_cc, dyn22_cd, dyn22_ce);

        var cap2HasData = cap2StaticAllC1.some(hasValue) ||
            cap2StaticOther.some(hasValue) ||
            allDynCap2Data.some(hasValue) ||
            allDynCap2Text.some(hasText);

        // Verificăm dacă există cel puțin o valoare în Cap.1 (statice sau dinamice)
        var cap1StaticValues = [
            r1000_c1, r1000_c2, r1000_c3, r1000_c4, r1000_c5,
            r1300_c1, r1300_c2, r1300_c3, r1300_c4, r1300_c5,
            r1400_c1, r1400_c2,
            r1500_c1, r1500_c2,
            r1600_c1, r1600_c2,
            r1700_c1, r1700_c2,
            r1800_c1, r1800_c2, r1800_c3, r1800_c4, r1800_c5,
            r1900_c2, r1900_c3, r1900_c4, r1900_c5,
        ].concat(staticRows1110to1200.map(function (r) { return r.c1; }),
            staticRows1110to1200.map(function (r) { return r.c2; }));
        var allDynCap1Data = [].concat(
            dyn1_c1, dyn1_c2, dyn1_c3, dyn1_c4, dyn1_c5,
            dyn12_c1, dyn12_c2, dyn12_c3, dyn12_c4, dyn12_c5
        );
        var allDynCap1Text = [].concat(
            dyn1_cc, dyn1_cd, dyn1_ce,
            dyn12_cc, dyn12_cd, dyn12_ce
        );
        var cap1HasData = cap1StaticValues.some(hasValue) ||
            allDynCap1Data.some(hasValue) ||
            allDynCap1Text.some(hasText);

        if (cap2HasData) {

            // ══════════════════════════════════════════════════════════════════════
            //  REGULA 2-001: Col.1 (Numărul entităților economice) este obligatoriu
            //  pentru rândurile statice 2000, 2100, 2200, 2300.
            // ══════════════════════════════════════════════════════════════════════

            // ══════════════════════════════════════════════════════════════════════
            //  REGULA 2-001: Col.1 (Numărul entităților economice) este obligatoriu
            //  dacă rândul conține date (Col.2–5 completate).
            // ══════════════════════════════════════════════════════════════════════

            var staticRows2 = [
                { rnd: "2000", c1: r2000_c1, c2: r2000_c2, c3: r2000_c3, c4: r2000_c4, c5: r2000_c5, fieldName: "CAP2_R2000_C1" },
                { rnd: "2100", c1: r2100_c1, c2: r2100_c2, c3: r2100_c3, c4: r2100_c4, c5: r2100_c5, fieldName: "CAP2_R2100_C1" },
                { rnd: "2200", c1: r2200_c1, c2: r2200_c2, c3: r2200_c3, c4: r2200_c4, c5: r2200_c5, fieldName: "CAP2_R2200_C1" },
                { rnd: "2300", c1: r2300_c1, c2: r2300_c2, c3: r2300_c3, c4: r2300_c4, c5: r2300_c5, fieldName: "CAP2_R2300_C1" },
            ];

            staticRows2.forEach(function (row) {
                var rowHasData = hasValue(row.c2) || hasValue(row.c3) || hasValue(row.c4) || hasValue(row.c5);
                if (rowHasData && !hasValue(row.c1)) {
                    webform.errors.push({
                        fieldName: row.fieldName,
                        options: { hide_title: true },
                        msg: Drupal.t(
                            "Cod eroare 2-001: Cap.2 Rând." + row.rnd +
                            " – dacă rândul conține date, Col.1 (Numărul entităților economice) este obligatoriu.",
                            {}
                        ),
                    });
                }
            });

            // ══════════════════════════════════════════════════════════════════════
            //  REGULA 2-002: Dacă Col.2 sau Col.4 au valoare → Col.3 sau Col.5
            //  trebuie să aibă valoare (pentru rândurile statice 2000–2300).
            // ══════════════════════════════════════════════════════════════════════

            var staticRows2_cond = [
                { rnd: "2000", c2: r2000_c2, c3: r2000_c3, c4: r2000_c4, c5: r2000_c5, f3: "CAP2_R2000_C3", f5: "CAP2_R2000_C5" },
                { rnd: "2100", c2: r2100_c2, c3: r2100_c3, c4: r2100_c4, c5: r2100_c5, f3: "CAP2_R2100_C3", f5: "CAP2_R2100_C5" },
                { rnd: "2200", c2: r2200_c2, c3: r2200_c3, c4: r2200_c4, c5: r2200_c5, f3: "CAP2_R2200_C3", f5: "CAP2_R2200_C5" },
                { rnd: "2300", c2: r2300_c2, c3: r2300_c3, c4: r2300_c4, c5: r2300_c5, f3: "CAP2_R2300_C3", f5: "CAP2_R2300_C5" },
            ];

            staticRows2_cond.forEach(function (row) {
                if (hasValue(row.c2) && !hasValue(row.c3)) {
                    webform.errors.push({
                        fieldName: row.f3,
                        options: { hide_title: true },
                        msg: Drupal.t(
                            "Cod eroare 2-002: Cap.2 Rând." + row.rnd +
                            " – dacă Col.2 (Nr. bazine în proprietate) este completat, Col.3 (Suprafața în proprietate) este obligatorie.",
                            {}
                        ),
                    });
                }
                if (hasValue(row.c4) && !hasValue(row.c5)) {
                    webform.errors.push({
                        fieldName: row.f5,
                        options: { hide_title: true },
                        msg: Drupal.t(
                            "Cod eroare 2-002: Cap.2 Rând." + row.rnd +
                            " – dacă Col.4 (Nr. bazine în arendă) este completat, Col.5 (Suprafața în arendă) este obligatorie.",
                            {}
                        ),
                    });
                }
            });

            // ══════════════════════════════════════════════════════════════════════
            //  REGULA 2-003: Coloanele C, D, E sunt obligatorii pe fiecare rând
            //  dinamic din #CAP2 (2001+), #CAP21 (2101+), #CAP22 (2201+).
            // ══════════════════════════════════════════════════════════════════════

            // Dinamice #CAP2
            var dynTextCols2 = [
                // CAP2_R_CC (Col.C Cod CUIÎO) exclus - câmpul este neobligatoriu.
                // CAP2_R_CD (Col.D Cod IDNO) exclus - câmpul este neobligatoriu.
                { arr: dyn2_ce, fieldName: "CAP2_R_CE", colLabel: "E (Denumirea entității economice)" },
            ];
            var dynLen2 = Math.max(dyn2_cc.length, dyn2_cd.length, dyn2_ce.length, dyn2_c1.length, dyn2_c2.length, 0);
            for (var p = 0; p < dynLen2; p++) {
                var dynRow2HasData = hasValue(dyn2_c1[p]) || hasValue(dyn2_c2[p]) || hasValue(dyn2_c3[p]) ||
                    hasValue(dyn2_c4[p]) || hasValue(dyn2_c5[p]) ||
                    hasText(dyn2_cc[p]) || hasText(dyn2_cd[p]) || hasText(dyn2_ce[p]);
                if (!dynRow2HasData) { continue; }
                // 2-001 pentru rândul dinamic: Col.1 obligatoriu dacă rândul are date
                if (!hasValue(dyn2_c1[p])) {
                    webform.errors.push({
                        fieldName: "CAP2_R_C1",
                        index: p,
                        options: { hide_title: true },
                        msg: Drupal.t(
                            "Cod eroare 2-001: Cap.2 Rând." + dynRowLabel(dyn2_ca, p, 2000) +
                            " – dacă rândul conține date, Col.1 (Numărul entităților economice) este obligatoriu.",
                            {}
                        ),
                    });
                }
                dynTextCols2.forEach(function (col) {
                    if (!hasText(col.arr[p])) {
                        webform.errors.push({
                            fieldName: col.fieldName,
                            index: p,
                            options: { hide_title: true },
                            msg: Drupal.t(
                                "Cod eroare 2-003: Cap.2 Rând." + dynRowLabel(dyn2_ca, p, 2000) +
                                " – Col." + col.colLabel + " este obligatorie (trebuie să conțină caractere).",
                                {}
                            ),
                        });
                    }
                });
            }

            // Dinamice #CAP21
            var dynTextCols21 = [
                { arr: dyn21_cc, fieldName: "CAP21_R_CC", colLabel: "C (Cod CUIÎO)" },
                { arr: dyn21_cd, fieldName: "CAP21_R_CD", colLabel: "D (Cod IDNO)" },
                { arr: dyn21_ce, fieldName: "CAP21_R_CE", colLabel: "E (Denumirea entității economice)" },
            ];
            var dynLen21 = Math.max(dyn21_cc.length, dyn21_cd.length, dyn21_ce.length, dyn21_c1.length, dyn21_c2.length, 0);
            for (var p2 = 0; p2 < dynLen21; p2++) {
                var dynRow21HasData = hasValue(dyn21_c1[p2]) || hasValue(dyn21_c2[p2]) || hasValue(dyn21_c3[p2]) ||
                    hasValue(dyn21_c4[p2]) || hasValue(dyn21_c5[p2]) ||
                    hasText(dyn21_cc[p2]) || hasText(dyn21_cd[p2]) || hasText(dyn21_ce[p2]);
                if (!dynRow21HasData) { continue; }
                // 2-001 pentru rândul dinamic: Col.1 obligatoriu dacă rândul are date
                if (!hasValue(dyn21_c1[p2])) {
                    webform.errors.push({
                        fieldName: "CAP21_R_C1",
                        index: p2,
                        options: { hide_title: true },
                        msg: Drupal.t(
                            "Cod eroare 2-001: Cap.2 Rând." + dynRowLabel(dyn21_ca, p2, 2100) +
                            " – dacă rândul conține date, Col.1 (Numărul entităților economice) este obligatoriu.",
                            {}
                        ),
                    });
                }
                dynTextCols21.forEach(function (col) {
                    if (!hasText(col.arr[p2])) {
                        webform.errors.push({
                            fieldName: col.fieldName,
                            index: p2,
                            options: { hide_title: true },
                            msg: Drupal.t(
                                "Cod eroare 2-003: Cap.2 Rând." + dynRowLabel(dyn21_ca, p2, 2100) +
                                " – Col." + col.colLabel + " este obligatorie (trebuie să conțină caractere).",
                                {}
                            ),
                        });
                    }
                });
            }

            // Dinamice #CAP22
            // CAP22_R_CC (Col.C Cod CUIIO) exclus - campul a fost sters din formular, validarea ignorata.
            var dynTextCols22 = [
                { arr: dyn22_cd, fieldName: "CAP22_R_CD", colLabel: "D (Cod IDNO)" },
                { arr: dyn22_ce, fieldName: "CAP22_R_CE", colLabel: "E (Denumirea entității economice)" },
            ];
            var dynLen22 = Math.max(dyn22_cc.length, dyn22_cd.length, dyn22_ce.length, dyn22_c1.length, dyn22_c2.length, 0);
            for (var p3 = 0; p3 < dynLen22; p3++) {
                var dynRow22HasData = hasValue(dyn22_c1[p3]) || hasValue(dyn22_c2[p3]) || hasValue(dyn22_c3[p3]) ||
                    hasValue(dyn22_c4[p3]) || hasValue(dyn22_c5[p3]) ||
                    hasText(dyn22_cc[p3]) || hasText(dyn22_cd[p3]) || hasText(dyn22_ce[p3]);
                if (!dynRow22HasData) { continue; }
                // 2-001 pentru rândul dinamic: Col.1 obligatoriu dacă rândul are date
                if (!hasValue(dyn22_c1[p3])) {
                    webform.errors.push({
                        fieldName: "CAP22_R_C1",
                        index: p3,
                        options: { hide_title: true },
                        msg: Drupal.t(
                            "Cod eroare 2-001: Cap.2 Rând." + dynRowLabel(dyn22_ca, p3, 2200) +
                            " – dacă rândul conține date, Col.1 (Numărul entităților economice) este obligatoriu.",
                            {}
                        ),
                    });
                }
                dynTextCols22.forEach(function (col) {
                    if (!hasText(col.arr[p3])) {
                        webform.errors.push({
                            fieldName: col.fieldName,
                            index: p3,
                            options: { hide_title: true },
                            msg: Drupal.t(
                                "Cod eroare 2-003: Cap.2 Rând." + dynRowLabel(dyn22_ca, p3, 2200) +
                                " – Col." + col.colLabel + " este obligatorie (trebuie să conțină caractere).",
                                {}
                            ),
                        });
                    }
                });
            }

            // ══════════════════════════════════════════════════════════════════════
            //  REGULA 2-004: Dacă Col.2 sau Col.4 au valoare → Col.3 sau Col.5
            //  trebuie să aibă valoare (pentru rândurile dinamice din CAP2/21/22).
            // ══════════════════════════════════════════════════════════════════════

            // Dinamice #CAP2
            for (var q = 0; q < Math.max(dyn2_c2.length, dyn2_c4.length, 0); q++) {
                if (hasValue(dyn2_c2[q]) && !hasValue(dyn2_c3[q])) {
                    webform.errors.push({
                        fieldName: "CAP2_R_C3",
                        index: q,
                        options: { hide_title: true },
                        msg: Drupal.t(
                            "Cod eroare 2-004: Cap.2 Rând." + dynRowLabel(dyn2_ca, q, 2000) +
                            " – dacă Col.2 (Nr. bazine în proprietate) este completat, Col.3 (Suprafața în proprietate) este obligatorie.",
                            {}
                        ),
                    });
                }
                if (hasValue(dyn2_c4[q]) && !hasValue(dyn2_c5[q])) {
                    webform.errors.push({
                        fieldName: "CAP2_R_C5",
                        index: q,
                        options: { hide_title: true },
                        msg: Drupal.t(
                            "Cod eroare 2-004: Cap.2 Rând." + dynRowLabel(dyn2_ca, q, 2000) +
                            " – dacă Col.4 (Nr. bazine în arendă) este completat, Col.5 (Suprafața în arendă) este obligatorie.",
                            {}
                        ),
                    });
                }
            }

            // Dinamice #CAP21
            for (var q2 = 0; q2 < Math.max(dyn21_c2.length, dyn21_c4.length, 0); q2++) {
                if (hasValue(dyn21_c2[q2]) && !hasValue(dyn21_c3[q2])) {
                    webform.errors.push({
                        fieldName: "CAP21_R_C3",
                        index: q2,
                        options: { hide_title: true },
                        msg: Drupal.t(
                            "Cod eroare 2-004: Cap.2 Rând." + dynRowLabel(dyn21_ca, q2, 2100) +
                            " – dacă Col.2 (Nr. bazine în proprietate) este completat, Col.3 (Suprafața în proprietate) este obligatorie.",
                            {}
                        ),
                    });
                }
                if (hasValue(dyn21_c4[q2]) && !hasValue(dyn21_c5[q2])) {
                    webform.errors.push({
                        fieldName: "CAP21_R_C5",
                        index: q2,
                        options: { hide_title: true },
                        msg: Drupal.t(
                            "Cod eroare 2-004: Cap.2 Rând." + dynRowLabel(dyn21_ca, q2, 2100) +
                            " – dacă Col.4 (Nr. bazine în arendă) este completat, Col.5 (Suprafața în arendă) este obligatorie.",
                            {}
                        ),
                    });
                }
            }

            // Dinamice #CAP22
            for (var q3 = 0; q3 < Math.max(dyn22_c2.length, dyn22_c4.length, 0); q3++) {
                if (hasValue(dyn22_c2[q3]) && !hasValue(dyn22_c3[q3])) {
                    webform.errors.push({
                        fieldName: "CAP22_R_C3",
                        index: q3,
                        options: { hide_title: true },
                        msg: Drupal.t(
                            "Cod eroare 2-004: Cap.2 Rând." + dynRowLabel(dyn22_ca, q3, 2200) +
                            " – dacă Col.2 (Nr. bazine în proprietate) este completat, Col.3 (Suprafața în proprietate) este obligatorie.",
                            {}
                        ),
                    });
                }
                if (hasValue(dyn22_c4[q3]) && !hasValue(dyn22_c5[q3])) {
                    webform.errors.push({
                        fieldName: "CAP22_R_C5",
                        index: q3,
                        options: { hide_title: true },
                        msg: Drupal.t(
                            "Cod eroare 2-004: Cap.2 Rând." + dynRowLabel(dyn22_ca, q3, 2200) +
                            " – dacă Col.4 (Nr. bazine în arendă) este completat, Col.5 (Suprafața în arendă) este obligatorie.",
                            {}
                        ),
                    });
                }
            }

        } // end if (cap2HasData) — validări Cap.2

        // ══════════════════════════════════════════════════════════════════════
        //  REGULA R999: CAP2_R999_C1 (Timpul utilizat) este obligatoriu dacă
        //  tabelele Cap.1 sau Cap.2 conțin date. Valoarea trebuie să fie între
        //  0 și 360 minute (inclusiv).
        // ══════════════════════════════════════════════════════════════════════
        if ((cap1HasData || cap2HasData) && !hasValue(r999_c1)) {
            webform.errors.push({
                fieldName: "CAP2_R999_C1",
                options: { hide_title: true },
                msg: Drupal.t(
                    "Cod eroare R999: Rând.999 – Timpul utilizat pentru completarea formularului este obligatoriu când formularul conține date (valoare între 0 și 360 minute).",
                    {}
                ),
            });
        }
        if (hasValue(r999_c1)) {
            var v999 = toFloat(r999_c1);
            if (v999 < 0 || v999 > 360) {
                webform.errors.push({
                    fieldName: "CAP2_R999_C1",
                    options: { hide_title: true },
                    msg: Drupal.t(
                        "Cod eroare R999: Rând.999 – Timpul utilizat pentru completarea formularului trebuie să fie între 0 și 360 minute (valoare introdusă: " + v999 + ").",
                        {}
                    ),
                });
            }
        }

        // ──────────────────────────────────────────────────────────
        webform.validatorsStatus["arg3"] = 1;
        validateWebform();
    };
})(jQuery);