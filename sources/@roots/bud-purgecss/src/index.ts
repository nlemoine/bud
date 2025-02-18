// Copyright © Roots Software Foundation LLC
// Licensed under the MIT license.

/**
 * Adds purgecss support to Bud
 *
 * @example
 * ```ts
 * app.purge({
 *  content: [app.path('resources/views/**')],
 *  allow: require('purgecss-with-wordpress').whitelist,
 *  allowPatterns: require('purgecss-with-wordpress').whitelistPatterns,
 * })
 * ```
 *
 * @see https://bud.js.org
 * @see https://github.com/roots/bud
 *
 * @packageDocumentation
 */

import './types.js'

import * as purgeExtension from './extension.js'

export default purgeExtension
