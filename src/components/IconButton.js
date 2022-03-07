import React from 'react';
import styled from '@emotion/styled';

const IconSpan = styled.span`
  background-image: ${({icon}) => `url('${icon}')`};
  background-repeat: no-repeat;
  background-size: 20px;
  height: 20px;
  width: 20px;
  ${({icon}) => {
    if(icon === 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAABC0lEQVR4Ae2WxVbDUBRF91r8ADPc3V0n2Oe+T4Ep7q71dowdnEqS+3D2me82yTW88k8tjhzXIZPDUZtfF+M6YmL5lI5rQxzvyJmEOd5xbcz3E54zz4o/4QW9QCVrfoSX9CFmfQiv6Ee0cWwXxhhAtHJkf4cxhhAtHNq/cpxhRDMHwctmkREO8+gSjCCa2A9eh0uU53mga5KMIRrYC1PYC3lfeYpxRD274TolxuC7okgxiahjJ3zrXTGAaOeEa9JMIWrZDt7L+Uu3gw2mETVsRR8Ol0/KMkQ1m7Zp89Sv0rFuHV+aKKKKNT/z8IIeoJJV+4DNP0btwuD5F9oX/QefIvZjqcbvOVeDR/65Aa3XhOxRFqS3AAAAAElFTkSuQmCC' || icon === 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAAVUlEQVR4Ae2WqQEAQQjE0sdu/4bakGjO3/+Mu0l8zD6AkTIJin5oEcz9XNIvzb1k0B8MNtSnYLGhP+qgg/8MXuCgr42DL3RQMOjlq4h6WRradW4gxCxcCa4gE2xCwQAAAABJRU5ErkJggg==') {
      return `filter: invert(60%) sepia(71%) saturate(3727%) hue-rotate(197deg) brightness(95%) contrast(102%);`
    }
  }}
`;

const IconButton = ({icon, role, onclickHandler}) => {
  if(role === 'checkbox') {
    return (<IconSpan 
      role={role}  
      icon={icon}
      aria-checked="false"
      onClick={onclickHandler}
    />) 
  } else {
    return (<IconSpan
      role={role}  
      icon={icon}
      aria-label="button"
      onClick={onclickHandler}
    />)
  }

}

export default IconButton;
