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
                // Comment this code for now
                // var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                // var sMsg = oTextBundle.getText("addButtonMsg");
                // this.fnDisplayMsg(sMsg);

                // Instantiate the fragment

                // create dialog lazily
                if (!this.oDialog) {
                    // By using loadFragment, we are adding the fragment as a dependent to the View
                    // By doing so, we can use the functions inside the view's controller
                    this.oDialog = this.loadFragment({
                        name: "com.training.exer5bacar.fragment.ProductDialog"
                    });
                } 
                this.oDialog.then(function(oDialog) {
                    oDialog.open();
                });
            },
            onCloseDialog: function (){
                this.getView().byId("idProductDialog").close();
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
                var oInputFName = this.getView().byId("idInptFName");
                var oInputLName = this.getView().byId("idInptLName");
                var oInputFNameValue = oInputFName.getValue();
                var oInputLNameValue = oInputLName.getValue();
                var oRouter = this.getOwnerComponent().getRouter();

                // Check if first name and last name is blank
                if (oInputFNameValue === "" || oInputLNameValue === ""){
                   
// set value state to Error
                    oInputFName.setValueState("Error");
                    oInputLName.setValueState("Error");
                } else {
                    oInputFName.setValueState("None");
                    oInputLName.setValueState("None");

                    //Navigate to review page passing first
                    oRouter.navTo("RouteReviewPage", {
                        firstName: oInputFNameValue
                    });

                }
            },


    });
});