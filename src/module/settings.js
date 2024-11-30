// SPDX-FileCopyrightText: 2022 Johannes Loher
//
// SPDX-License-Identifier: MIT

export function registerSettings() {
  // Register any custom module settings here
  game.registerSettings(game.system.id, "moduleEnabled" , {
    name: game.i18n.localize("dolm.Setting.Enabled"),
    hint: game.i18n.localize("dolm.Setting.EnabledHint"),
    default: "group",
    scope: "world",
    type: Boolean,
    requiresReload: true,
  })
}
