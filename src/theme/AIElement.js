import React from 'react';

class AIInput extends React.Component {
  render() {
    const children = React.Children.map(this.props.children, child =>
      typeof child === 'string' ? child.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>) : ''
    );
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h2>AI Prompt</h2>
        <pre 
          style={{ padding: '10px', borderRadius: '5px', background: '#f0f0f0' }}
        >
          {children}
        </pre>
      </div>
    );
  }
}

class AIOutput extends React.Component {
    render() {
      const children = React.Children.map(this.props.children, child =>
        typeof child === 'string' ? child.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>) : child
      );
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h2>AI Output</h2>
          <pre 
            style={{ padding: '10px', borderRadius: '5px', background: 'lightgreen' }}
          >
            {children}
          </pre>
        </div>
      );
    }
  }

export { AIInput, AIOutput };