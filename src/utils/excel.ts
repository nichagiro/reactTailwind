function excelExport(columns: string[], rows: Record<string | number, unknown>[], name: string): void {
    const excelContent = `
  <html xmlns:x="urn:schemas-microsoft-com:office:excel">
  <head>
      <meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">
      <style>
          table {
              font-family: Calibri, sans-serif;
              border-collapse: collapse;
              width: 100%;
          }
          th, td {
              border: 1px solid #dddddd;
              text-align: left;
              padding: 8px;
          }
          th {
              background-color: #f2f2f2;
          }
      </style>
  </head>
  <body>
      <table>
          <thead>
              <tr>
                  ${columns.map(column => `<th style="text-align: center;">${column}</th>`).join('')}
              </tr>
          </thead>
          <tbody>
              ${rows.map(row => `<tr>${Object.values(row).map(value => `<td style="text-align: center;">${value ? value : ""}</td>`).join('')}</tr>`).join('')}
          </tbody>
      </table>
  </body>
  </html>
`;

    const excelBlob = new Blob([excelContent], { type: 'application/vnd.ms-excel' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(excelBlob);
    link.download = name;
    link.click();
}


export default excelExport