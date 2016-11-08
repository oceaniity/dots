/*** 
    oceaniity user.js file for firefox
    ==================================

    Use at your own peril. Most defaults are sane though.

***/

// # Testing preference for syntax errors.
user_pref("oceaniity.testing", 0);

// # App updating
user_pref("app.update.enabled", false);
user_pref("app.update.auto", false);
user_pref("app.update.service.enabled", false);
user_pref("app.update.url", "");
user_pref("app.update.url.details", "");
user_pref("app.update.url.manual", "");

// # URL paranoia
user_pref("app.feedback.baseURL", "");
user_pref("app.support.baseURL", "");
user_pref("app.support.e10sAccessibilityUrl", "");
user_pref("browser.aboutHomeSnippets.updateUrl", "https://127.0.0.1");
user_pref("breakpad.reportURL", "");
user_pref("browser.contentHandlers.types.0.uri", "");
user_pref("browser.customizemode.tip0.learnMoreUrl", "");
user_pref("browser.dictionaries.download.url", "");
user_pref("browser.healthreport.infoURL", "");
user_pref("browser.geolocation.warning.infoURL", "");
user_pref("browser.safebrowsing.appRepURL", "");
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.search.searchEnginesURL", "");
user_pref("browser.search.geoSpecificDefaults.url", "");
user_pref("browser.selfsupport.url", "");
user_pref("browser.uitour.themeOrigin", "");
user_pref("browser.uitour.url", "");
user_pref("browser.usedOnWindows10.introURL", "");
user_pref("captivedetect.canonicalURL", "");
user_pref("datareporting.healthreport.infoURL", "");
user_pref("devtools.devedition.promo.url", "");
user_pref("devtools.devices.url", "");
user_pref("devtools.gcli.imgurUploadURL", "");
user_pref("devtools.webide.adaptersAddonURL", "");
user_pref("devtools.webide.adbAddonURL", "");
user_pref("devtools.webide.addonsURL", "");
user_pref("devtools.webide.simulatorAddonsURL", "");
user_pref("devtools.webide.templatesURL", "");
user_pref("dom.push.serverURL", "");
user_pref("extensions.blocklist.url", "https://blocklist.addons.mozilla.org/blocklist/3/%APP_ID%/%APP_VERSION%/");
user_pref("experiments.manifest.uri", "");
user_pref("extensions.pocket.api", "");
user_pref("extensions.webservice.discoverURL", "http://127.0.0.1");
user_pref("gecko.handlerService.schemes.irc.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.ircs.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.webcal.0.uriTemplate", "");
user_pref("geo.wifi.uri", "https://127.0.0.1");
user_pref("lightweightThemes.getMoreURL", "");
user_pref("loop.facebook.fallbackUrl", "");
user_pref("loop.facebook.shareUrl", "");
user_pref("loop.feedback.formURL", "");
user_pref("loop.feedback.manualFormURL", "");
user_pref("loop.server", "");
user_pref("media.gmp-manager.url", "");
user_pref("plugins.update.url", "");
user_pref("privacy.trackingprotection.introURL", "");
user_pref("services.sync.fxa.privacyURL", "");
user_pref("services.sync.fxa.termsURL", "");
user_pref("services.sync.jpake.serverURL", "");
user_pref("security.ssl.errorReporting.url", "");
user_pref("services.sync.privacyURL", "")
user_pref("services.sync.serverURL", "");
user_pref("services.sync.statusURL", "");
user_pref("services.sync.syncKeyHelpURL", "");
user_pref("services.sync.termsURL", "");
user_pref("startup.homepage_override_url", "");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("toolkit.crashreporter.infoURL", "");
user_pref("toolkit.telemetry,infoURL", "");
user_pref("toolkit.telemetry.server", "");
user_pref("xpinstall.signatures.devInfoURL", "");

// # Disable safe browsing for privacy concerns. Be wary.
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);

// # Kill the new tab page bullshit.
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.directory.ping", "data:text/plain,");
user_pref("browser.newtabpage.directory.source", "data:text/plain,");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);

// # Stop search from doing its localization stuff.
user_pref("browser.search.countryCode", "US");
user_pref("browser.search.geoip.timeout", 1);
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.region", "US");
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.update", false);

