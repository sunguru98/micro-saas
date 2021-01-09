declare module "auth/AuthIndex" {
  const mount = (
    element: Element,
    extraArgs: { onNavigate?: LocationListener; initialPath?: string }
  ): { onParentNavigate: LocationListener } => {};

  export { mount };
}
