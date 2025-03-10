sap.ui.define([
    "sap/m/library",
    "sap/ui/core/format/NumberFormat"
], function (mobileLibrary, NumberFormat) {
    "use strict";

    var oCurrencyFormat = NumberFormat.getCurrencyInstance();
    var oNumberFormat = NumberFormat.getFloatInstance({
        minFractionDigits: 2, 
        maxFractionDigits: 2, 
        groupingEnabled: true // Enables comma separators
    });

    return {
        formatMail: function (sEid) {
            var oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            return mobileLibrary.URLHelper.normalizeEmail(
                sEid + oBundle.getText("domain"),
                oBundle.getText("mailSubject", [sEid]),
                oBundle.getText("mailBody")
            );
        },

        formatStockValue: function (fUnitPrice, iStockLevel, sCurrCode) {
            return oCurrencyFormat.format(fUnitPrice * iStockLevel, sCurrCode);
        },

        formatStockText: function (label, value) {
            if (!label) return "";
            if (value == null) value = 0; // Handles null values
            
            return label + ": " + oNumberFormat.format(value);
        }
    };
});