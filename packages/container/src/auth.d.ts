declare module "auth/AuthIndex" {
  const mount = (
    element: Element,
    extraArgs: {
      onNavigate?: LocationListener;
      initialPath?: string;
      onSignIn: (user: { email: string }) => void;
    }
  ): { onParentNavigate: LocationListener } => {};

  export { mount };
}
