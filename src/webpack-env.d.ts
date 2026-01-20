declare module '*.svg?react' {
  import type { FunctionComponent, SVGProps } from 'react';
  const ReactComponent: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}

declare module '*.svg?url' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  import type { FunctionComponent, SVGProps } from 'react';
  const ReactComponent: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '*.woff' {
  const content: string;
  export default content;
}

declare module '*.woff2' {
  const content: string;
  export default content;
}

declare module '*.ttf' {
  const content: string;
  export default content;
}

declare module '*.otf' {
  const content: string;
  export default content;
}

declare module '*.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.css?inline' {
  const content: string;
  export default content;
}
