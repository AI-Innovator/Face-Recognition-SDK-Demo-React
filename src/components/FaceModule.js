import React, { Component } from 'react';
import * as FaceSDK from "face-recognition-plugin"

export class FaceModules extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  async componentDidMount() {
    await FaceSDK.loadEyeModel();
  }

  render() {
    return(
      <p>Click on an emoji to view the emoji short name.</p>
    )
  }

}
