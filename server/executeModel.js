

const { exec } = require("child_process");

const executeModel = (filePath) => {

    return new Promise((resolve, reject) => {
        exec(
            `. ../env/bin/activate && python3 ../predictor/insights.py ./${filePath}`,
            (error, stdout, stderr) => {
                error && reject({ error, stderr });
                stderr && reject(stderr);
                console.log(stdout);
                resolve(stdout);
            }
        );
    });
};

module.exports = executeModel