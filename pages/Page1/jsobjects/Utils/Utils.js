export default {
	setTab: async () => {
		if(appsmith.store.jwt)
        {
              await get_userinfo.run();
              await storeValue('tabValue',"Bob Data");
        }
        else
        {
             await storeValue('tabValue',"Login");
        }
	},
}