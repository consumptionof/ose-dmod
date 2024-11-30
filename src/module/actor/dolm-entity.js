import OseActor from "../import-ose";

import DolmDice from "../dolm-dice";

export default class DolmActor extends OseActor {

  rollSave(save, options = {}) {
    const label = game.i18n.localize(`OSE.saves.${save}.long`);
    const rollParts = ["1d20"];
    const actorData = this.system;
    const actorType = this.type;

    const data = {
      actor: this,
      roll: {
        type: "above",
        target: actorData.saves[save].value,
        magic: actorType === "character" ? actorData.scores.wis.mod : 0,
      },
      details: game.i18n.format("OSE.roll.details.save", { save: label }),
    };

    const rollMethod =
      actorType === "character" ? DolmDice.RollSave : DolmDice.Roll;

    // Roll and return
    return rollMethod({
      event: options.event,
      parts: rollParts,
      data,
      skipDialog: options.fastForward || skipRollDialogCheck(options.event),
      speaker: ChatMessage.getSpeaker({ actor: this }),
      flavor: game.i18n.format("OSE.roll.save", { save: label }),
      title: game.i18n.format("OSE.roll.save", { save: label }),
      chatMessage: options.chatMessage,
    });
  }

  rollExploration(expl, options = {}) {
    const actorType = this.type;
    if (actorType !== "character") return;
    const actorData = this.system;

    const label = game.i18n.localize(`OSE.exploration.${expl}.long`);
    const rollParts = ["1d6"];

    const data = {
      actor: this,
      roll: {
        type: "exploration",
        target: actorData.exploration[expl],
        blindroll: true,
      },
      details: game.i18n.format("OSE.roll.details.exploration", {
        expl: label,
      }),
    };

    // Roll and return
    return DolmDice.Roll({
      event: options.event,
      parts: rollParts,
      data,
      skipDialog: options.fastForward || skipRollDialogCheck(options.event),
      speaker: ChatMessage.getSpeaker({ actor: this }),
      flavor: game.i18n.format("OSE.roll.exploration", { exploration: label }),
      title: game.i18n.format("OSE.roll.exploration", { exploration: label }),
    });
  }
}