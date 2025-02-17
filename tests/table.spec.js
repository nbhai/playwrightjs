const { test, expect } = require('@playwright/test');

test('Find and extract details of Maria Anders in the table', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html');

  // Select all the rows in the table
  const rows = await page.$$eval('table tbody tr', rows => {
    return rows.map(row => row.innerText); // Extract text from each row
  });

  // Iterate through each row and check for "Maria Anders"
  for (const rowText of rows) {
    if (rowText.includes('Maria Anders')) {
      // Extract the details of the row (columns) if "Maria Anders" is found
      const cells = await page.$$eval('table tbody tr', (rows, index) => {
        const cells = rows[index].querySelectorAll('td');
        return Array.from(cells).map(cell => cell.innerText); // Get text from all cells in the row
      }, rows.indexOf(rowText));

      console.log('Details of the row with Maria Anders:', cells);
      break; // Exit the loop once the row is found
    }
  }
});
