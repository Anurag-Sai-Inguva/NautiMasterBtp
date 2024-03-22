const cds = require('@sap/cds');
const { NAVOYGIP , NAVOYGH} = cds.entities("create_voyage")

module.exports = cds.service.impl(async function (srv) {
    const ZBTP_NAUTI_CREATEVOYAGE_CDS = await cds.connect.to("ZBTP_NAUTI_CREATEVOYAGE_CDS"); 
    srv.on('READ', 'ZBTP_NAUTI_CreateVoyage', req => ZBTP_NAUTI_CREATEVOYAGE_CDS.run(req.query));

    const ZBTP_NAUTI_MARINE_DM_CDS = await cds.connect.to("ZBTP_NAUTI_MARINE_DM_CDS"); 
    srv.on('READ', 'ZBTP_NAUTI_Marine_DM', req => ZBTP_NAUTI_MARINE_DM_CDS.run(req.query)); 

    const ZBTP_NAUTI_VOY_DOC_UPD_CDS = await cds.connect.to("ZBTP_NAUTI_VOY_DOC_UPD_CDS"); 
    srv.on('READ', 'ZBTP_Nauti_Voy_DOC_UPD', req => ZBTP_NAUTI_VOY_DOC_UPD_CDS.run(req.query)); 

    const ZBTP_NAUTICAL_MARIDISTANCE_CDS = await cds.connect.to("ZBTP_NAUTICAL_MARIDISTANCE_CDS"); 
      srv.on('READ', 'ZBTP_NAUTICAL_MariDistance', req => ZBTP_NAUTICAL_MARIDISTANCE_CDS.run(req.query)); 

      const NAUTINAUTICALCV_SRV = await cds.connect.to("NAUTINAUTICALCV_SRV"); 
      srv.on('READ', 'BidTypeSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('READ', 'CarTypeSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('READ', 'CargoUnitSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('READ', 'CurTypeSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('READ', 'GtPlanSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('READ', 'GtTabSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('READ', 'VoyTypeSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('READ', 'ZCalculateSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 

      srv.on('CREATE', 'BidTypeSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('CREATE', 'CarTypeSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('CREATE', 'CargoUnitSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('CREATE', 'CurTypeSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('CREATE', 'GtPlanSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('CREATE', 'GtTabSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('CREATE', 'VoyTypeSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('CREATE', 'ZCalculateSet', req => NAUTINAUTICALCV_SRV.run(req.query));

      srv.on('UPDATE', 'BidTypeSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('UPDATE', 'CarTypeSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('UPDATE', 'CargoUnitSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('UPDATE', 'CurTypeSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('UPDATE', 'GtPlanSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('UPDATE', 'GtTabSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('UPDATE', 'VoyTypeSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('UPDATE', 'ZCalculateSet', req => NAUTINAUTICALCV_SRV.run(req.query));

      srv.on('DELETE', 'BidTypeSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('DELETE', 'CarTypeSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('DELETE', 'CargoUnitSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('DELETE', 'CurTypeSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('DELETE', 'GtPlanSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('DELETE', 'GtTabSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('DELETE', 'VoyTypeSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
      srv.on('DELETE', 'ZCalculateSet', req => NAUTINAUTICALCV_SRV.run(req.query));


      const NAUTIMASTER_BTP_SRV = await cds.connect.to("NAUTIMASTER_BTP_SRV"); 
      srv.on('READ', 'BidMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('READ', 'BusinessPartnerSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('READ', 'ClassMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('READ', 'CostMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('READ', 'CountryMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('READ', 'EventMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('READ', 'MaintainGroupSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('READ', 'VoyageReleaseSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('READ', 'ReleaseStrategySet', req => NAUTIMASTER_BTP_SRV.run(req.query));

      srv.on('CREATE', 'BidMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('CREATE', 'BusinessPartnerSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('CREATE', 'ClassMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('CREATE', 'CostMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('CREATE', 'CountryMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('CREATE', 'EventMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('CREATE', 'MaintainGroupSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('CREATE', 'VoyageReleaseSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('CREATE', 'ReleaseStrategySet', req => NAUTIMASTER_BTP_SRV.run(req.query));

      srv.on('UPDATE', 'BidMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('UPDATE', 'BusinessPartnerSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('UPDATE', 'ClassMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('UPDATE', 'CostMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('UPDATE', 'CountryMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('UPDATE', 'EventMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('UPDATE', 'MaintainGroupSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('UPDATE', 'VoyageReleaseSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('UPDATE', 'ReleaseStrategySet', req => NAUTIMASTER_BTP_SRV.run(req.query));

      srv.on('DELETE', 'BidMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('DELETE', 'BusinessPartnerSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('DELETE', 'ClassMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('DELETE', 'CostMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('DELETE', 'CountryMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('DELETE', 'EventMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('DELETE', 'MaintainGroupSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('DELETE', 'VoyageReleaseSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('DELETE', 'ReleaseStrategySet', req => NAUTIMASTER_BTP_SRV.run(req.query));

      const NAUTIMARINE_TRAFFIC_API_SRV = await cds.connect.to("NAUTIMARINE_TRAFFIC_API_SRV"); 
      srv.on('READ', 'EsPathCollection', req => NAUTIMARINE_TRAFFIC_API_SRV.run(req.query)); 
      srv.on('READ', 'PortMasterSet', req => NAUTIMARINE_TRAFFIC_API_SRV.run(req.query)); 
      srv.on('READ', 'es_port_master', req => NAUTIMARINE_TRAFFIC_API_SRV.run(req.query)); 
      srv.on('READ', 'es_route_map', req => NAUTIMARINE_TRAFFIC_API_SRV.run(req.query)); 

      try {
        srv.before('CREATE', 'NAVOYGH', async (req,res) => {
            console.log("my data : ", req.data);
            let {maxID}  = await SELECT.one`max(VOYNO) as maxID`.from(NAVOYGH);
           console.log(res, maxID);
           
            if(maxID==null){
                maxID = 1000000;
                
                req.data.VOYNO = maxID;
            }else {

                id = maxID;
                req.data.VOYNO = id + 1;
            }
            // console.log(id);

            const voydata = req.data
            console.log("updated data: ", voydata);

            // const result = await cds.tx(req).run(INSERT.into(NAVOYGH).entries(voydata))
            // console.log(result.results);
           
           
        });
        srv.on('CREATE', 'NAVOYGH', async ( req) => {
          
          console.log("Created entity data: ", req.data );
          const keys = ['VOYNO', 'VOYNM', 'VNOMTK', 'REFDOC', 'DOCIND', 'VESSN', 'VIMO', 'CHTYP', 'CHPNO', 'CURRKEYS', 'FRTCO', 'VSTAT', 'VOYTY', 'CARTY', 'CURR', 'FREGHT', 'PARTY', 'BIDTYPE', 'FRCOST', 'FRTU', 'FRCOST_ACT', 'ZDELETE', 'REF_VOYNO'];
          const values = [req.data.VOYNO, req.data.VOYNM, req.data.VNOMTK, req.data.REFDOC, req.data.DOCIND, req.data.VESSN, req.data.VIMO, req.data.CHTYP, req.data.CHPNO, req.data.CURRKEYS, req.data.FRTCO, req.data.VSTAT, req.data.VOYTY, req.data.CARTY, req.data.CURR, req.data.FREGHT, req.data.PARTY, req.data.BIDTYPE, req.data.FRCOST, req.data.FRTU, req.data.FRCOST_ACT, req.data.ZDELETE, req.data.REF_VOYNO];
  
          const result = await cds.tx(req).run(
              INSERT.into(NAVOYGH).columns(...keys).values(...values)
          );
          console.log("result from srv.on : ", result.results);
          return {
              success: true,
              message: "Record created successfully",
              result: result.results
          };
        
          
        });
        srv.after('CREATE', 'NAVOYGH', async (data, req) => {
          // Your logic for 'srv.after' hook
          console.log("final : ", data, req.data);
          // return {
          //   success: true,
          //   message: "Record created successfully",
          //   result: req.data
          // };
          return req.data;
          
        });
      
      
    }
     catch (error) {
        console.log("error is :" + error);
        // If an error occurs, you might want to return an error response to the client
         return {
        success: false,
        error: error.message // Provide a meaningful error message to the client
         };
    }
});