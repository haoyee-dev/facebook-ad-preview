import React, {Component} from 'react';
import FBDataEntry from './components/FBDataEntry';
import FBPreview from './components/FBPreview';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Text",
      textCount: 0,
      headline: "Headline",
      headlineCount: 0,
      description: "Description",
      descriptionCount: 0,
      imageFile: "",
      imagePreviewUrl: "http://via.placeholder.com/600x315"
    }

    this.updateText = this
      .updateText
      .bind(this);

    this.updateHeadline = this
      .updateHeadline
      .bind(this);
    
      this.updateDescription = this
      .updateDescription
      .bind(this);

    this.updateFile = this
      .updateFile
      .bind(this);
  }

  updateText(e) {
    this.setState({text: e.target.value, textCount: e.target.value.length});
  }

  updateHeadline(e) {
    this.setState({headline: e.target.value, headlineCount: e.target.value.length});
  }

  updateDescription(e) {
    this.setState({description: e.target.value, descriptionCount: e.target.value.length});
  }

  updateFile(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({imageFile: file, imagePreviewUrl: reader.result});
    }

    reader.readAsDataURL(file)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Facebook Ad Preview</h2>
        </div>
        <div className="container-fluid">
          <div className="row">
            <FBDataEntry
              updateText={this.updateText}
              textCount={this.state.textCount}
              updateHeadline={this.updateHeadline}
              headlineCount={this.state.headlineCount}
              updateDescription={this.updateDescription}
              descriptionCount={this.state.descriptionCount}
              updateFile={this.updateFile}/>
            <FBPreview
              text={this.state.text}
              headline={this.state.headline}
              description={this.state.description}
              imagePreviewUrl={this.state.imagePreviewUrl}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
