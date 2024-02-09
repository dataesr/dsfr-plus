import React from 'react';
import { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';
export type ModalCloseProps = Merge<React.HTMLAttributes<HTMLButtonElement>, {
    controls?: string;
    className?: Argument;
}>;
export declare const ModalClose: React.FC<ModalCloseProps>;
export default ModalClose;
//# sourceMappingURL=ModalClose.d.ts.map