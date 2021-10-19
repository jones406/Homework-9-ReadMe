// Function: return license badge. If no license, return empty string.
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } if (license === "GPLv2") {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  } if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else {
    return ``
  }
}

// Function: return license link. If no license, return empty string.
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://www.mit.edu/~amini/LICENSE.md`
  } if (license === "GPLv2") {
    return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`
  } if (license === "Apache") {
    return `https://www.apache.org/licenses/LICENSE-2.0`
  } else {
    return ``
  }
}

// Function: return license section of README. If no license, return empty string.
function renderLicenseSection(license) {
  if (license) {
    return `  
    ## License ${license}
    ${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}
    `
  } else {
    return ``
  }
};

// Function: generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  ## Description  
  ${response.description}
  ## Table of Contents
- [Installation](#install)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contribute)
- [Tests](#test)
- [Questions](#questions)
  ## Installation  
  ${response.install}
  ## Usage  
  ${response.usage}
  ## Credits  
  ${response.credits}
  ## License
  ${renderLicenseSection};
  ## Contribute  
  ${response.contribute}
  ## Test 
   ${response.test}
  ## Questions  
  For questions, please check out my Github profile or email me.
  ${response.questions}
`;
};

module.exports = generateMarkdown;
