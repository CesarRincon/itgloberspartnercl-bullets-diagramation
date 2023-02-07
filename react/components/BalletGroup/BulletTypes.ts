export type BulletsSchema = Array<{
    image: string
    title: string
    link?: Link
}>

export interface Link {
    url: string
    attributeNoFollow: boolean
    attributeTitle?: string
    openNewTab?: boolean
    newTab?: boolean
}