export default (currentConfig, currentIndex, value, key) => ({
  ...currentConfig,
  addedSections: [
    ...currentConfig.addedSections.slice(0, currentIndex),
    {
      ...currentConfig.addedSections[currentIndex],
      options: {
        ...currentConfig.addedSections[currentIndex].options,
        [key]: value,
      },
    },
    ...currentConfig.addedSections.slice(currentIndex + 1),
  ],
});
