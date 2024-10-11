const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const app = express();

app.use(cors());
app.use(express.json());

// Route to handle solution submission
app.post('/submit-solution', (req, res) => {
  const { code, questionId, language } = req.body;

  const testCases = getTestCasesForQuestion(questionId);
  runAllTestCases(code, testCases, language)
    .then(result => res.json({ result }))
    .catch(err => res.status(500).json({ error: 'Execution Error', details: err.toString() }));
});

// Mock function to fetch test cases based on questionId
const getTestCasesForQuestion = (questionId) => {
  if (questionId === 1) {
    return [
      { input: '[2, 7, 11, 15], target = 9', output: '[0, 1]' },
      { input: '[3, 2, 4], target = 6', output: '[1, 2]' }
    ];
  }
  return [];
};

// Function to run user code against all test cases
const runAllTestCases = async (code, testCases, language) => {
  for (const testCase of testCases) {
    const result = await runTestCase(code, testCase, language);
    if (result === 'Wrong Output') return result;
  }
  return 'Accepted';
};

// Function to run a single test case
const runTestCase = (code, testCase, language) => {
  return new Promise((resolve, reject) => {
    const command = buildExecutionCommand(code, language, testCase.input);

    exec(command, { timeout: 5000 }, (error, stdout, stderr) => {
      if (error || stderr) {
        reject(stderr || error);
      } else {
        resolve(stdout.trim() === testCase.output.trim() ? 'Accepted' : 'Wrong Output');
      }
    });
  });
};

// Helper function to build the execution command for different languages
const buildExecutionCommand = (code, language, input) => {
  let command = '';

  if (language.toLowerCase() === 'javascript') {
    command = `echo "${code}" | node`;  // Run JavaScript code with Node.js
  } else if (language.toLowerCase() === 'python') {
    command = `echo "${code}" | python3`;  // Run Python code
  } else if (language.toLowerCase() === 'cpp') {
    const fileName = `temp_${Date.now()}.cpp`;
    command = `echo "${code}" > ${fileName} && g++ ${fileName} -o ${fileName}.out && ./${fileName}.out`;
  }

  return command;
};

// Start the server
app.listen(3000, () => console.log('Server running on port 3000'));
