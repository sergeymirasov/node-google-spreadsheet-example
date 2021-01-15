# Google Spreadsheets

Example how to use [Google Spreadsheets](https://theoephraim.github.io/node-google-spreadsheet/#/)

## How to create a service account

1. On page [Service Accounts](https://console.cloud.google.com/projectselector2/iam-admin/serviceaccounts) click `Create project` and wait when the project is created
2. Then press button `Create service account`
3. On this page provide a name for the project. And choose the role of `Editor`. Then press `Done` button
4. Then go to page in sidemenu: `APIs & Services` > `Dashborad`
5. Press button `Enable APIs and Services`
6. Find `Google Sheets API` and press this card
7. Click `Enable`
8. Go back to the page [Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts) and select your project
9. Press button `Add key` and in the modal window select `JSON` type
10. The file with access will be downloaded. Rename it to `credentials.json` and put in the root
11. Go to the required table and click the `Configure access` button
12. In the `Add user` field, copy the email from the `Service Accounts` page. The email will look like this: `<name>@<project>.iam.gserviceaccount.com`
13. Create `.env` file in the root and paste `SHEET_ID=<Google Spreadsheets ID>`
14. ID can be obtained from url: `https://docs.google.com/spreadsheets/d/<ID>/`
15. Nice. Now run the project

## Commands

> npm run `<command name>`

1. `format` - code formatting
2. `start` - run project with nodemon

## Helpful Links

1. [How to access Google Spreadsheets with Node](https://cmichel.io/how-to-access-google-spreadsheet-with-node)
