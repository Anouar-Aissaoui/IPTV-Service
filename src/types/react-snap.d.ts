interface Window {
  snapSaveState?: () => {
    __PRELOADED_STATE__: Record<string, unknown>;
  };
}