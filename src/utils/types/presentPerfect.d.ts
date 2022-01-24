declare type PresentPerfect = {
    longForm: Array<PresentPerfectItem>,
    shortForm: Array<PresentPerfectItem>,
}

declare type PresentPerfectItem = {
    verb: string,
    subject: string,
    auxiliaryVerb: string
}