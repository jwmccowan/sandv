/**
 * This is your TypeScript entry file for Foundry VTT.
 * Register custom settings, sheets, and constants using the Foundry API.
 * Change this heading to be more descriptive to your system, or remove it.
 * Author: [your name]
 * Content License: [copyright and-or license] If using an existing system
 * 					you may want to put a (link to a) license or copyright
 * 					notice here (e.g. the OGL).
 * Software License: [your license] Put your desired license here, which
 * 					 determines how others may use and modify your system
 */

// Import TypeScript modules
import { registerSettings } from './module/settings.js';
import { preloadTemplates } from './module/preloadTemplates.js';
import { CharacterActor } from './module/character/character.actor.js';
import { CharacterActorSheet } from './module/character/character.actor-sheet.js';

/* ------------------------------------ */
/* Initialize system					*/
/* ------------------------------------ */
Hooks.once('init', async function () {
  console.log('sandv | Initializing sandv');

  // Assign custom classes and constants here

  // Register custom system settings
  registerSettings();
  // TODO: bad!
  CONFIG.Actor.entityClass = <never>CharacterActor;

  Actors.unregisterSheet('core', ActorSheet);
  Actors.registerSheet('sandv', CharacterActorSheet, {
    types: ['character'],
    makeDefault: true,
  });
  // Actors.registerSheet('sandv', CharacterActorSheet, {
  //   types: ['npc'],
  //   makeDefault: true,
  // });

  // Preload Handlebars templates
  await preloadTemplates();

  // Register custom sheets (if any)
});

/* ------------------------------------ */
/* Setup system							*/
/* ------------------------------------ */
Hooks.once('setup', function () {
  // Do anything after initialization but before
  // ready
});

/* ------------------------------------ */
/* When ready							*/
/* ------------------------------------ */
Hooks.once('ready', function () {
  // Do anything once the system is ready
});

// Add any additional hooks if necessary
// Multiboxes.
Handlebars.registerHelper('multiboxes', function (selected, options) {
  let html = options.fn(this);
  console.log('eggs', selected, typeof selected);

  // Fix for single non-array values.
  if (!Array.isArray(selected)) {
    selected = [selected];
  }

  if (typeof selected !== 'undefined') {
    selected.forEach(selected_value => {
      if (selected_value !== false) {
        const escapedValue = escapeRegExp(
          Handlebars.escapeExpression(selected_value),
        );
        const rgx = new RegExp(' value="' + escapedValue + '"');
        html = html.replace(rgx, '$& checked="checked"');
      }
    });
  }
  return html;
});

Handlebars.registerHelper(
  'from_to',
  function (from: number, to: number, block) {
    var accum = '';
    for (var i = from; i <= to; ++i) {
      accum += block.fn(i);
    }
    return accum;
  },
);

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
