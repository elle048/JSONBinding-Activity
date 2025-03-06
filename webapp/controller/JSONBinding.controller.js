sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sapips/training/jsonbinding/model/formatter"
], (Controller, JSONModel, formatter) => {
    "use strict";

    return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {

        formatter: formatter,
        onInit() {
            var oPersonalDataModel = new sap.ui.model.json.JSONModel();

            var oPersonalData = {
                EID : "lee.ann.m.baranco",
                Enabled : true,
                Address : {
                    Street : "Sunflower St",
                    City : "Taguig City",
                    Zip : 1412,
                    Country : "Philippines"  
                },
                SalesAmount : 30000,
                CurrencyCode : "Php"
            };
            var oPersonalDataModel = new JSONModel();
            oPersonalDataModel.setData(oPersonalData);
            this.getView().setModel(oPersonalDataModel, "oPersonalDataModel");

            var oModel = new JSONModel("model/ProductsModel.json");
            this.getView().setModel(oModel, "ProductsModel");

            this.getView().setModel(new JSONModel({}), "SelectedProductModel");
        },

        onSelectProduct: function(oEvent) {
            var oList = oEvent.getSource();
            var oSelectedItem = oList.getSelectedItem();
            var oBindingContext = oSelectedItem.getBindingContext("ProductsModel");
            var sPath = oBindingContext.getPath();
            var oPanel = this.byId("panel3");
            oPanel.bindElement({
                 path: sPath,
                 model: "ProductsModel"
            });
         }

    });
});