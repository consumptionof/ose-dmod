import DOLM from "../config";
import OseActorSheetCharacter from "./character-sheet";

export default class DolmActorSheetCharacter extends OseActorSheetCharacter {
  /**
   * Extend and override the default options used by the 5e Actor Sheet
   *
   * @returns {object} - The default options for this sheet.
   */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["ose", "sheet", "actor", "character"],
      template: `${DOLM.systemPath()}/templates/actors/character-sheet.html`,
      width: 450,
      height: 530,
      resizable: true,
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "attributes",
        },
      ],
      scrollY: [".inventory"],
    });
  }
}