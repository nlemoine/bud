import type {Bud} from '@roots/bud-framework'
import {Extension} from '@roots/bud-framework/extension'
import {
  bind,
  disabled,
  expose,
  label,
  options,
  plugin,
} from '@roots/bud-framework/extension/decorators'
import {deprecated} from '@roots/bud-support/decorators'
import CriticalCssWebpackPlugin, {
  Options,
} from '@roots/critical-css-webpack-plugin'

import {extractCss} from './api/extract.js'

/**
 * Critical css configuration
 */
@label(`@roots/bud-criticalcss`)
@expose(`critical`)
@plugin(CriticalCssWebpackPlugin)
@options<Options>({
  base: (app: Bud) =>
    app.publicPath() !== `auto` && app.publicPath() !== ``
      ? app.publicPath()
      : `/`,
  extract: true,
  request: {https: {rejectUnauthorized: false}},
})
@disabled
export default class BudCriticalCss extends Extension<
  Options,
  CriticalCssWebpackPlugin
> {
  /**
   * {@link Extension.register}
   */
  @bind
  public override async register(bud: Bud) {
    bud.extractCss = extractCss.bind(bud)
  }

  /**
   * Whether to extract styles
   *
   * @deprecated use {@link BudCriticalCss.set} instead
   *
   * @example
   * ```js
   * bud.critical.set('extract', true)
   * ```
   */
  @bind
  @deprecated(`bud.critical`, `Use bud.critical.set instead`, [
    [`Enable extract`, `bud.critical.set('extract', true)`],
    [`Disable extract`, `bud.critical.set('extract', false)`],
  ])
  public extract(extract: boolean = true) {
    this.set(`extract`, extract)
    return this
  }

  /**
   * Set source url
   *
   * @deprecated use {@link BudCriticalCss.set} instead
   *
   * @example
   * ```js
   * bud.critical.set('src', 'https://example.com')
   * ```
   */
  @bind
  @deprecated(`bud.critical`, `Use bud.critical.set instead`, [
    [`Set src`, `bud.critical.set('src', 'https://example.com')`],
  ])
  public src(src: string) {
    this.set(`src`, src)
    return this
  }

  /**
   * Set markup to use as source
   *
   * @deprecated use {@link BudCriticalCss.set} instead
   *
   * @example
   * ```js
   * bud.critical.set('html', '<html>...</html>')
   * ```
   */
  @bind
  @deprecated(`bud.critical`, `Use bud.critical.set instead`, [
    [`Set html`, `bud.critical.set('html', '<html>...</html>')`],
  ])
  public html(html: string) {
    this.set(`html`, html)
    return this
  }

  /**
   * Set base path
   *
   * @deprecated use {@link BudCriticalCss.set} instead
   *
   * @example
   * ```js
   * bud.critical.set('base', 'https://example.com/')
   * ```
   */
  @bind
  @deprecated(`bud.critical`, `Use bud.critical.set instead`, [
    [`Set base`, `bud.critical.set('base', 'https://example.com/')`],
  ])
  public base(base: string) {
    this.set(`base`, base)
    return this
  }

  /**
   * Set browser width
   *
   * @deprecated use {@link BudCriticalCss.set} instead
   *
   * @example
   * ```js
   * bud.critical.set('width', 1920)
   * ```
   */
  @bind
  @deprecated(`bud.critical`, `Use bud.critical.set instead`, [
    [`Set width`, `bud.critical.set('width', 1920)`],
  ])
  public width(width: number) {
    this.set(`width`, width)
    return this
  }

  /**
   * Set browser height
   *
   * @deprecated use {@link BudCriticalCss.set} instead
   *
   * @example
   * ```js
   * bud.critical.set('height', 1080)
   * ```
   */
  @bind
  @deprecated(`bud.critical`, `Use bud.critical.set instead`, [
    [`Set height`, `bud.critical.set('height', 1080)`],
  ])
  public height(height: number) {
    this.set(`height`, height)
    return this
  }

  /**
   * Ignore css
   *
   * @deprecated use {@link BudCriticalCss.set} instead
   *
   * @example
   * ```js
   * bud.critical.set('ignore', ['@font-face'])
   * ```
   */
  @bind
  @deprecated(`bud.critical`, `Use bud.critical.set instead`, [
    [`Set ignore`, `bud.critical.set('ignore', ['@font-face'])`],
  ])
  public ignore(ignore: Options['ignore']) {
    this.set(`ignore`, ignore)
    return this
  }

  /**
   * Set request options
   *
   * @deprecated use {@link BudCriticalCss.set} instead
   *
   * @example
   * ```js
   * bud.critical.set('request', {https: {rejectUnauthorized: false}})
   * ```
   */
  @bind
  @deprecated(`bud.critical`, `Use bud.critical.set instead`, [
    [
      `Set request options`,
      `bud.critical.set('request', {https: {rejectUnauthorized: false}})`,
    ],
  ])
  public request(request: number) {
    this.set(`request`, request)
    return this
  }
}
