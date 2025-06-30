export const loadState = () => {
  try {
    const persistedState = localStorage.getItem("moderationAppPersistState");
    return persistedState ? JSON.parse(persistedState) : undefined;
  } catch (e) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const persistedState = JSON.stringify(state);
    localStorage.setItem("moderationAppPersistState", persistedState);
  } catch (e) {
    console.log("Error saving state in localstorage!");
  }
};
