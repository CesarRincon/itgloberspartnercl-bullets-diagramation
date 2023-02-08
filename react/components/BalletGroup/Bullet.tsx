import React from "react";
//@ts-ignore
import { Link } from "vtex.render-runtime";
import { LinkProps } from "./BulletTypes";
//@ts-ignore
import { useCssHandles } from 'vtex.css-handles'
//@ts-ignore
import { useDevice } from 'vtex.device-detector';

import "./styles.css"

type Props = {
    src: string
    secondarySrc: string
    titleBullet: string
    link: LinkProps
}

const Bullet = ({ src, secondarySrc, titleBullet, link }: Props) => {

    const CSS_HANDLES = [
        "bullet__item",
        "bullet__item--title",
        "bullet__item--image",
        "bullet__item--Secondary-image",
        "bullet__item--link"
    ]

    const handles = useCssHandles(CSS_HANDLES)
    const { isMobile } = useDevice();

    return (
        <div className={handles.bullet__item}>
            <Link
                to={link.url}
                className={handles["bullet__item--link"]}
            >
                <img className={`${handles["bullet__item--image"]} externalClass`} src={src} alt={titleBullet} />
                {
                    !isMobile &&
                    secondarySrc &&
                    <img className={`${handles["bullet__item--Secondary-image"]} externalClass`} src={secondarySrc} alt={titleBullet} />
                }
                <p className={handles["bullet__item--title"]}>{titleBullet}</p>
            </Link>
        </div>
    )
}

Bullet.schema = {
    title: "Bullet",
    type: "object",
    properties: {
        src: {
            title: "Imagen de Bullet",
            type: "string",
            widget: {
                "ul.widget": "image-uploader"
            }
        },
        secondarySrc: {
            title: "Imagen secundaria de Bullet",
            type: "string",
            widget: {
                "ul.widget": "image-uploader"
            }
        }

    }
}

export default Bullet