sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, MessageToast, formatter, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("UI5Day3.controller.invDetail", {
		onInit: function () {
			debugger;
			var oRouter = new sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("invDetail").attachPatternMatched(this._onObjectMathced,this);

		},
		_onObjectMathced:function(oEvent){
			debugger;
			this.getView().bindElement({
				path:"/"+window.decodeURIComponent(oEvent.getParameter("arguments").inv),
				model:"inv"
			});
		}

	});
});