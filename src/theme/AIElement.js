import React from 'react';

class AIElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  handleOutputChange = (event) => {
    this.setState({ output: event.target.value });
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h2>AI Input</h2>
          <textarea 
            value={this.state.input} 
            onChange={this.handleInputChange} 
            placeholder="Enter AI input here..."
            style={{ width: '100%', height: '200px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h2>AI Output</h2>
          <textarea 
            value={this.state.output} 
            onChange={this.handleOutputChange} 
            placeholder="AI output will be displayed here..."
            style={{ width: '100%', height: '200px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', color: 'green' }}
          />
        </div>
      </div>
    );
  }
}

export default AIElement;