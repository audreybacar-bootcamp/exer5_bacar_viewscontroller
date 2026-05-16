sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {


    return Controller.extend("com.training.exer5bacar.controller.MainView", {
        onInit() {
        },
            onAddItem: function (){
                var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                var sMsg = oTextBundle.getText("addButtonMsg");
                this.fnDisplayMsg(sMsg);
            },

            fnDisplayMsg: function (sMsg){
                MessageToast.show(sMsg);

            },
onChangeMOP: function (oEvent) {

    var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
    var sSelectedtext = oEvent.getParameter("selectedItem").getProperty("text");
var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle()
    var oMobileLabel = this.getView().byId("idLblPhone");
    var oMobileInput = this.getView().byId("idInputPhone");

    var oCreditLabel = this.getView().byId("idLblCardNum");
    var oCreditInput = this.getView().byId("idInputCCNum");


    switch (sSelectedKey) {

        case "GCASH":

            oMobileLabel.setVisible(true);
            oMobileInput.setVisible(true);

            oCreditLabel.setVisible(false);
            oCreditInput.setVisible(false);
            this.fnDisplayMsg(oTextBundle.getText("uSeleceted", [sSelectedtext]));
            break;

        case "CC":

            oMobileLabel.setVisible(false);
            oMobileInput.setVisible(false);

            oCreditLabel.setVisible(true);
            oCreditInput.setVisible(true);
            this.fnDisplayMsg(oTextBundle.getText("uSeleceted", [sSelectedtext]));
            break;

        case "COD":

            oMobileLabel.setVisible(false);
            oMobileInput.setVisible(false);

            oCreditLabel.setVisible(false);
            oCreditInput.setVisible(false);
            this.fnDisplayMsg(oTextBundle.getText("uSeleceted", [sSelectedtext]));
            break;

        default:

            oMobileLabel.setVisible(false);
            oMobileInput.setVisible(false);

            oCreditLabel.setVisible(false);
            oCreditInput.setVisible(false);

            break;
    }
},


onPressCheckout: function (){
                var oInputFNameValue = this.getView().byId("idInptFName").getValue();
var oInputLnameValue = this.getView().byId("idInptLName").getValue();
                // Check if first name is blank
                var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                    var sMsreq = oTextBundle.getText("requiredMsg");
    var sMsgcheckout = oTextBundle.getText("checkoutMsg");
                if (oInputFNameValue === "" || oInputLnameValue === "") {
                    sap.m.MessageToast.show(sMsreq); 
                }
                else {
                    sap.m.MessageToast.show(sMsgcheckout); 
                }
            },

    });
});