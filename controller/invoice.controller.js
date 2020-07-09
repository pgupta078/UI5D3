sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/resource/ResourceModel",
	"sap/m/MessageBox",
	"sap/ui/model/json/JSONModel",
	"../model/formatter"
], function (Controller, MessageToast, Filter, FilterOperator, ResourceModel, MessageBox, JSONModel, formatter) {
	"use strict";
	return Controller.extend("UI5Day3.controller.invoice", {
		formatter: formatter,
		onInit: function () {},
		handleSortCC: function () {
			debugger;
			var field = this.getView().byId('oSelectS').getSelectedItem().getText();
			var oList = this.byId("invList");
			var oBinding = oList.getBinding("items");
			var aSorter = [];
			let name = "name";
			aSorter.push(new sap.ui.model.Sorter(field, false, false));
			oBinding.sort(aSorter);
		},
		handleGroupCC: function () {
			debugger;
			var field = this.getView().byId('oSelectG').getSelectedItem().getText();
			var oList = this.byId("invList");
			var oBinding = oList.getBinding("items");
			var aSorter = [];
			aSorter.push(new sap.ui.model.Sorter(field, false, true));
			oBinding.sort(aSorter);
			// var oList = this.byId("invList");
			// var oBinding = oList.getBinding("items");
			// var aSorter = [];
			// aSorter.push(new sap.ui.model.Sorter("Bukrs", false, true));
			// oBinding.sort(aSorter);
		},
		showDetails: function (oEvent) {
			debugger;
			var oItem = oEvent.getSource();
			var oRouter = new sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("invDetail", {
				inv: window.encodeURIComponent(oItem.getBindingContext("inv").getPath().substr(1))
			});

		},
		onSearchINV: function (oEvent) {
			debugger;
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			MessageToast.show(oBundle.getText("searchInvoice"));
			var aFilter = [];
			debugger;
			var inputData = JSON.parse(this.getView().getModel().getJSON()).invInput;
			if (inputData.compCode) {
				aFilter.push(new Filter("Bukrs", FilterOperator.Contains, inputData.compCode));
			}
			if (inputData.invType) {
				aFilter.push(new Filter("invType", FilterOperator.Contains, inputData.invType));
			}
			if (inputData.invNumber) {
				aFilter.push(new Filter("Vbeln", FilterOperator.Contains, inputData.invNumber));
			}
			// filter binding
			var oList = this.byId("invList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}
	});
});