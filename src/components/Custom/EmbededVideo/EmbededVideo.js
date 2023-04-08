import ReactPlayer from 'react-player'
import styles from './EmbededVideo.module.css'

import React from 'react'

function EmbededVideo({youtubeURL}) {
  return (
    <div className={`${styles.embeded_video}`}>
        <ReactPlayer 
            url={youtubeURL}
            width={'100%'}
            height={'100%'}
            style={{
                borderRadius: '6px',
            }}
        />
    </div>
  )
}

export default EmbededVideo