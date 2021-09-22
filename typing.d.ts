declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
declare module "*.scss" {
  const content: string;
  export default content;
}

type SvgrComponent = React.StatelessComponent<React.SVGAttributes<SVGElement>>;

declare module "*.svg" {
  const svgUrl: string;
 
}
