import { ResponsivePie } from '@nivo/pie'
import { useNavigate } from 'react-router-dom'


const PieMacroChart = ({macroCycle}) => {
    const navigate = useNavigate()
    const mesoCycles = macroCycle.meso_cycles
    // TODO Create duration property/field in Django Model
    // duration from start date to end date in days 

    const cycleDuration = (start_date, end_date) => {
		const singleDay = 1000 * 60 * 60 * 24
		const startDate = new Date(start_date)
		const endDate = new Date(end_date)
		const res = Math.round(endDate.getTime() - startDate.getTime()) / singleDay;
		const result = res.toFixed(0);
		return result
	}


    const mesoCyclesData = mesoCycles.map((cycle) => ({
        'id': cycle.id,
        'label': cycle.name,
        'value': cycleDuration(cycle.start_date, cycle.end_date),
        "color": "hsl(251, 70%, 50%)"
    }))


    const onChartClick = (data) => {
        // TODO CHANGE URL when meso cycle details is ready
        // `/meso_cycle/${data.id}`
        // navigate('/')
        console.log(data)
    }

    return (
        <ResponsivePie
            data={mesoCyclesData}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            onClick={(data) => onChartClick(data)}
            innerRadius={0.1}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.2
                    ]
                ]
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor='var(--sec-2)'
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2
                        ]
                    ]
                }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
                legends={[
                    {
                        anchor: 'left',
                        direction: 'column',
                        justify: false,
                        translateX: -45,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 28,
                        itemTextColor: 'var(--sec-2)',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: 'var(--acc-2)'
                                }
                            }
                        ]
                    }
                ]}
            />
        )
    }


export default PieMacroChart