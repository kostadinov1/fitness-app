
import React from 'react'

function GridActivity({activity}) {
  return (
    <div>
      {activity.name}
      {activity.duration}
      {activity['start_time']?.slice(0,10)}

    </div>
  )
}

export default GridActivity
