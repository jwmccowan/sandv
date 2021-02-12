declare interface CharacterDataType
  extends HasAttributes,
    HasCharacterDetails,
    HasHealth {}

declare interface HasCharacterDetails {
  details: CharacterDetails;
}

declare interface CharacterDetails {
  alias: string;
}

declare interface HasHealth {
  harm: Harm;
  stress: Stress;
  trauma: Trauma;
}

declare interface Harm {
  deadly: SingleElementHarm;
  heavy: SingleElementHarm;
  light: DoubleElementHarm;
  medium: DoubleElementHarm;
}

declare interface SingleElementHarm {
  one: string;
}

declare interface DoubleElementHarm extends SingleElementHarm {
  two: string;
}

declare interface Stress {
  label_default: string;
  label: string;
  max_default: number;
  max: number;
  value: number[];
}

type Traumum =
  | 'cold'
  | 'haunted'
  | 'obsessed'
  | 'paranoid'
  | 'reckless'
  | 'soft'
  | 'unstable'
  | 'vicious';

declare interface Trauma extends Stress {
  list: Partial<Record<Traumum, boolean>>;
}

declare interface HasAttributes {
  attributes: Attributes;
}

type Attributes = {
  insight: Record<InsightSkillKey, Skill> & Skill;
  prowess: Record<ProwessSkillKey, Skill> & Skill;
  resolve: Record<ResolveSkillKey, Skill> & Skill;
};

type AttributeKey = keyof Attributes;

declare type InsightSkillKey = 'doctor' | 'hack' | 'rig' | 'study';
declare type ProwessSkillKey = 'helm' | 'scramble' | 'scrap' | 'skulk';
declare type ResolveSkillKey = 'attune' | 'command' | 'consort' | 'sway';

declare interface Skill {
  exp: number[];
  label: string;
}
