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
    content: 
    <div className={`${styles.step_box}`}>
        <img src={'/images/backgrounds/background-02.jpg'} alt='hero_image'></img>
    </div>  
    ,
  },
  {
    title: 'Add Meso to Macro Cycle',
    content: 
    <div className={`${styles.step_box}`}>
        <img src={'/images/backgrounds/background-03.jpg'} alt='hero_image'></img>
    </div>  
    ,
  },
  {
    title: 'Create Micro Cycles',
    content: 
    <div className={`${styles.step_box}`}>
        <img src={'/images/backgrounds/background-05.jpg'} alt='hero_image'></img>
    </div>  
    ,
  },
  {
    title: 'Add Micro to Meso Cycle',
    content: 
    <div className={`${styles.step_box}`}>
        <img src={'/images/backgrounds/background-01.jpg'} alt='hero_image'></img>
    </div>  
    ,
  },
  {
    title: 'Create Activities',
    content: 
    <div className={`${styles.step_box}`}>
        <img src={'/images/backgrounds/background-01.jpg'} alt='hero_image'></img>
    </div>  
    ,
  },
  {
    title: 'Add Activities to Micro',
    content: 
    <div className={`${styles.step_box}`}>
        <img src={'/images/backgrounds/background-01.jpg'} alt='hero_image'></img>
    </div>  
    ,
  },
  {
    title: 'Create Exercises',
    content: 
    <div className={`${styles.step_box}`}>
        <img src={'/images/backgrounds/background-01.jpg'} alt='hero_image'></img>
    </div>  
    ,
  },
  {
    title: 'Add Exercises to Activities',
    content: 
    <div className={`${styles.step_box}`}>
        <img src={'/images/backgrounds/background-01.jpg'} alt='hero_image'></img>
    </div>  
    ,
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