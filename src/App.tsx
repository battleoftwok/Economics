import { useState } from 'react'

interface Parameter {
    name: string
    ownAircraft: number
    prototypeAircraft: number
    unit: string
}

const Default = [
    {
        name: 'Крейсерская скорость',
        ownAircraft: 1400,
        prototypeAircraft: 100,
        unit: 'м/с',
    },
    {
        name: 'Крейсерская высота',
        ownAircraft: 100,
        prototypeAircraft: 100,
        unit: 'км',
    },
    {
        name: 'Расчетная дальность полета',
        ownAircraft: 100,
        prototypeAircraft: 100,
        unit: 'км',
    },
    {
        name: 'Масса пустого самолета',
        ownAircraft: 100,
        prototypeAircraft: 100,
        unit: 'кг',
    },
]

export const App = () => {
    const [init, setInit] = useState<{ [index: number]: Parameter }>(
        Object.assign(Default)
    )

    const handleOnChange = (props: {
        index: number
        paramName: string
        newValue: number
    }) => {
        setInit({
            ...init,
            [props.index]: {
                ...init[props.index],
                [props.paramName]: props.newValue,
            },
        })
    }

    console.log(Object.entries(init))

    return (
        <div className="mx-auto w-min">
            <table className="border-collapse border border-slate-500">
                <thead>
                    <tr>
                        <th className="border border-slate-600 ...">
                            Параметр
                        </th>
                        <th className="border border-slate-600 px-5 py-3">
                            Проектируемый самолет
                        </th>
                        <th className="border border-slate-600 px-5 py-3">
                            Прототип
                        </th>
                        <th className="border border-slate-600 whitespace-nowrap px-5">
                            Ед. измерения
                        </th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {Object.entries(init).map((param, i) => (
                        <tr key={String(param[1].name + i)}>
                            <td className="border border-slate-700 whitespace-nowrap px-5">
                                {param[1].name}
                            </td>

                            <td className="border border-slate-700">
                                <input
                                    defaultValue={param[1].ownAircraft}
                                    onChange={(event) =>
                                        handleOnChange({
                                            index: i,
                                            paramName: 'ownAircraft',
                                            newValue: Number(
                                                event.currentTarget.value
                                            ),
                                        })
                                    }
                                    className={`text-center`}
                                />
                            </td>

                            <td className="border border-slate-700">
                                <input 
                                    defaultValue={param[1].prototypeAircraft}
                                    onChange={(event) =>
                                        handleOnChange({
                                            index: i,
                                            paramName: 'prototypeAircraft',
                                            newValue: Number(
                                                event.currentTarget.value
                                            ),
                                        })
                                    }
                                    className=" text-center" />
                            </td>

                            <td className="border border-slate-700">
                                {param[1].unit}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default App
