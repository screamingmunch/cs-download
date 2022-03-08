import React, { useState } from 'react';
import styled from '@emotion/styled';

import { data } from '../data/files'
import Table from './Table';
import IconButton from './IconButton';

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
  const [isSelected, setIsSelected] = useState([]);

  const allAvailableFiles = files.filter((file) => file.status === 'available');
 
  const selectIcon = () => {
    if(selectedCount === files.length) {
      return checkboxSelected;
    } else if(selectedCount === 0) {
      return checkboxUnselected;
    } else {
      return checkboxIndeterminate;
    }
  } 
  
  const toggleSelectAll = () => {
    if(selectedCount === allAvailableFiles.length) {
      setIsSelected([]);
      setSelectedCount(0);
    } else {
      if(allAvailableFiles.length < files.length){
        alert('Only files that are available to be downloaded are selected.');
      }
      setIsSelected(allAvailableFiles.map((file) => file.name));
      setSelectedCount(allAvailableFiles.length);
    }
    selectIcon();
  }

  const handleDownload = () => {
    console.log('download clicked');
  }

  
  return (
    <div>
      {isSelected}
      <DownloadManagementContainer> 
        <IconDiv>
          <IconButton icon={selectIcon()} role="checkbox" onclickHandler={toggleSelectAll}/>
          <span>{selectedCount === 0 ? 'None Selected' : `Selected ${selectedCount}`}</span>
        </IconDiv>
        <IconDiv>
          <IconButton icon={download} role="button" onclickHandler={handleDownload}/>
          <span>Download Selected </span>
        </IconDiv>
        
      </DownloadManagementContainer>
      <Table files={files} 
             selectedCount={selectedCount} 
             setSelectedCount={setSelectedCount}
             isSelected={isSelected}
             setIsSelected={setIsSelected}
             
      />
    </div>
    
  )
}

export default DownloadComponent;
