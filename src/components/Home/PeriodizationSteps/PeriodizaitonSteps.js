import { Button, message, Steps, theme } from 'antd';
import { useState } from 'react';
import styles  from './PeriodizationSteps.module.css'

const steps = [
  {
    title: 'Create Macro Cycle',
    content:
    <div className={`${styles.step_box}`}>
        <img src={'/images/backgrounds/background-01.jpg'} alt='hero_image'></img>
    </div>   
    ,
  },
  {
    title: 'Create Meso Cycle',
    content: 'Create Meso cycle and chose start and end dates',
  },
  {
    title: 'Add Meso to Macro Cycle',
    content: 'Add the Meso cycle to the Macro cycle and it will display in Your Dashboard',
  },
  {
    title: 'Create Micro Cycles',
    content: 'Create Micro Cycles',
  },
  {
    title: 'Add Micro to Meso Cycle',
    content: 'Add Micro to Meso Cycle',
  },
  {
    title: 'Create Activities',
    content: 'Create Activities',
  },
  {
    title: 'Add Activities to Micro',
    content: 'Add Activities to Micro',
  },
  {
    title: 'Create Exercises',
    content: 'Create Exercises',
  },
  {
    title: 'Add Exercises to Activities',
    content: 'Add Exercises to Activities',
  },
  
];


const PeriodizationSteps = () => {

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
        <div className={`${styles.periodization_steps}`}>
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
export default PeriodizationSteps;