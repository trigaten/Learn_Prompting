import React from 'react';
import RobotImage from '@site/docs/assets/robot.png';
import AstronautImage from '@site/docs/assets/astronaut.jpg';

class AIInput extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px', borderRadius: '15px', background: '#f0f0f0', margin: '20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={AstronautImage} alt="Astronaut" style={{ width: '20px', borderRadius: '50%' }} />
          <h4 style={{ margin: '0' }}>Prompt</h4>
        </div>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'darkgrey', margin: '0' }} />
        <pre style={{ background: '#f0f0f0', borderRadius: '5px', padding: '10px', margin: '0' }}>
          {this.props.children}
        </pre>
      </div>
    );
  }
}

class AIOutput extends React.Component {
    render() {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px', borderRadius: '5px', background: '#f0f0f0', margin: '20px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={RobotImage} alt="Robot" style={{ width: '20px', borderRadius: '50%' }} />
            <h4 style={{ margin: '0' }}>AI Output</h4>
          </div>
          <hr style={{ border: 'none', height: '1px', backgroundColor: 'darkgrey', margin: '0' }} />
          <pre style={{ background: 'lightgreen', borderRadius: '5px', padding: '10px', margin: '0' }}>
            {this.props.children}
          </pre>
        </div>
      );
    }
  }

export { AIInput, AIOutput };