import DOLM from "./config";
import DolmActor from "./actor/dolm-entity";
import DolmActorSheetCharacter from "./actor/dolm-character-sheet";
import DolmActorSheetMonster from "./actor/dolm-monster";

import { OseDataModelCharacter } from "./import-ose";
import { OseDataModelMonster } from "./import-ose";


Hooks.once("init", async () => {
  registerFVTTModuleAPIs();

  CONFIG.Actor.documentClass = DolmActor;

  CONFIG.Actor.systemDataModels = {
    character: OseDataModelCharacter,
    monster: OseDataModelMonster,
  }
  Actors.registerSheet(game.system.id, DolmActorSheetCharacter, {
    types: ["character"],
    makeDefault: false,
    label: "DOLM.SheetClassCharacter",
  });
  Actors.registerSheet(game.system.id, DolmActorSheetMonster, {
    types: ["monster"],
    makeDefault: false,
    label: "DOLM.SheetClassMonster",
  });

  await loadTemplates();
});