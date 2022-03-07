import React, { useState } from 'react';
import styled from '@emotion/styled';

import { data } from '../data/files'
import Table from './Table';
import Icon from './Icon';

import checkboxSelected from '../assets/check_selected.png';
import checkboxIndeterminate from '../assets/checkbox_indeterminate.png';
import checkboxUnselected from '../assets/checkbox_unselected.png';
import download from '../assets/download.png';

const DownloadManagementContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const IconDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;


// url('https://www.gstatic.com/images/icons/material/system/2x/check_box_outline_blank_black_20dp.png')
// url('../../public/checbox_unselected.png')
const DownloadComponent = () => {
  const {files} = data;
  const [selectedCount, setSelectedCount] = useState(0);
  const selectIcon = () => {
    if(selectedCount === files.length) {
      return checkboxSelected;
    } else if(selectedCount === 0) {
      return checkboxUnselected;
    } else {
      return checkboxIndeterminate;
    }
  } 

  
  return (
    <div>
      <DownloadManagementContainer> 
        <IconDiv>
          <Icon icon={selectIcon()}/>
          <span>{selectedCount === 0 ? 'None Selected' : `Selected ${selectedCount}`}</span>
        </IconDiv>
        <IconDiv>
          <Icon icon={download}/>
          <span>Download Selected</span>
        </IconDiv>
        
      </DownloadManagementContainer>
      <Table files={files} 
             selectedCount={selectedCount} 
             setSelectedCount={setSelectedCount}
      />
    </div>
    
  )
}

export default DownloadComponent;
