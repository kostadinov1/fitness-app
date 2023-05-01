import { Button, message, Steps, theme } from 'antd';
import { useState } from 'react';
import styles  from './GoalsSteps.module.css'

const steps = [
  {
    title: 'Create a Goal',
    content: 'Create a Goal',
  },
  {
    title: 'Create Defender',
    content: 'Create Defender Screenshot',
  },
  {
    title: 'Create MiniGoal',
    content: 'Create Minigoal Screenshot',
  },
  
];


const GoalsSteps = () => {

    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const next = () => {setCurrent(current + 1);};
    const prev = () => {setCurrent(current - 1);};
    
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    const contentStyle = {
        lineHeight: '260px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };

    return (
        <div className={`${styles.goals_steps}`}>
            <h3>How to Create Goals for Your Macro and Meso Cycles</h3>

        <Steps current={current} items={items} />
        <div style={contentStyle}>{steps[current].content}</div>
        <div
            style={{
            marginTop: 24,
            }}
        >
            {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
                Next
            </Button>
            )}
            {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
                Done
            </Button>
            )}
            {current > 0 && (
            <Button
                style={{
                margin: '0 8px',
                }}
                onClick={() => prev()}
            >
                Previous
            </Button>
            )}
        </div>
        </div>
    );
};
export default GoalsSteps;