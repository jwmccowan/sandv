export const preloadTemplates = async function () {
  const templatePaths = [
    'systems/sandv/templates/character/character-actor-sheet.html',
  ];

  return loadTemplates(templatePaths);
};
