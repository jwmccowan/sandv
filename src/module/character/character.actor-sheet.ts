import { CharacterActor } from './character.actor';

interface CharacterActorSheetData extends ActorSheetData<CharacterDataType> {
  // Can extend for sheet specific or derived stats
}

export class CharacterActorSheet extends ActorSheet<
  CharacterDataType,
  CharacterActor
> {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ['sandv', 'character', 'sheet', 'actor'],
      template: 'systems/sandv/templates/character/character-actor-sheet.html',
      width: 800,
      height: 600,
      tabs: [
        {
          navSelector: '.sheet-tabs',
          contentSelector: '.sheet-body',
          initial: 'description',
        },
      ],
    });
  }

  // Dude honestly I don't know how this is going to go, types seem fucky
  public getData() {
    const actorSheetData = <CharacterActorSheetData>super.getData();
    console.log('eggs', this.actor.data.data, actorSheetData);
    return actorSheetData;
  }

  public activateListeners(html: JQuery<HTMLElement>): void {
    super.activateListeners(html);

    if (!this.options.editable) {
      return;
    }

    html.find('.hello').on('click', this.onHelloClick.bind(this));
  }

  private onHelloClick(ev: JQuery.ClickEvent): void {
    console.log('hello');
    this.actor.update({ name: 'Badda Bing' });
  }
}
