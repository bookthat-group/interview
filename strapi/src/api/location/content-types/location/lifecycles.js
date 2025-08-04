"use strict";

module.exports = {
  async afterCreate(event) {
    const ctx = strapi.requestContext.get();
    const { result, params } = event;

    // Get random image: https://picsum.photos/200/300
    // Get the lat and long from the params
  },
};
