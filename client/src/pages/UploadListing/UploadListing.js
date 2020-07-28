import React, { Component } from 'react';
import styled from 'styled-components';

import { UploadListingButton } from './styles';

class UploadListing extends Component {
  render() {
    return (
      <div>
        <UploadListingButton>Upload Listing Property</UploadListingButton>
      </div>
    );
  }
}

export default UploadListing;