// # Turn off data reporting capabilities.
user_pref("datareporting.healthreport.about.reportUrl", "data:text/plain,");
user_pref("datareporting.healthreport.about.reportUrlUnified", "data:text/plain,");
user_pref("datareporting.healthreport.documentServerURI", "");
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled.v2", false);

// # Turn off a bunch of developer tool stuff I never use.
user_pref("devtools.cache.disabled", true);
user_pref("devtools.debugger.enabled", false);
user_pref("devtools.fontinspector.enabled", false);
user_pref("devtools.netmonitor.enabled", false);
user_pref("devtools.netmonitor.statistics", false);
user_pref("devtools.performance.enabled", false);
user_pref("devtools.remote.wifi.scan", false);
user_pref("devtools.remote.wifi.visible", false);
user_pref("devtools.styleeditor.enabled", false);
user_pref("devtools.webide.enabled", false);
user_pref("devtools.webide.widget.autoinstall", false);

// # DOM API and events
user_pref("dom.allow_scripts_to_close_windows", false);
user_pref("dom.battery.enabled", false);
user_pref("dom.beforeAfterKeyboardEvent.enabled", false);
user_pref("dom.disable_window_flip", true);
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_window_open_feature.close", true);
user_pref("dom.disable_window_open_feature.location", true);
user_pref("dom.disable_window_open_feature.menubar", true);
user_pref("dom.disable_window_open_feature.minimizable", true);
user_pref("dom.disable_window_open_feature.personalbar", true);
user_pref("dom.disable_window_open_feature.resizable", true);
user_pref("dom.disable_window_open_feature.scrollbars", true);
user_pref("dom.disable_window_open_feature.status", true);
user_pref("dom.disable_window_open_feature.titlebar", true);
user_pref("dom.disable_window_open_feature.toolbar", true);
user_pref("dom.disable_window_status_change", true);
user_pref("dom.enable_performance", false);
user_pref("dom.enable_resource_timing", false);
user_pref("dom.enable_user_timing", false);
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("dom.gamepad.enabled", false);
user_pref("dom.idle-observers-api.enabled", false);
user_pref("dom.indexedDB.logging.enabled", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("dom.keyboardevent.code.enabled", false);
user_pref("dom.keyboardevent.dispatch_during_composition", false);
user_pref("dom.netinfo.enabled", false);
user_pref("dom.popup_maximum", 3);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.enabled", false);
user_pref("dom.push.udp.wakeupEnabled", false);
user_pref("dom.push.userAgentID", "");
user_pref("dom.serviceWorkers.enabled", false);
user_pref("dom.telephony.enabled", false);
user_pref("dom.vibrator.enabled", false);
user_pref("dom.vr.enabled", false);
user_pref("dom.vr.oculus.enabled", false);
user_pref("dom.vr.oculus050.enabled", false);
user_pref("dom.w3c_touch_events.enabled", 0);
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);
user_pref("dom.workers.enabled", false);

// # Extensions
user_pref("extensions.blocklist.enabled", true);
user_pref("extensions.dta.maxautoretries", -1);
user_pref("extensions.dta.maxchunks", 10);
user_pref("extensions.dta.resumeonerror", true);
user_pref("extensions.dta.serverlimit.perserver", 1);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.oAuthConsumerKey", "");
user_pref("extensions.pocket.site", "");
user_pref("extensions.update.autoUpdateDefault", false);
user_pref("extensions.update.enabled", false);

// # WebRTC
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);

// # Telemetry toolkit
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", true);

// # Experiments
user_pref("experiments.activeExperiment", false);
user_pref("experiments.enabled", false);
user_pref("experiments.supported", false);

// # Network prefetching
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);

// # SSL encryption behaviors
user_pref("security.ssl.disable_session_identifiers", true);
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
user_pref("security.ssl3.rsa_rc4_128_md5", false);
user_pref("security.ssl3.rsa_rc4_128_sha", false);
user_pref("security.tls.unrestricted_rc4_fallback", false);

// # JavaScript settings
user_pref("javascript.options.asmjs", false);
user_pref("javascript.options.baselinejit", false);
user_pref("javascript.options.ion", false);
user_pref("javascript.options.mem.high_water_mark", 32);
user_pref("javascript.use_us_english_locale", true);

