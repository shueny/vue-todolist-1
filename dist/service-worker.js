/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

// eslint-disable-next-line no-undef
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js')

// eslint-disable-next-line no-undef
importScripts(
  '/vue-todolist-1/precache-manifest.e363b85fa6df855912a53a3f60e600a9.js'
)

// eslint-disable-next-line no-undef
workbox.core.setCacheNameDetails({prefix: 'vue-todolist-1'})

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
// eslint-disable-next-line no-restricted-globals
// eslint-disable-next-line no-underscore-dangle
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})
