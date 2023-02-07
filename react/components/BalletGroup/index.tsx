import React, { PropsWithChildren } from "react";
import { useListContext } from 'vtex.list-context';
import { BulletsSchema } from './BulletTypes';
import { useDevice } from 'vtex.device-detector';
import { getBulletsAsTSXList } from "./modules/bulletsAstList";

export interface BulletGroupProps {
    bullets: BulletsSchema
}

const BulletGroup = ({
    bullets,
    children
}: PropsWithChildren<BulletGroupProps>) => {
    const { isMobile } = useDevice();
    const { list } = useListContext() || [];

    console.log("bullets", list)

    const bulletsContent = getBulletsAsTSXList(bullets);

    if (false) {
        console.log(children, bullets)
    }
    return (
        isMobile ?
            <div>Estamos en mobile</div>
            :
            <div>{bulletsContent}</div>
    )
}

export default BulletGroup;