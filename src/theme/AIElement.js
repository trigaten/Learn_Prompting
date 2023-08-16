import React from 'react';
import RobotImage from '@site/docs/assets/robot.webp';
import AstronautImage from '@site/docs/assets/astronaut.webp';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

class AIInput extends React.Component {
  state = {
    copied: false,
  };

  handleCopy = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1000);
    });
  };

  render() {
    const title = this.props.title || 'Prompt';
    return (
      <div className="ai-input" style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px', borderRadius: '15px', margin: '20px 0', position: 'relative' }}>
        <CopyToClipboard text={this.props.children} onCopy={this.handleCopy}>
          <button style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <FontAwesomeIcon className="io-icon" icon={this.state.copied ? faCheck : faCopy} color={this.state.copied ? 'green' : 'initial'} /> Copy
          </button>
        </CopyToClipboard>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={AstronautImage} alt="Astronaut" style={{ width: '20px', borderRadius: '50%' }} />
          <h4 style={{ margin: '0' }}>{title}</h4>
        </div>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'darkgrey', margin: '0' }} />
        <pre style={{borderRadius: '5px', padding: '10px', margin: '0' }}>
          {this.props.children}
        </pre>
      </div>
    );
  }
}

class AIOutput extends React.Component {
  state = {
    copied: false,
  };

  handleCopy = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1000);
    });
  };

  render() {
    const title = this.props.title || 'AI Output';
    return (
      <div className="ai-output" style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px', borderRadius: '5px', margin: '20px 0', position: 'relative' }}>
        <CopyToClipboard text={this.props.children} onCopy={this.handleCopy}>
          <button style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <FontAwesomeIcon className="io-icon" icon={this.state.copied ? faCheck : faCopy} color={this.state.copied ? 'green' : 'initial'} /> Copy
          </button>
        </CopyToClipboard>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={RobotImage} alt="Robot" style={{ width: '20px', borderRadius: '50%' }} />
          <h4 style={{ margin: '0' }}>{title}</h4>
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