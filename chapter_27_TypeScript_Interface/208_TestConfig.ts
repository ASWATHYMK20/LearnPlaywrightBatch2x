interface TestConfig {
    browser: string;
    headless: boolean;
    baseURL: string;
    timeout?: number;
    retries?: number;

}


let ciConfg: TestConfig = {
    browser: "Chrome",
    headless: true,
    baseURL: "https://staging.app.com"
};

let localConfig: TestConfig = {
    browser: "Firefox",
    headless: false,
    baseURL: "http://localhost:3000",
    timeout: 10000,
    retries: 3
}