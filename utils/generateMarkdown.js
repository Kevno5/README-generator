function generateMarkdown(answers) {
  return `
<h1 align="center">${answers.titleProject} 👋</h1>

![badge](https://img.shields.io/badge/license-${answers.license}-red)<br />
## Description
🔍 ${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)

## Installation
💾 ${answers.installation}
## Usage
💻 ${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-red)
<br />
This application is covered by the ${answers.license} license. 
## Contributing
👪 ${answers.contributers}
## Tests
✏️ ${answers.test}
<br />
Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
✉️ Email me with any questions: ${answers.email}<br /><br />

  `;
}

module.exports = generateMarkdown;
