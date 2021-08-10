import React, { Component } from 'react';
// import { MathfieldComponent } from 'react-mathlive';

class App extends Component {
  state = {
    latex: '\\frac{1}{x}',
  };

  onLatexChange = (latex) => {
    this.setState({ latex });
  };

  render() {
    console.log(this.state.latex);
    return (
      <div>
        <div className="">MathfieldComponent</div>

        <br />

        <input
          type="text"
          className="boarder-1"
          value={this.state.latex}
          onChange={(ev) => this.onLatexChange(ev.target.value)}
        />
        <button onClick={() => this.setState({ latex: '' })}>Clear all</button>
      </div>
    );
  }
}

export default App;
