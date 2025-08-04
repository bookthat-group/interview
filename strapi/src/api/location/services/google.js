"use strict";

const _ = require("lodash");
const axios = require("axios");
const Client = require("@googlemaps/google-maps-services-js").Client;

const generateStreetViewUrl = (
  { lat, lng, fov, heading, pitch, size },
  apiKey,
  isMetadata
) => {
  let url = `https://maps.googleapis.com/maps/api/streetview${
    isMetadata ? "/metadata" : ""
  }?size=${size}x${size}&location=${lat},${lng}&key=${apiKey}`;
  if (fov) url += `&fov=${fov}`;
  if (heading) url += `&heading=${heading}`;
  if (pitch) url += `&pitch=${pitch}`;

  return url;
};

module.exports = {
  /**
   * Helper function to get the geoCode of a location/address
   *
   * @param address
   * @param lang
   * @param fullisEmpty
   * @returns {Promise<GeocodeResult|null>}
   */
  geoCode: async (address, region, lang = "nl", full = false) => {
    if (!_.isEmpty(strapi.config.custom.google.maps.apiKey)) {
      const client = new Client({});

      const params = {
        address,
        key: strapi.config.custom.google.maps.apiKey,
        language: lang,
      };

      if (region) params.region = region;

      return await client
        .geocode({ params: params })
        .then((result) => {
          if (result.status === 200 && result.data.results.length > 0) {
            const mainResult = result.data.results[0];
            if (full) {
              return mainResult;
            }

            const addressComponents = mainResult?.address_components || [];
            const region = addressComponents.find((component) =>
              component.types.includes("administrative_area_level_1")
            );

            return {
              ...mainResult.geometry.location,
              region: region?.long_name,
            };
          }

          return null;
        })
        .catch((error) => {
          strapi.log.error(error);
          return null;
        });
    }
  },

  streetviewImage: async (data) => {
    const apiKey = strapi?.config?.custom?.google?.maps?.apiKey;
    if (!_.isEmpty(apiKey)) {
      //data with {lat, lng, fov, heading, pitch, size}
      const metadataUrl = generateStreetViewUrl(data, apiKey, true);

      try {
        const response = await axios.get(metadataUrl);
        if (response.data.status !== "OK") {
          throw new Error("No streetview image");
        }
        return generateStreetViewUrl(data, apiKey);
      } catch (e) {
        // console.log(e);
        return null;
      }
    }
    return null;
  },
};
