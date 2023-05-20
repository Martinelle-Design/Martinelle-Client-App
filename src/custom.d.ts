declare module "*.svg" {
  export const ReactComponent: React.FunctionComponent<
    React.SVGAttributes<SVGElement>
  >;
  export default ReactComponent;
}
declare module '*.txt' {
  const content: string;
  export default content;
}