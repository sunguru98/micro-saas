declare module "auth/AuthIndex" {
  const mount = (
    element: Element,
    extraArgs: {
      onNavigate?: LocationListener;
      initialPath?: string;
      onSignIn: () => {};
    }
  ): { onParentNavigate: LocationListener } => {};

  export { mount };
}
