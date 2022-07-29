'use strict';

/**
 * vendor-list service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vendor-list.vendor-list');
