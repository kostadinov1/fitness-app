import { ResponsiveNetwork } from '@nivo/network'
import { useState } from 'react'
import CycleTooltip from './ToolTips/CycleTooltip/CycleTooltip'
import styles from './HierarchyTree.module.css'

const HierarchyTree = ({ data /* see data tab */ }) => {
    const [currentNode, setCurrentNode] = useState({})
        
    const onNetworkChange = (node, event) => {
        setCurrentNode(node.data)
        console.log(node.id, currentNode, 'node event onNetworkChange');
    }
    return (
        <>
            <div className={`${styles.cycle_data}`}>
                {/* <h1>{currentNode.cycleType}</h1>
                <span>Cycle: {currentNode.name}</span>
                <span>Start Date: {currentNode.start_date}</span>
                <span>End Date: {currentNode.end_date}</span> */}

            </div>
            <ResponsiveNetwork
                onClick={onNetworkChange}
                // onMouseEnter={onNetworkChange}
                data={data}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                linkDistance={e=>e.distance}
                centeringStrength={0.3}
                repulsivity={50}
                nodeSize={n=>n.size}
                activeNodeSize={n=>1.1*n.size}
                nodeTooltip={()=> <CycleTooltip />}
                nodeColor={e=>e.color}
                nodeBorderWidth={1}
                nodeBorderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.8
                        ]
                    ]
                }}
                linkThickness={n=>2+2*n.target.data.height}
                linkBlendMode="multiply"
            />

        </>
            )
    }

export default HierarchyTree