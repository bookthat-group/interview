"use strict";

// Enhance the location lifecycle hook (lifecycles.js) with the following:
// 	1.	Geocode the address
//      Use the address fields to fetch the latitude and longitude (e.g., using OpenCage or any public geocoding API) and store them in the location entity.
// 	3.	Log updates
//      On edit compare the updated fields with the previous values and log any changes to the log content-type.

module.exports = {
  async afterCreate(event) {
    const ctx = strapi.requestContext.get();
    const { result, params } = event;
  },
};
