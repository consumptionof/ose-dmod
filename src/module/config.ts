/**
 * @file System-wide configuration settings. Mostly grabs OSE-specific stuff and also the Dolmenwood stats.
 */

export type DolmConfig = typeof DOLM;

export const DOLM = {
  modulePath(): string {
    return `${this.moduleRoot}/dist`;
  },
  get moduleRoot(): string {
    return `/modules/ose-dolmenwood-module`;
  },
  dolmenwood_skills: {
    l: "dolm.exploration.l.long",
    s: "dolm.exploration.s.long",
    u: "dolm.exploration.u.long",
  },
  dolmenwood_skills_short: {
    l: "dolm.exploration.l.abrev",
    s: "dolm.exploration.s.abrev",
    u: "dolm.exploration.u.abrev",
  }
}

export default DOLM;