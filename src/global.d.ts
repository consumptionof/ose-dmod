import type { DolmConfig } from "./module/config";

declare global {
  interface LenientGlobalVariableTypes {
    // Allowing game to be accessible as a typescript type regardless of whether or not the object has been initialized.
    // See documentation for LenientGlobalVariableTypes in @league-of-foundry-developers/foundry-vtt-types
    module: never;
    canvas: never;
  }

  interface CONFIG {
    DOLM: DolmConfig;
  }
  
  namespace Game {
    interface ModuleData<T> {
      /**
       * Defining game.system.id as a const
       */
      id: "ose-dmod";
    }
  }
}
