declare module "marketing/MarketingIndex" {
  const mount = (
    element: Element,
    { onNavigate }: { onNavigate?: LocationListener }
  ): { onParentNavigate: LocationListener } => {};

  export { mount };
}
