import DOLM from "../config";
import { OseActorSheetMonster } from "../import-ose";

export default class DolmActorSheetMonster extends OseActorSheetMonster {
  /**
   * Extend and override the default options used by the Actor Sheet
   *
   * @returns {object} - The sheet's default options
   */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["ose", "sheet", "monster", "actor"],
      template: `${DOLM.systemPath()}/templates/actors/monster-sheet.html`,
      width: 450,
      height: 560,
      resizable: true,
      tabs: [
        {
          navSelector: ".tabs",
          contentSelector: ".sheet-body",
          initial: "attributes",
        },
      ],
    });
  }
}