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

  processChildren = (children) => {
    if (Array.isArray(children)) {
      return children.flatMap((child, index) => {
        if (child.props && child.props.children) {
          let concatenatedChildren;
          if (Array.isArray(child.props.children)) {
            concatenatedChildren = child.props.children.join('');
          } else {
            concatenatedChildren = child.props.children;
          }
          // Append two <br /> tags after every child, except the last one
          return index < children.length - 1 ? [concatenatedChildren, <br />, <br />] : [concatenatedChildren];
        } else {
          // Append two <br /> tags after every child, except the last one
          return index < children.length - 1 ? [child, <br />, <br />] : [child];
        }
      });
    } else {
      // If it's a single child, just return it without <br /> tags
      return [children];
    }
  };

  processChildrenForCopy = (children) => {
    if (Array.isArray(children)) {
      return children.map((child, index) => {
        if (child.props && child.props.children) {
          let concatenatedChildren;
          if (Array.isArray(child.props.children)) {
            concatenatedChildren = child.props.children.join('');
          } else {
            concatenatedChildren = child.props.children;
          }
          // Append two spaces after every child, except the last one
          return index < children.length - 1 ? concatenatedChildren + '  ' : concatenatedChildren;
        } else {
          // Append two spaces after every child, except the last one
          return index < children.length - 1 ? child + '  ' : child;
        }
      }).join('');
    } else {
      return children;
    }
  };

  render() {
    const title = this.props.title || 'Prompt';
    const processedChildren = this.processChildren(this.props.children);
    const processedChildrenForCopy = this.processChildrenForCopy(this.props.children);

    return (
      <div className="ai-input" style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px', borderRadius: '15px', margin: '20px 0', position: 'relative' }}>
        <CopyToClipboard text={processedChildrenForCopy} onCopy={this.handleCopy}>
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
          {processedChildren}
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

  processChildren = (children) => {
    if (Array.isArray(children)) {
      return children.flatMap((child, index) => {
        if (child.props && child.props.children) {
          let concatenatedChildren;
          if (Array.isArray(child.props.children)) {
            concatenatedChildren = child.props.children.join('');
          } else {
            concatenatedChildren = child.props.children;
          }
          // Append two <br /> tags after every child, except the last one
          return index < children.length - 1 ? [concatenatedChildren, <br />, <br />] : [concatenatedChildren];
        } else {
          // Append two <br /> tags after every child, except the last one
          return index < children.length - 1 ? [child, <br />, <br />] : [child];
        }
      });
    } else {
      // If it's a single child, just return it without <br /> tags
      return [children];
    }
  };

  processChildrenForCopy = (children) => {
    if (Array.isArray(children)) {
      return children.map((child, index) => {
        if (child.props && child.props.children) {
          let concatenatedChildren;
          if (Array.isArray(child.props.children)) {
            concatenatedChildren = child.props.children.join('');
          } else {
            concatenatedChildren = child.props.children;
          }
          // Append two spaces after every child, except the last one
          return index < children.length - 1 ? concatenatedChildren + '  ' : concatenatedChildren;
        } else {
          // Append two spaces after every child, except the last one
          return index < children.length - 1 ? child + '  ' : child;
        }
      }).join('');
    } else {
      return children;
    }
  };

  render() {
    const title = this.props.title || 'AI Output';
    const processedChildren = this.processChildren(this.props.children);
    const processedChildrenForCopy = this.processChildrenForCopy(this.props.children);

    return (
      <div className="ai-output" style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px', borderRadius: '5px', margin: '20px 0', position: 'relative' }}>
        <CopyToClipboard text={processedChildrenForCopy} onCopy={this.handleCopy}>
          <button style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <FontAwesomeIcon className="io-icon" icon={this.state.copied ? faCheck : faCopy} color={this.state.copied ? 'green' : 'initial'} /> Copy
          </button>
        </CopyToClipboard>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={RobotImage} alt="Robot" style={{ width: '20px', borderRadius: '50%' }} />
          <h4 style={{ margin: '0' }}>{title}</h4>
        </div>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'darkgrey', margin: '0' }} />
        <pre className="output-highlight" style={{ borderRadius: '5px', padding: '10px', margin: '0' }}>
          {processedChildren}
        </pre>
      </div>
    );
  }
}

export { AIInput, AIOutput };