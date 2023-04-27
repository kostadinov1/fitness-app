import { ResponsiveCalendar } from '@nivo/calendar'

const ActivityCalendar = ({activities}) => {
    
    const activitiesMapped = activities.map((act) => ({value: act.duration,
        day: act.start_time?.slice(0,10),
    }))
    
    return(
        <ResponsiveCalendar
            data={activitiesMapped}
            from="2023-01-01"
            to="2023-12-31"
            emptyColor="#77767b"
            colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
            margin={{ top: 2, right: 0, bottom: 2, left: 0 }}
            yearSpacing={40}
            yearLegendOffset={6}
            monthSpacing={10}
            monthBorderWidth={1}
            monthBorderColor="#058fae"
            monthLegendOffset={6}
            daySpacing={1}
            dayBorderWidth={2}
            dayBorderColor="#058fae"
            // tooltip={function(n){}}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'row',
                    translateY: 36,
                    itemCount: 4,
                    itemWidth: 42,
                    itemHeight: 36,
                    itemsSpacing: 14,
                    itemDirection: 'right-to-left'
                }
            ]}
        />
    )
}
export  default ActivityCalendar