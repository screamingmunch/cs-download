import React from 'react'
import styled from '@emotion/styled';

import capitalize from 'lodash/capitalize'


const Table = ({files, selectedCount, setSelectedCount}) => {
  const headings = Object.keys(files[0]);

  const handleCheckboxChange = (e) => {
    e.target.checked ? setSelectedCount(selectedCount + 1) : setSelectedCount(selectedCount - 1);
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
        return( <tr key={file.name}>
            <td><input 
                  type="checkbox" 
                  // disabled={file.status === 'available' ? false : true}
                  onChange={handleCheckboxChange}
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
