# crowdstrike-download
 testing, accessibility, architecture, and reusability.

 ### prompt

Here is the homework assignment, please feel free to take a look and complete when you can. We advise a max of 4 hours to take it and allow for a week to complete, but if you need more time, please feel free to ask for it. After submitting the homework assignment, our engineers typically review it and we do set up a homework review interview and final team interview so there are 2 more interviews in the process. I am CC’ing Sara here in case you have any questions about it.
 
In a framework of your choice, please implement the following mockup as a reusable component. If you are familiar with Ember please use it, otherwise feel free to use the structure/framework with which you're most comfortable. Feel free to use frameworks/libraries you find helpful, but we want to see your HTML, CSS, and JavaScript, so don't rely too heavily on out-of-the box CSS frameworks (e.g. material/bootstrap).
When you're done, provide a download link of your solution as a zip file of a git repository. Please double check that the .zip file has the git history included, and that it has any instructions necessary to run your example or any tests. If you wish to post your solution publicly, please do not include any mention of CrowdStrike or the body of this document to prevent future candidates from referencing your implementation. Please do not include any personally identifiable information in your submission outside of the git history; this will help us prevent implicit bias in our review process.
Complete as much as you can within 4 hours; there is no need to put more than 4 hours of your focused effort into this assignment. If you have any questions or would like to clarify any points please do not hesitate to ask us.
We assess submissions holistically, considering things like testing, accessibility, architecture, and reusability.
We hope that you enjoy working on the assignment and we look forward to a follow-up discussion with you and our engineering team.

### Data
This component displays a list of files which can be downloaded. It should be able to be given the following data:
[
  { name: 'smss.exe', device: 'Stark', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe', status: 'scheduled' },
  { name: 'netsh.exe', device: 'Targaryen', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe', status: 'available' },
  { name: 'uxtheme.dll', device: 'Lannister', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll', status: 'available' },
  { name: 'cryptbase.dll', device: 'Martell', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll', status: 'scheduled' },
  { name: '7za.exe', device: 'Baratheon', path: '\\Device\\HarddiskVolume1\\temp\\7za.exe', status: 'scheduled' }
]

### Requirements:

· Only those that have a status of "available" are currently able to be downloaded. Your implementation should manage this.
· The select-all checkbox should be in an unselected state if no items are selected.
· The select-all checkbox should be in a selected state if all items are selected.
· The select-all checkbox should be in an indeterminate state if some but not all items are selected.
· The "Selected 2" text should reflect the count of selected items and display "None Selected" when there are none selected.
· Clicking the select-all checkbox should select all items if none or some are selected.
· Clicking the select-all checkbox should de-select all items if all are currently selected.
· Status should be correctly formatted
· Clicking "Download Selected" when some or all items are displayed should generate an alert box with the path and device of all selected files.
· Precise/exact HTML formatting/styling to match the mockup is not required however rows should change colour when selected and on hover.
