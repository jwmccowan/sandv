export const preloadTemplates = async function () {
  const templatePaths = [
    'systems/sandv/templates/character/character-actor-sheet.html',
    'systems/sandv/templates/character/parts/attributes.html',
    'systems/sandv/templates/character/parts/stress-trauma.html',
    'systems/sandv/templates/character/parts/harm-recovery.html',
  ];

  return loadTemplates(templatePaths);
};
