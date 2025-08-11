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
      <div style={{ padding: 20, color: '#000', maxWidth: 750, margin: 'auto' }}>
        <h2 className="mb-1 text-start text-xl text-body-color sm:text-2xl font-light">
          Try it
        </h2>
        <div style={{ position: 'relative' }}>
          <button className="hover:bg-gray-200"
              onClick={copyToClipboard}
              style={{
                position: 'absolute',
                right: 8,
                top: 8,
                padding: '5px 10px',
                fontSize: 12,
                cursor: 'pointer',
                borderRadius: 4,
                transition: 'background-color 0.3s',
                zIndex: 1,
              }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>
            {/*{copied ? 'Copied!' : 'Copy'}*/}
          </button>

          <SyntaxHighlighter language="bash" wrapLongLines={true} style={oneLight} customStyle={{paddingTop:15, paddingBottom:15, paddingRight: 20, paddingLeft: 20, border: '1px solid #cccccc', borderRadius: 10 }}>
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