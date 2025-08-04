import type { Attribute, Schema } from '@strapi/strapi';

export interface AddressAddress extends Schema.Component {
  collectionName: 'components_address_addresses';
  info: {
    description: '';
    displayName: 'address';
    icon: 'store-alt';
  };
  attributes: {
    address: Attribute.String;
    city: Attribute.String;
    country: Attribute.Enumeration<['NL', 'BE', 'DE', 'PL']>;
    houseNumber: Attribute.String;
    houseNumberAddition: Attribute.String;
    latitude: Attribute.Float;
    longitude: Attribute.Float;
    region: Attribute.String;
    street: Attribute.String;
    zipCode: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'address.address': AddressAddress;
    }
  }
}
