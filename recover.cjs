const fs = require('fs');
const readline = require('readline');
const path = require('path');

async function reconstruct() {
  const fileStream = fs.createReadStream('C:\\\\Users\\\\Asus\\\\.gemini\\\\antigravity-ide\\\\brain\\\\44707eb7-14b6-47c2-b37b-b5d25b524eac\\\\.system_generated\\\\logs\\\\transcript_full.jsonl');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  const fileStates = {}; 

  for await (const line of rl) {
    if (!line.trim()) continue;
    try {
        const entry = JSON.parse(line);
        if (entry.tool_calls) {
            for (const call of entry.tool_calls) {
                let callName = call.name || call.function?.name;
                if (!callName) continue;
                
                if (callName === 'write_to_file' || callName === 'default_api:write_to_file') {
                    let args = call.args || call.arguments || call.function?.arguments;
                    if (typeof args === 'string') {
                        try { args = JSON.parse(args); } catch(e){}
                    }
                    if (!args) continue;
                    
                    let file = args.TargetFile;
                    let content = args.CodeContent;
                    
                    if (file) {
                        const baseName = path.basename(file);
                        if (baseName.endsWith('.jsx') || baseName.endsWith('.css')) {
                           fileStates[baseName] = content;
                        }
                    }
                }
            }
        }
    } catch(e) {}
  }

  console.log('Found full writes for:', Object.keys(fileStates));
  
  const recoveryDir = 'recovery_files';
  if (!fs.existsSync(recoveryDir)) fs.mkdirSync(recoveryDir);
  
  for (const [name, content] of Object.entries(fileStates)) {
      fs.writeFileSync(path.join(recoveryDir, name), content, 'utf8');
  }
}

reconstruct();
