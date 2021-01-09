declare module "marketing/MarketingIndex" {
  const mount = (
    element: Element,
    extraArgs: { onNavigate?: LocationListener; initialPath?: string }
  ): { onParentNavigate: LocationListener } => {};

  export { mount };
}
