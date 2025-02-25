if ("__TAURI__" in window) {
	var __TAURI_PLUGIN_OS__ = (function (_) {
		"use strict";
		async function n(_, n = {}, o) {
			return window.__TAURI_INTERNALS__.invoke(_, n, o);
		}
		return (
			"function" == typeof SuppressedError && SuppressedError,
			(_.arch = function () {
				return window.__TAURI_OS_PLUGIN_INTERNALS__.arch;
			}),
			(_.eol = function () {
				return window.__TAURI_OS_PLUGIN_INTERNALS__.eol;
			}),
			(_.exeExtension = function () {
				return window.__TAURI_OS_PLUGIN_INTERNALS__.exe_extension;
			}),
			(_.family = function () {
				return window.__TAURI_OS_PLUGIN_INTERNALS__.family;
			}),
			(_.hostname = async function () {
				return await n("plugin:os|hostname");
			}),
			(_.locale = async function () {
				return await n("plugin:os|locale");
			}),
			(_.platform = function () {
				return window.__TAURI_OS_PLUGIN_INTERNALS__.platform;
			}),
			(_.type = function () {
				return window.__TAURI_OS_PLUGIN_INTERNALS__.os_type;
			}),
			(_.version = function () {
				return window.__TAURI_OS_PLUGIN_INTERNALS__.version;
			}),
			_
		);
	})({});
	Object.defineProperty(window.__TAURI__, "os", {
		value: __TAURI_PLUGIN_OS__,
	});
}
