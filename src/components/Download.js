import React, { useState } from 'react';
import styled from '@emotion/styled';
import {data} from '../data/files'
import Table from './Table';



const DownloadComponent = () => {
  const {files} = data;
  const [selectedCount, setSelectedCount] = useState(0);
  return (
    <div>
      <div> 
        <span>{selectedCount === 0 ? 'None Selected' : `Selected ${selectedCount}`}</span>
        <span>Download Selected</span>
      </div>
      <Table files={files} 
             selectedCount={selectedCount} 
             setSelectedCount={setSelectedCount}
      />
    </div>
    
  )
}

export default DownloadComponent;
