import { ResponsiveNetwork } from '@nivo/network'
import { useState } from 'react'
import CycleTooltip from './ToolTips/CycleTooltip/CycleTooltip'

const HierarchyTree = ({ data /* see data tab */ }) => {
    const [currentNode, setCurrentNode] = useState({})
        
    const onNetworkChange = (node, event) => {
        setCurrentNode(node)
        console.log(node.id, 'node event onNetworkChange');
    }
    return (
        <>
        <div style={{fontSize: '3rem'}} >{currentNode?.id}</div>
            <ResponsiveNetwork
                onClick={onNetworkChange}
                data={data}
                margin={{ top: 0, right: 0, bottom: 20, left: 0 }}
                linkDistance={e=>e.distance}
                centeringStrength={1}
                repulsivity={100}
                nodeSize={n=>n.size}
                activeNodeSize={n=>1.5*n.size}
                nodeColor={e=>e.color}
                nodeTooltip={() => <CycleTooltip />}
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
                motionConfig="gentle"
            />
        </>
            )
    }

export default HierarchyTree