import { Argument } from 'classnames';
import { OnlyAs } from 'react-polymorphed';
type ContainerProps = React.PropsWithChildren<{
    fluid?: boolean;
    fluidFrom?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    className?: Argument;
}>;
export declare const Container: import("react-polymorphed").PolyForwardComponent<"div", ContainerProps, OnlyAs<"article" | "aside" | "div" | "footer" | "header" | "main" | "nav" | "section">>;
export {};
//# sourceMappingURL=Container.d.ts.map