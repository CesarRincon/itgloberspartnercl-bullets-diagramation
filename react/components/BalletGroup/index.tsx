import React, { PropsWithChildren } from "react";
//@ts-ignore
import { useListContext, ListContextProvider } from 'vtex.list-context';
//@ts-ignore
import { useDevice } from 'vtex.device-detector';
import { BulletsSchema } from './BulletTypes';
import { getBulletsAsTSXList } from "./modules/bulletsAstList";
//@ts-ignore
import { useCssHandles } from 'vtex.css-handles'

export interface BulletGroupProps {
    bullets: BulletsSchema
}

const BulletGroup = ({
    bullets,
    children
}: PropsWithChildren<BulletGroupProps>) => {
    const { isMobile } = useDevice();
    const { list } = useListContext() || [];

    const bulletsGroup = getBulletsAsTSXList(bullets);
    const newListContextValue = list.concat(bulletsGroup);

    const CSS_HANDLES = ["bullet__container"]
    const handles = useCssHandles(CSS_HANDLES)

    return (
        <ListContextProvider list={newListContextValue}>
            {
                isMobile ?
                    <div className={handles.bullet__container}>
                        {bulletsGroup}
                    </div>
                    :
                    children
            }
        </ListContextProvider>
    )
}

export default BulletGroup;