// SPDX-FileCopyrightText: 2022 Johannes Loher
//
// SPDX-License-Identifier: MIT

export async function preloadTemplates() {
  const templatePaths = [
    // Add paths to "modules/ose-dolm-alt/templates"
  ];

  return loadTemplates(templatePaths);
}
