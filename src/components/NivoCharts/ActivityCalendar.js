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
            emptyColor="#e6f4f1"
            colors={[ 'lightblue', 'yellowgreen', '#fc8f3a', 'orangered' ]}
            margin={{ top: 0, right: 0, bottom: 0, left: 10 }}
            yearSpacing={40}
            yearLegendOffset={6}
            monthSpacing={8}
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