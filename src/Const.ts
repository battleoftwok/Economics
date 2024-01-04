export interface Parameter {
    name: string
    ownAircraft: number
    prototypeAircraft: number
    unit: string
}

export interface Form {
    Own: {[name: string]: number},
    Prototype: {[name: string]: number}
}

export type TableState = { [index: number]: Parameter }

export const Default: TableState = Object.assign([
    {
        name: 'Крейсерская скорость',
        ownAircraft: 600,
        prototypeAircraft: 540,
        unit: 'м/с',
    },
    {
        name: 'Крейсерская высота',
        ownAircraft: 8,
        prototypeAircraft: 8,
        unit: 'км',
    },
    {
        name: 'Расчетная дальность полета',
        ownAircraft: 3000,
        prototypeAircraft: 2869,
        unit: 'км',
    },
    {
        name: 'Масса пустого самолета',
        ownAircraft: 13800,
        prototypeAircraft: 13800,
        unit: 'кг',
    },
    {
        name: 'Взлетная масса',
        ownAircraft: 22800,
        prototypeAircraft: 22800,
        unit: 'кг',
    },
    {
        name: 'Масса целевой нагрузки',
        ownAircraft: 5000,
        prototypeAircraft: 5900,
        unit: 'кг',
    },
])