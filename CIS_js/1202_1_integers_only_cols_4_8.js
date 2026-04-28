// Doar coloanele _4 - _8 sa accepte numere intregi in CAP 1202
(function () {
    function isAllowedIntegerControlKey(e) {
        var key = e.key;
        return (
            key === "Backspace" ||
            key === "Delete" ||
            key === "Tab" ||
            key === "Escape" ||
            key === "Enter" ||
            key === "ArrowLeft" ||
            key === "ArrowRight" ||
            key === "ArrowUp" ||
            key === "ArrowDown" ||
            key === "Home" ||
            key === "End"
        );
    }

    function sanitizeIntegerValue(value) {
        value = String(value || "").replace(/,/g, ".");
        var sign = value.trim().charAt(0) === "-" ? "-" : "";
        value = value.replace(/[^0-9.\-]/g, "");

        if (sign === "-") {
            value = value.replace(/-/g, "");
        }

        var match = value.match(/\d+/);
        if (!match) {
            return "";
        }

        return sign + match[0];
    }

    function isCap1202IntegerTarget(el) {
        if (!el || !el.id) {
            return false;
        }

        if (/^73_1202_.*_(4|5|6|7|8)$/.test(el.id)) {
            return true;
        }

        if (/^T(6|7|8|9|10)_\d+$/.test(el.id)) {
            return true;
        }

        return false;
    }

    $(document).on("keydown", "input", function (e) {
        if (!isCap1202IntegerTarget(this)) {
            return;
        }

        if (e.ctrlKey || e.metaKey || e.altKey) {
            return;
        }

        if (isAllowedIntegerControlKey(e)) {
            return;
        }

        if (!/^[0-9]$/.test(e.key)) {
            e.preventDefault();
        }
    });

    $(document).on("input blur paste", "input", function () {
        if (!isCap1202IntegerTarget(this)) {
            return;
        }

        var cleaned = sanitizeIntegerValue(this.value);
        if (this.value !== cleaned) {
            this.value = cleaned;
        }
    });
})();