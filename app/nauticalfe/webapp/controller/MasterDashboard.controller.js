sap.ui.define(
  [
      "sap/ui/core/mvc/Controller",
      "sap/ui/core/routing/History",
      'sap/ui/core/Fragment',
  ],
  function(BaseController,History,Fragment) {
    "use strict";

    return BaseController.extend("nauticalfe.controller.MasterDashboard", {
      onInit() {
      },
      onPortLoc:function(){
        const oRouter = this.getOwnerComponent().getRouter();
              oRouter.navTo("RoutePortLocMaster");
      },
      onCostMaster:function(){
        const oRouter = this.getOwnerComponent().getRouter();
              oRouter.navTo("RouteCostMaster");
      },
      onEventMaster:function(){
        const oRouter = this.getOwnerComponent().getRouter();
              oRouter.navTo("RouteEventMaster");
      },
      onPortLocUpload:function(){
        const oRouter = this.getOwnerComponent().getRouter();
              oRouter.navTo("RoutePortLocUpload");
      },
      onPortMaster:function(){
        const oRouter = this.getOwnerComponent().getRouter();
              oRouter.navTo("RoutePortMaster");
      },
      onRefDocIndicator:function(){
        const oRouter = this.getOwnerComponent().getRouter();
              oRouter.navTo("RouteRefDocIndicator");
      },
      onBusinessPartnerPress: function () {
        var oView = this.getView(),
        oButton = oView.byId("onBusinessPartnerBtn");
 
        if (!this._oBusinessPartnerMenuFragment) {
 
          this._oBusinessPartnerMenuFragment = Fragment.load({
            name: "nauticalfe.fragments.MastBusinessPartner",
                        id: oView.getId(),
            controller: this
          }).then(function(oMenu) {
            oMenu.openBy(oButton);
            this._oBusinessPartnerMenuFragment = oMenu;
            return this._oBusinessPartnerMenuFragment;
          }.bind(this));
        }
        else {
          this._oBusinessPartnerMenuFragment.openBy(oButton);
        }
      },
      onBPDetailpress: function(){
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteBPMasterDetails")
      },
      onVendorDataSyncingPress: function() {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteVendorDataSyncing");
      },
      onConfigPress: function () {
        var oView = this.getView(),
        oButton = oView.byId("onConfigBtn");
 
        if (!this._oConfigReleaseMenuFragment) {
 
          this._oConfigReleaseMenuFragment = Fragment.load({
            name: "nauticalfe.fragments.MastConfigRelease",
                        id: oView.getId(),
            controller: this
          }).then(function(oMenu) {
            oMenu.openBy(oButton);
            this._oConfigReleaseMenuFragment = oMenu;
            return this._oConfigReleaseMenuFragment;
          }.bind(this));
        }
        else {
          this._oConfigReleaseMenuFragment.openBy(oButton);
        }
      },
      onConfigMaintainGroup:function(){
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteConfigMaintainGroup");
      },
      onConfigVoyage:function(){
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteConfigVoyage");
      },
      onConfigChartering:function(){
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteConfigChartering");
      },
     
     
      onApiurl:function(){
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteMastApiUrl");
      },
      onVesselPress:function(){
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteVesselType");
      },
      navToVoyageType: function(){
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteMasterVoyageType" ,{}, true)
      },
      navToCurrencyType: function(){
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteMasterCurrencyType")
      },
      navToClassMaster: function(){
        const oRouter = this.getOwnerComponent().getRouter();
              oRouter.navTo("RouteMasterClassMaster");

      },
      navToVesselType: function(){
        const oRouter = this.getOwnerComponent().getRouter();
              oRouter.navTo("RouteMasterVesselType")

      },
      onBidMaster:function(){
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteBidMaster");
      },
      onUoM:function(){
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteUoM");
      },
      onRouterMaster:function(){
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteRouteMaster");
      },
      onCountryMaster:function(){
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteCountryMaster");
      },
      onCountryMasterUpd:function(){
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteCountryMasterUpd");
      },
      onMarinePathUpd:function(){
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteMarinePathUpd");
      },
      onMarineDisUpd:function(){
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteMarineDisUpd");
      },
      onPortUpload:function(){
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RoutePortUpload");
      },
      onBackPressHome: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteHome");
      },
      onBackPress: function () {
        const oHistory = History.getInstance();
        const sPreviousHash = oHistory.getPreviousHash();

        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } 
        else {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteHome", {}, true);
        }
      },



     
    });    }
);