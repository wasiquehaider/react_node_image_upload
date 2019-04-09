import React from "react";
import { Label, Button } from "semantic-ui-react";
class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: ""
    };
  }

  handleUploadImage = ev => {
    ev.preventDefault();

    const data = new FormData();
    data.append("file", this.uploadInput.files[0]);
    data.append("filename", this.fileName.value);

    fetch("http://localhost:8000/upload", {
      method: "POST",
      body: data
    }).then(response => {
      response.json().then(body => {
        this.setState({ imageURL: `http://localhost:8000/${body.file}` });
      });
    });
  };

  render() {
    return (
      <form class="ui form" onSubmit={this.handleUploadImage}>
        <div>
          <Label as="label" basic htmlFor="upload">
            <Button
              icon="upload"
              label={{
                basic: true,
                content: "Select file(s)"
              }}
              labelPosition="right"
            />
            <input
              hidden
              id="upload"
              multiple
              type="file"
              ref={ref => {
                this.uploadInput = ref;
              }}
              type="file"
            />
          </Label>
        </div>
        <div class="ui fluid icon input">
          <input
            ref={ref => {
              this.fileName = ref;
            }}
            type="text"
            placeholder="Enter the desired name of file"
          />
        </div>
        <br />
        <div>
          <button class="ui button">Upload</button>
        </div>
        <img src={this.state.imageURL} alt="img" class="ui fluid image" />
      </form>
    );
  }
}

export default Main;
