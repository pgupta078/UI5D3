sap.ui.define([], function () {
	"use strict";
	return {
		readableInvStatus: function (InvStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (InvStatus) {
			case 'CONF':
				return resourceBundle.getText("CONF");
			case 'PEND':
				return resourceBundle.getText("PEND");
			case 'OPEN':
				return resourceBundle.getText("OPEN");
			default:
				return invStatus;
			}
		}
	};

});