// # Firefox hello (deprecated)
user_pref("loop.enabled", false);
user_pref("loop.facebook.appId", "");
user_pref("loop.facebook.enabled", false);
user_pref("loop.logDomains", false);

// # Geo logging
user_pref("geo.enabled", false);
user_pref("geo.wifi.logging.enabled", false);
user_pref("geo.wifi.xhr.timeout", 1);

// # Social
user_pref("social.directories", "");
user_pref("social.remote-install.enabled", false);
user_pref("social.share.activationPanelEnabled", false);
user_pref("social.shareDirectory", "");
user_pref("social.toast-notifications.enabled", false);
user_pref("social.whitelist", "");

// # Tracking protection
user_pref("privacy.trackingprotection.enabled", false);
user_pref("privacy.trackingprotection.pbmode.enabled", false);

// # Tabbed browsing behavior
user_pref("browser.ctrlTab.previews", true);
user_pref("browser.tabs.animate", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.tabs.insertRelatedAfterCurrent", true);
user_pref("browser.tabs.loadDivertedInBackground", false);
user_pref("browser.tabs.loadInBackground", true);
user_pref("browser.tabs.remote.autostart", true);
user_pref("browser.tabs.selectOwnerOnClose", true);
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);

// # Media settings
user_pref("media.autoplay.enabled", false);
user_pref("media.getusermedia.screensharing.allowed_domains", "");
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.mediasource.webm.enabled", true);
user_pref("media.navigator.enabled", false);
user_pref("media.video_stats.enabled", false);
user_pref("media.webspeech.recognition.enable", false);
user_pref("media.webspeech.synth.enabled", false);

// # General privacy settings
user_pref("beacon.enabled", false);
user_pref("browser.send_pings", false);
user_pref("clipboard.autocopy", false);
user_pref("device.sensors.enabled", false);
user_pref("device.storage.enabled", false);
user_pref("intl.accept_languages", "en-US, en");
user_pref("intl.locale.matchOS", false);
user_pref("general.useragent.locale", "en-US");
user_pref("camera.control.face_detection.enabled", false);
user_pref("browser.send_pings.require_same_host", true);

// # Startup profiling
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.samples", 0);

// # General behavior
user_pref("browser.offline-apps.notify", true);
user_pref("browser.backspace_action", 2);
user_pref("general.warnOnAboutConfig", false);
user_pref("browser.urlbar.clickSelectsAll", true);
user_pref("browser.urlbar.doubleClickSelectsAll", false);
user_pref("accessibility.blockautorefresh", true);
user_pref("browser.sessionstore.interval", 300000);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.startup.page", 0);
user_pref("layout.spellcheckDefault", 1);
user_pref("lightweightThemes.update.enabled", false);
user_pref("offline-apps.allow_by_default", false);
user_pref("plugins.update.notifyUser", false);
user_pref("browser.bookmarks.max_backups", 2);
user_pref("browser.rights.3.shown", true);
user_pref("stagefright.disabled", true);
user_pref("nglayout.enable_drag_images", false);

// # CSS settings
user_pref("layout.css.background-blend-mode.enabled", false);
user_pref("layout.css.filters.enabled", false);
user_pref("layout.css.font-loading-api.enabled", false);
user_pref("layout.css.report_errors", false);

// # Network performance
user_pref("network.allow-experiments", false);
user_pref("network.http.pipelining", true);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.manage-offline-status", false);
user_pref("network.protocol-handler.external.ms-windows-store", false);
user_pref("network.proxy.type", 0);

// # Fonts
user_pref("gfx.downloadable_fonts.disable_cache", true);
user_pref("gfx.downloadable_fonts.enabled", false);
user_pref("gfx.downloadable_fonts.woff2.enabled", false);
user_pref("gfx.font_loader.delay", 10000000);

// # Graphical performance
user_pref("layers.componentalpha.enabled", false);
user_pref("layers.deaa.enabled", false);
user_pref("image.downscale-during-decode.enabled", false);
user_pref("gfx.direct2d.disabled", true);
user_pref("image.mem.max_decoded_image_kb", 52000);
user_pref("nglayout.initialpaint.delay", 10);
user_pref("ui.submenuDelay", 75);
user_pref("layers.acceleration.disabled", true);
user_pref("browser.fullscreen.animate", false);

// # Testing pref for syntax errors.
user_pref("oceaniity.testing", 1);
