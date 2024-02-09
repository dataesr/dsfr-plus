import { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';
type ColSizeNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type ColSizeString = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
type ColSize = ColSizeString | ColSizeNumber;
type ColBaseProps = {
    className?: Argument;
    xs?: ColSize;
    sm?: ColSize;
    md?: ColSize;
    lg?: ColSize;
    xl?: ColSize;
    offsetXs?: ColSize;
    offsetSm?: ColSize;
    offsetMd?: ColSize;
    offsetLg?: ColSize;
    offsetXl?: ColSize;
};
export type ColProps = Merge<React.HTMLAttributes<HTMLDivElement>, ColBaseProps>;
export declare const Col: React.FC<ColProps>;
export {};
//# sourceMappingURL=Col.d.ts.map