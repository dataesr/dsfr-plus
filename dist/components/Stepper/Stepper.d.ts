import { Argument, ArgumentArray } from 'classnames';
import { Merge } from '../../types/polymophic';
type StepperCss = {
    "fr-stepper__title": Argument | ArgumentArray;
    "fr-stepper__state": Argument | ArgumentArray;
    "fr-stepper__steps": Argument | ArgumentArray;
    "fr-stepper__details": Argument | ArgumentArray;
};
export type StepperProps = Merge<React.HTMLAttributes<HTMLDivElement>, {
    className?: Argument | ArgumentArray;
    css?: StepperCss;
    currentStep: number;
    steps: number;
    titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    currentTitle?: React.ReactNode[] | React.ReactNode | string;
    nextStepTitle?: React.ReactNode[] | React.ReactNode | string;
}>;
export declare const Stepper: ({ className, currentStep, currentTitle, nextStepTitle, steps, titleAs: TitleAs, ...props }: StepperProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Stepper.d.ts.map