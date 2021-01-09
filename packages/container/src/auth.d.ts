declare module "auth/AuthIndex" {
  const mount = (
    element: Element,
    { onNavigate }: { onNavigate?: LocationListener }
  ): { onParentNavigate: LocationListener } => {};

  export { mount };
}
