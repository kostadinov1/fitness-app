import { ResponsiveNetwork } from '@nivo/network'
import { useState } from 'react'
import HierarchyTooltip from './ToolTips/HierarchyTooltip/HierarchyTooltip'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const HierarchyTree = ({ data /* see data tab */ }) => {
    const [currentNode, setCurrentNode] = useState({})
        
    const onNetworkChange = (node, event) => {
        setCurrentNode(node)
        console.log(node.id, 'node event');
    }
    return (
        <>
        <div 
            style={{fontSize: '3rem'}} 
        >{currentNode?.id}</div>
            <ResponsiveNetwork
                onClick={onNetworkChange}
                data={data}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                linkDistance={e=>e.distance}
                centeringStrength={1}
                repulsivity={100}
                nodeSize={n=>n.size}
                activeNodeSize={n=>1.5*n.size}
                nodeColor={e=>e.color}
                nodeTooltip={(data) => <HierarchyTooltip data={data}></HierarchyTooltip>}
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
                motionConfig="wobbly"
            />
        </>
            )
    }

export default HierarchyTree