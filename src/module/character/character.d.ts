declare type AbilityScoreKey = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';

declare interface AbilityScore {
  base: number;
}

declare interface FullStats {
  abilityScores: Record<AbilityScoreKey, AbilityScore>;
}

declare interface HealthStat {
  max: number;
  min: number;
  value: number;
}

declare interface BaseActorDataType {
  health: HealthStat;
}

declare interface CharacterDataType extends BaseActorDataType, FullStats {}
