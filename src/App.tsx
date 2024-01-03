import { Input } from 'antd'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface Parameter {
    name: string
    ownAircraft: number
    prototypeAircraft: number
    unit: string
}

type TableState = { [index: number]: Parameter }

const Default: TableState = Object.assign([
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
])

export const App = () => {
    const [init, setInit] = useState<TableState>(Default)

    const { register, handleSubmit } = useForm()

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

    return (
        <form
            onSubmit={() => handleSubmit((data) => console.log(data))}
            className="mx-auto w-min font-jet"
        >
            <table className="border-collapse border border-slate-300">
                <thead>
                    <tr>
                        <th className="border border-slate-300 ...">
                            Параметр
                        </th>
                        <th className="border border-slate-300 px-5 py-3">
                            Проектируемый самолет
                        </th>
                        <th className="border border-slate-300 px-5 py-3">
                            Прототип
                        </th>
                        <th className="border border-slate-300 whitespace-nowrap px-5">
                            Ед. измерения
                        </th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {Object.entries(init).map((param, i) => (
                        <tr key={String(param[1].name + i)}>
                            <td className="border border-slate-300 whitespace-nowrap px-5">
                                {param[1].name}
                            </td>

                            <td className="border border-slate-300">
                                <Input
                                    defaultValue={param[1].ownAircraft}
                                    {...register(`Own.${param[1].name}`, {
                                        onChange: (event) =>
                                            handleOnChange({
                                                index: i,
                                                paramName: 'ownAircraft',
                                                newValue: Number(
                                                    event.currentTarget.value
                                                ),
                                            }),
                                    })}
                                    className={`font-jet text-center border-white hover:border-slate-100 hover:bg-slate-100
                                                 focus:bg-white rounded-none focus:border-white`}
                                />
                            </td>

                            <td className="border border-slate-300">
                                <Input
                                    defaultValue={param[1].prototypeAircraft}
                                    {...register(`Prototype.${param[1].name}`, {
                                        onChange: (event) =>
                                            handleOnChange({
                                                index: i,
                                                paramName: 'ownAircraft',
                                                newValue: Number(
                                                    event.currentTarget.value
                                                ),
                                            }),
                                    })}
                                    className="font-jet text-center border-white hover:border-slate-100 hover:bg-slate-100
                                                 focus:bg-white rounded-none focus:border-white"
                                />
                            </td>

                            <td className="border border-slate-300">
                                {param[1].unit}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button type="submit">Нажми</button>
        </form>
    )
}

export default App
