const express = require('express');
const app = express();
const port = 3000; 

const { google } = require('googleapis');
const sheets = google.sheets('v4');
const credentials = require('./credentials.json');

let test_operators = [];
let calendarValues = [];
let scheduleValues = [];
let calendar = [];

const spreadsheetId = '1gz5-BW0e3OYZoLRiPpZ0uiDTjhurRpv_0GvgSkTg110';
const sheetName = 'Sheet1'; 
const targetTO = 'Chardae Hill';
const columnName = 'D';

const auth = new google.auth.GoogleAuth({
	credentials,
	scopes: [ 'https://www.googleapis.com/auth/spreadsheets.readonly' ]
});

async function fetchDataFromGoogleSheets() {
    try {
        const sheetsClient = await sheets.spreadsheets.values;
        const range = `${sheetName}!D3:AM`;
        const response = await sheetsClient.get({ auth, spreadsheetId, range });
        scheduleValues = response.data.values || [];

        if (scheduleValues.length === 0) {
            console.log('No data found in the specified range.');
        }
    } catch (err) {
        console.error('Error fetching data:', err);
    }
}

async function getCalendarAndDays() {
    try {
        const sheetsClient = await sheets.spreadsheets.values;
        const calendarRange = `${sheetName}!E2:AM2`;
        const daysRange = `${sheetName}!E1:AM1`;

        const [calendarResponse, daysResponse] = await Promise.all([
            sheetsClient.get({ auth, spreadsheetId, range: calendarRange }),
            sheetsClient.get({ auth, spreadsheetId, range: daysRange })
        ]);

        const calendarData = calendarResponse.data.values;
        const daysData = daysResponse.data.values;

        if (calendarData && calendarData.length > 0 && daysData && daysData.length > 0) {
            calendarValues.push(...calendarData[0]);

            for (let i = 0; i < daysData[0].length; i++) {
                calendar.push({ day: daysData[0][i], date: calendarData[0][i] });
            }

            console.log('Calendar:', calendar);
        } else {
            console.log('No calendar or days data found in the specified range.');
        }
    } catch (err) {
        console.error('Error fetching data:', err);
    }
}

async function getTOSchedule() {
    try {
        if (!scheduleValues.length) {
            const sheetsClient = await sheets.spreadsheets.values;
            const range = `${sheetName}!${columnName}:am`;

            const { data } = await sheetsClient.get({ auth, spreadsheetId, range });
            scheduleValues = data.values || [];
        }

        const rowIndex = scheduleValues.findIndex(row => row[0] === targetTO);

        if (rowIndex !== -1) {
            const [targetRow] = scheduleValues.splice(rowIndex, 1);

            const scheduleValuesArray = [{ [targetTO]: targetRow.slice(1) }];
            console.log("schedule Array:", scheduleValuesArray);
            console.log("schedule Array length:", scheduleValuesArray.length);
        } else {
            console.log(`Target value "${targetTO}" not found in the specified column.`);
        }
    } catch (err) {
        console.error('Error fetching data:', err);
    }
}

fetchDataFromGoogleSheets();
getCalendarAndDays();
getTOSchedule();
// getToMetrics(); for later...

app.get('/api/test-operators', (req, res) => {
    res.json(test_operators);
});

app.get('/api/row-values', (req, res) => {
    res.json(scheduleValues);
});

app.get('/api/calendar-values', (req, res) => {
    res.json(calendarValues);
});

app.get('/api/calendar', (req, res) => {
    res.json(calendar);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
