import fs from 'fs';
import path from 'path';

// Function to find and replace a string in a file
async function findAndReplaceInFile(filePath, searchString, replacement) {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    const updatedData = data.replace(new RegExp(searchString, 'g'), replacement);

    if (data !== updatedData) {
      // Check if replacements were made
      await fs.promises.writeFile(filePath, updatedData, 'utf8');
      console.log(`Replaced "${searchString}" with "${replacement}" in: ${filePath}`);
    }
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}

// Recursively read files in the directory and replace the specified string
async function processFilesInDirectory(dirPath, searchString, replacement) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${dirPath}`, err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(dirPath, file);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Error checking file stats: ${filePath}`, err);
          return;
        }

        if (stats.isDirectory()) {
          processFilesInDirectory(filePath, searchString, replacement); // Recurse into subdirectories
        } else if (stats.isFile()) {
          findAndReplaceInFile(filePath, searchString, replacement);
        }
      });
    });
  });
}

// Start the process with the specified directory
const directoryPath = './src/pages/zh';
const search = 'const __lang = "en";'
const replace = 'const __lang = "zh";'
processFilesInDirectory(directoryPath, search, replace);
