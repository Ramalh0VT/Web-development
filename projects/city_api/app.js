const configFile = process.argv[2];
let loadedConfig = true;

if (configFile) {
    console.error("Configuration file not provided");
    process.exitCode = 1;
    loadedConfig = false;
}

try {

    const data = require(configFile);
    if (data && data.required) {

        const missing = data.required.filter(name => !process.env[name]);
        if (missing.length > 0) {
            console.error(`Missing required environment variables: ${missing.join(', ')}`);
            process.exitCode = 1;
            loadedConfig = false;
        }
    } else {

        const { PORT, NAME, CITY } = data;
        console.log(`Loaded config: PORT=${PORT}, NAME=${NAME}, CITY=${CITY}`);
    }
} catch (error) {
    console.error("Error loading config file:", error.message);
    process.exitCode = 1;
    loadedConfig = false;
}
