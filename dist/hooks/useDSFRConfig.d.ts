type ConfigContextObject = {
    routerComponent?: React.ElementType;
    defaultLang?: string;
    extendRequiredFieldsLabelsWith?: React.ReactNode;
    extendOptionalFieldsLabelsWith?: React.ReactNode;
    verbose?: boolean;
    locale?: string;
    setLocale?: (lang: string) => void;
};
export type DSFRConfigProps = React.PropsWithChildren<ConfigContextObject>;
export declare const DSFRConfig: ({ children, routerComponent, extendRequiredFieldsLabelsWith, extendOptionalFieldsLabelsWith, defaultLang, verbose, }: DSFRConfigProps) => import("react/jsx-runtime").JSX.Element;
export declare const useDSFRConfig: () => ConfigContextObject;
export {};
//# sourceMappingURL=useDSFRConfig.d.ts.map