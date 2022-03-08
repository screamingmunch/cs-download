import React from 'react'
import styled from '@emotion/styled';

import '../styles/Table.css';

import capitalize from 'lodash/capitalize'

const HorizontalFlex = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;


const GreenCircle = styled.span`
  background-color: #00D100;
  border-radius: 50px;
  height: 12px;
  margin-left: 10px;
  width: 12px;
`;


const Table = ({files, selectedCount, setSelectedCount, isSelected, setIsSelected}) => {
  const headings = Object.keys(files[0]);

  const isChecked = (file) => {
    const findMatch = isSelected.filter((item) => {
      return item.name === file.name;
    });
    return findMatch.length > 0 ? true : false;
  }

  const handleFileClick = (file, e) => {
    let currentFileRow, currentCheckbox;
    if(e.currentTarget.nodeName === 'INPUT'){
      currentFileRow = e.currentTarget.parentNode.parentNode;
      currentCheckbox = e.currentTarget;
    } else {
      currentFileRow = e.currentTarget;
      currentCheckbox = e.currentTarget.querySelector('input');
    }
    if(currentCheckbox.disabled) return;
    if(e.target.nodeName !== 'INPUT'){
      currentCheckbox.checked = !currentCheckbox.checked;
    }
    if(currentCheckbox.checked) {
      setSelectedCount(selectedCount + 1);
      setIsSelected(isSelected => [...isSelected, file]); 
      currentFileRow.classList.add('selected');
    } else {
      setSelectedCount(selectedCount - 1);
      const newSelected = isSelected.filter((item) => item.name !== file.name);
      setIsSelected(newSelected);
      currentFileRow.classList.remove('selected');
    }
  }

  

  
  return(
    <table>
      <thead>
        <tr>
          <th></th>
          {headings.map((heading) => <th key={heading}>{capitalize(heading)}</th>)}
        </tr>
      </thead>
      <tbody>
        {files.map((file) => {
          let boundFileClick = handleFileClick.bind(this, file);
        return( <tr key={file.name} onClick={boundFileClick} className={file.status === 'available' ? '' : 'disabled'}>
            <td><input 
                  type="checkbox" 
                  id={file.name}
                  disabled={file.status === 'available' ? false : true}
                  onChange={boundFileClick}
                  checked={isChecked(file)}
                />
            </td>
            <td>{file.name}</td>
            <td>{file.device}</td>
            <td>{file.path}</td>
            <td>
              <HorizontalFlex>
                {capitalize(file.status)}
                {file.status === 'available' && (<GreenCircle/>)}
              </HorizontalFlex>
              
            </td>
          </tr>)
        })}
      </tbody>

    </table>
  )
}

export default Table;
