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
  align-items: center;
  display: flex;
  justify-content: flex-start;
  height: 40px;
`;

const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 40px;
`;

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
      setIsSelected(allAvailableFiles.map((file) => file));
      setSelectedCount(allAvailableFiles.length);
    }
    selectIcon();
  }

  const handleDownload = () => {
    if(isSelected.length === 0) {
      alert(`Please select file(s) to download.`)
    } else {
      alert(`Downloading the following files: \n ${isSelected.map((item) => item.device + ": " + item.path + "\n")}`);
    }
    
  }
  
  return (
    <div>
        <DownloadManagementContainer> 
          <IconDiv>
             <IconButton ariaLabel="Toggle select all or select none" icon={selectIcon()} role="checkbox" onclickHandler={toggleSelectAll}/>
            <span>{selectedCount === 0 ? 'None Selected' : `Selected ${selectedCount}`}</span>
          </IconDiv>
          <IconDiv>
            <IconButton ariaLabel="Download" icon={download} role="button" onclickHandler={handleDownload}/>
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
