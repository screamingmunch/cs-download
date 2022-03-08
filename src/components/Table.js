import React from 'react'
import styled from '@emotion/styled';

import capitalize from 'lodash/capitalize'


const Table = ({files, selectedCount, setSelectedCount, isSelected, setIsSelected}) => {
  const headings = Object.keys(files[0]);

  const handleCheckboxChange = (file, e) => {
    if(e.target.checked) {
      setSelectedCount(selectedCount + 1);
      setIsSelected(isSelected => [...isSelected, file]); 
    } else {
      setSelectedCount(selectedCount - 1);
      const newSelected = isSelected.filter((item) => item.name !== file.name);
      setIsSelected(newSelected);
    }
  }

  const isChecked = (file) => {
    const findMatch = isSelected.filter((item) => {
      return item.name === file.name;
    });
    return findMatch.length > 0 ? true : false;
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
          let boundCheckboxClick = handleCheckboxChange.bind(this, file);
        return( <tr key={file.name}>
            <td><input 
                  type="checkbox" 
                  id={file.name}
                  disabled={file.status === 'available' ? false : true}
                  onChange={boundCheckboxClick}
                  checked={isChecked(file)}
                />
            </td>
            <td>{file.name}</td>
            <td>{file.device}</td>
            <td>{file.path}</td>
            <td>{capitalize(file.status)}</td>
          </tr>)
        })}
      </tbody>

    </table>
  )
}

export default Table;
