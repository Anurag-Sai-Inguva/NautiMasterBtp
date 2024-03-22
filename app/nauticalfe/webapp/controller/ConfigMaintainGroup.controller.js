sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/Fragment",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel"
  ],
  function (Controller, History, Fragment, MessageToast, MessageBox, JSONModel) {
    "use strict";
    let aSelectedIds = [];

    return Controller.extend("nauticalfe.controller.ConfigMaintainGroup", {
      onInit: function () {},
      selectedItems: function (oEvent) {
        let oTable = oEvent.getSource();
        let aSelectedItems = oTable.getSelectedItems();

        aSelectedIds = aSelectedItems.map(function (oSelectedItem) {
          if (oSelectedItem.getBindingContext()) {
            let cells = oSelectedItem.getCells();
            return [oSelectedItem.getBindingContext().getProperty("Zuser"), oSelectedItem.getBindingContext().getProperty("Zgroup")];
          } else {
            // Handle else case if needed
          }
        });
        console.log(aSelectedIds);
        return aSelectedIds;
      },
      onBackPress: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        const oHistory = History.getInstance();
        const sPreviousHash = oHistory.getPreviousHash();

        if( this.getView().byId("entryTypeTable").getVisible() || this.getView().byId("updateTypeTable").getVisible() ){
          var that = this
          sap.m.MessageBox.confirm(

            "Do you want to discard the changes?", {
  
            title: "Confirmation",
            onClose: function (oAction) {
              if (oAction === sap.m.MessageBox.Action.OK) {
                that.resetView();
              }
            }
          }
          );
        }
        else{
          this.getView().byId("createTypeTable").setVisible(true)
          this.getView().byId("entryTypeTable").setVisible(false)
          this.getView().byId("updateTypeTable").setVisible(false)
          this.getView().byId("mainPageFooter").setVisible(false)
          this.getView().byId("mainPageFooter2").setVisible(false)
          if (sPreviousHash !== undefined) {
            window.history.go(-1);
          } 
          else {
            oRouter.navTo("RouteMasterDashboard", {}, true);
          }
        }
      },
      onPress: function () {
        var oView = this.getView(),
          oButton = oView.byId("button");
        if (!this._oMenuFragment) {
          this._oMenuFragment = Fragment.load({
            name: "nauticalfe.fragments.MastOptionsDropDown",
            id: oView.getId(),
            controller: this
          }).then(function (oMenu) {
            oMenu.openBy(oButton);
            this._oMenuFragment = oMenu;
            return this._oMenuFragment;
          }.bind(this));
        } else {
          this._oMenuFragment.openBy(oButton);
        }
      },
      onBackPressHome: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteHome");
      },
      onExit: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        this.getView().byId("createTypeTable").setVisible(true)
        this.getView().byId("entryTypeTable").setVisible(false)
        this.getView().byId("updateTypeTable").setVisible(false)
        this.getView().byId("mainPageFooter").setVisible(false)
        this.getView().byId("mainPageFooter2").setVisible(false)
        oRouter.navTo("RouteHome");
      },
      newEntries: function () {
        let aItems = this.byId("createTypeTable").getSelectedItems();
        if(aItems.length>=1){
          MessageToast.show("Please de-select the Selected Items")
        }
        else{
          this.getView().byId("createTypeTable").setVisible(false)
          this.getView().byId("entryTypeTable").setVisible(true)
          this.getView().byId("mainPageFooter").setVisible(true)
          this.getView().byId("editBtn").setEnabled(false);
          this.getView().byId("deleteBtn").setEnabled(false);
          this.getView().byId("copyBtn").setEnabled(false);
          this.getView().byId("entryBtn").setEnabled(false);
        }
      },
      onCreateSent: function (ev) {
        sap.m.MessageToast.show("Creating..")
        console.log(ev.getParameter("context")?.getObject())
      },
      onCreateCompleted: function (ev) {
        let isSuccess = ev.getParameter('success');
        if (isSuccess) {
          sap.m.MessageToast.show("Successfully Created.")
        } else {
          sap.m.MessageToast.show("Fail to Create Nomination.")
        }
      },
      onSave: function () {
        var that = this.getView();
        var value1 = that.byId("maintaingrpCode").getValue();
        var value2 = that.byId("maintaingrpCodeDesc").getValue();
        console.log(value1,value2);

        if (!value1 || !value2) {
          MessageToast.show("Please enter both fields.");
          return;
        }

        var data = {
          Zuser: value1,
          Zgroup: value2
        };
        const oJsonModel = new JSONModel(data);
        that.setModel(oJsonModel, "oJsonModel");
        let oModel = this.getView().getModel();
        let oBindListSP = oModel.bindList("/MaintainGroupSet");

        oBindListSP.attachCreateSent(this.onCreateSent, this);
        oBindListSP.attachCreateCompleted(this.onCreateCompleted, this);

        oBindListSP.attachEventOnce("dataReceived", function () {
          let existingEntries = oBindListSP.getContexts().map(function (context) {
            return context.getProperty("Zuser");
          });

          if (existingEntries.includes(value1)) {
            MessageToast.show("Duplicate Vessel Type is not allowed");
          } else {
            try {
              oBindListSP.create({
                Zuser: value1,
                Zgroup: value2
              });
              that.getModel().refresh();
              that.byId("maintaingrpCode").setValue("");
              that.byId("maintaingrpCodeDesc").setValue("");

              MessageToast.show("Data created Successfully");

              that.byId("createTypeTable").setVisible(true);
              that.byId("createTypeTable").removeSelections();
              that.byId("entryTypeTable").setVisible(false);
              that.byId("mainPageFooter").setVisible(false);
            } catch (error) {
              MessageToast.show("Error while saving data");
            }
          }
        });
        oBindListSP.getContexts();
      },
      onCancel: function () {
        const that = this; // Preserve reference to 'this' for use inside the callback function

        // Show confirmation dialog
        sap.m.MessageBox.confirm(

          "Do you want to discard the changes?", {

          title: "Confirmation",
          onClose: function (oAction) {
            if (oAction === sap.m.MessageBox.Action.OK) {
              // If user clicks OK, discard changes and reset view
              that.resetView();
            }

          }
        }
        );
      },
      

      resetView: function () {
        // Reset view to initial state
        this.getView().byId("updateTypeTable").setVisible(false);
        this.getView().byId("entryTypeTable").setVisible(false);
        this.getView().byId("mainPageFooter").setVisible(false);
        this.getView().byId("mainPageFooter2").setVisible(false);
        aSelectedIds = [];
        let editFlag = false;
        let copyFlag = false;
        this.getView().byId("createTypeTable").setVisible(true).removeSelections();
        this.getView().byId("maintaingrpCode1").setValue("");
        this.getView().byId("maintaingrpCodeDesc1").setValue("");
        this.getView().byId("maintaingrpCode").setValue("");
        this.getView().byId("maintaingrpCodeDesc").setValue("");
        this.getView().byId("editBtn").setEnabled(true);
        this.getView().byId("deleteBtn").setEnabled(true);
        this.getView().byId("copyBtn").setEnabled(true);
        this.getView().byId("entryBtn").setEnabled(true);
      },
      
      pressEdit: function () {
        if (aSelectedIds.length) {
          if (aSelectedIds.length > 1) {
            MessageToast.show("Please select one row");
            return
          }
        } else {
          MessageToast.show("Please select a row");
          return;
        }

        this.getView().byId("createTypeTable").setVisible(false);
        let code = aSelectedIds[0][0];
        let desc = aSelectedIds[0][1];
        console.log(code,desc);
        this.getView().byId("maintaingrpCode1").setValue(code);
        this.getView().byId("maintaingrpCodeDesc1").setValue(desc);
        this.getView().byId('updateTypeTable').setVisible(true);
        this.getView().byId("mainPageFooter2").setVisible(true);
        this.getView().byId("copyBtn").setEnabled(false)
        this.getView().byId("editBtn").setEnabled(false)
        this.getView().byId("deleteBtn").setEnabled(false)
        this.getView().byId("entryBtn").setEnabled(false)
        this.getView().byId("backButton").setEnabled(false)
        this.getView().byId("homeButton").setEnabled(false)
      },
      onPatchSent: function (ev) {
        sap.m.MessageToast.show("Updating..")
      },
      onPatchCompleted: function (ev) {
        let oView = this.getView();
        let isSuccess = ev.getParameter('success');
        if (isSuccess) {
          sap.m.MessageToast.show("Successfully Updated.");
          oView.getModel().refresh();
          this.resetView();

        } else {
          sap.m.MessageToast.show("Fail to Update Record.")
        }
      },
      onUpdate: function () {
        let value1 = aSelectedIds[0][0];
        let value2 = this.getView().byId("maintaingrpCodeDesc1").getValue().trim();
        if(value2==""){
          MessageToast.show("Please enter description")
        }

        let UpData = {
          Zuser: value1,
          Zgroup: value2
        };

        let nomModel = this.getView().getModel();
        let oBindList = nomModel.bindList("/MaintainGroupSet", {
          $$updateGroupId: "update"
        });

        oBindList.attachPatchSent(this.onPatchSent, this);
        oBindList.attachPatchCompleted(this.onPatchCompleted, this);

        let oFilter = new sap.ui.model.Filter("Zuser", sap.ui.model.FilterOperator.EQ, UpData.Zuser);
        oBindList.filter(oFilter);

        oBindList.requestContexts().then(function (aContexts) {
          if (aContexts.length > 0) {
            let aData = [];
            aContexts.forEach(context => {
              aData.push(context.getObject())
            });

            let data = aData.filter(item => item.Zuser == UpData.Zuser);

            if (data?.Zgroup === UpData.Zgroup) {
              sap.m.MessageToast.show("Nothing to Update..")
            } else {
              let path = `/MaintainGroupSet('${UpData.Zuser}')`;
              let upContext = aContexts.filter(obj => obj.sPath === path);
              console.log(upContext);
              upContext[0].setProperty("Zgroup", UpData.Zgroup);
            }
          }
        });

        nomModel.submitBatch("update");
      },

      // Deprecated method
      onUpdate1: function () {
        console.log("Deprecated method onUpdate1 is called!");
        // Code logic for updating using fetch method (not recommended for OData updates)
      },

      onDeletePress: function () {

        let aItems = this.byId("createTypeTable").getSelectedItems();
        console.log(aItems);
        if (!aItems.length) {

          MessageToast.show("Please Select  Items ");

          return;
        }

        const that = this;  // creating reference for use in Dialog
        sap.ui.require(["sap/m/MessageBox"], function (MessageBox) {
          MessageBox.confirm(
            "Are you sure  to delete the selected items?", {
            title: "Confirm ",
            onClose: function (oAction) {
              if (oAction === MessageBox.Action.OK) {
                // User confirmed deletion
                that.deleteSelectedItems(aItems);
              } else {
                // User canceled deletion
                sap.m.MessageToast.show("Deletion canceled");
              }
            }
          }
          );
        });

      },
      // internal calling fn by onDeletePress fn

      deleteSelectedItems: function (aItems) {
        const that = this;

        aItems.forEach(function (oItem) {
          const oContext = oItem.getBindingContext();
          console.log(oContext);
          oContext.delete().then(function () {
            // Successful deletion
            MessageToast.show("Record deleted successfully");
            console.log("Successfully Deleted");
          }).catch(function (oError) {
            // Handle deletion error
            MessageBox.error("Error deleting item: " + oError.message);
          });
        });
      },
      pressCopy: function () {
        if (aSelectedIds.length) {
          if (aSelectedIds.length > 1) {
            MessageToast.show("Please select one row");
            return
          }
        } else {
          MessageToast.show("Please select a row");
          return;
        }

        this.getView().byId("createTypeTable").setVisible(false);
        let code = aSelectedIds[0][0];
        let desc = aSelectedIds[0][1];
        this.getView().byId("maintaingrpCode1").setValue(code);
        this.getView().byId("maintaingrpCodeDesc1").setValue(desc);
        this.getView().byId('entryTypeTable').setVisible(true);
        this.getView().byId("mainPageFooter").setVisible(true);
      }
    });
  });
