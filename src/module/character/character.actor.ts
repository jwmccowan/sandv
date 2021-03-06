export class CharacterActor extends Actor<CharacterDataType> {
  public prepareData() {
    super.prepareData();

    const actorData = this.data;
    const { data, flags, type } = actorData;
    console.log('eggs', 'actorData', actorData);

    if (type === 'character') {
      this._prepareCharacterData(actorData);
    }
  }

  /**
   * Prepare Character type specific data
   */
  private _prepareCharacterData({ data }: ActorData<CharacterDataType>) {
    // Make modifications to data here, for derived stats
    // TODO: what's clearest way to type derived stats?
  }
}
