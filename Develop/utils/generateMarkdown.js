// Function that returns a license badge based on which license is passed in. If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license == "MIT") {
    return 
  }
  if (data.license == "GPLv2") {
    return 
  }
  if (data.license == "Apache") {
    return 
  }
  else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (data.license) {
    return 
  }
  else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README. If there is no license, return an empty string
function renderLicenseSection(license) {
  if (data.license = false) {
    data.license = "";
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${data.description}
  ## ${data.install
  ## ${data.usage}
  ## ${data.credits}
  ## ${data.license}
  ## ${data.contribute}
  ## ${data.test}
  ## ${data.questions}
`;
}

module.exports = generateMarkdown;
