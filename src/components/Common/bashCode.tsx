// components/MyButton.jsx
'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {useState} from "react";

function BashCode() {
  const bashCode = `git clone https://github.com/medicalinformatics/mainzelliste-gui.git \\
  && cd mainzelliste-gui && cp .env.default .env
# replace HOST in .env file with your server name or ip address
vi .env
chmod u+x prepare-keycloak-import-file.sh
# replace {HOST} with your server name or ip address (eg. localhost:4200 )
./prepare-keycloak-import-file.sh {HOST}
docker compose up -d
`;

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bashCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
      <div style={{ padding: 20, backgroundColor: '#fff', color: '#000', maxWidth: 750, margin: 'auto' }}>
        <h2 className="mb-1 text-start text-xl text-body-color sm:text-2xl font-thin">
          Try it
        </h2>
        <div style={{ position: 'relative' }}>
          <button
              onClick={copyToClipboard}
              style={{
                position: 'absolute',
                right: 8,
                top: 8,
                padding: '5px 10px',
                fontSize: 12,
                cursor: 'pointer',
                borderRadius: 4,
                border: '1px solid #ccc',
                backgroundColor: copied ? '#3c9a41' : '#eee',
                color: copied ? '#fff' : '#000',
                transition: 'background-color 0.3s',
                zIndex: 1,
              }}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>

          <SyntaxHighlighter language="bash" wrapLongLines={true} style={oneLight} customStyle={{ paddingTop: 10 }}>
            {bashCode}
          </SyntaxHighlighter>
        </div>
        <div  className="text-start text-body-color-dark text-sm">
          Run the command in your terminal. For more details, refer to our <a
            target="_blank" className="underline" href="https://github.com/medicalinformatics/mainzelliste-gui/tree/main?tab=readme-ov-file#running-on-linux">Getting Started</a> section.
        </div >
      </div>
  );
}

export default BashCode;