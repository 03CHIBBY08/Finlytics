export function exportToCSV(data: any[], filename: string) {
  if (!data.length) return

  const headers = Object.keys(data[0])
  const csvContent = [
    headers.join(","),
    ...data.map((row) =>
      headers
        .map((header) => {
          const value = row[header]
          // Escape commas and quotes in CSV
          if (typeof value === "string" && (value.includes(",") || value.includes('"'))) {
            return `"${value.replace(/"/g, '""')}"`
          }
          return value
        })
        .join(","),
    ),
  ].join("\n")

  downloadFile(csvContent, filename, "text/csv")
}

export function exportToPDF(content: string, filename: string) {
  // Simple PDF generation - in production, use libraries like jsPDF
  const pdfContent = `
%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
>>
endobj

4 0 obj
<<
/Length ${content.length + 50}
>>
stream
BT
/F1 12 Tf
50 750 Td
(${content}) Tj
ET
endstream
endobj

xref
0 5
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000206 00000 n 
trailer
<<
/Size 5
/Root 1 0 R
>>
startxref
${300 + content.length}
%%EOF`

  downloadFile(pdfContent, filename, "application/pdf")
}

export function downloadFile(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}

export function generateReport(type: string, data: any) {
  const timestamp = new Date().toISOString().split("T")[0]

  switch (type) {
    case "revenue":
      return {
        title: `Revenue Report - ${timestamp}`,
        content: `
FINLYTICS REVENUE REPORT
Generated: ${new Date().toLocaleString()}
========================================

SUMMARY:
- Total Revenue: ₹${data.totalRevenue?.toLocaleString() || "1,50,000"}
- Monthly Growth: ${data.growth || "+12%"}
- Active Customers: ${data.customers || "2,847"}
- Churn Rate: ${data.churnRate || "3.2%"}

MONTHLY BREAKDOWN:
${data.monthly?.map((m: any) => `${m.month}: ₹${m.revenue?.toLocaleString()}`).join("\n") || "No data available"}

RECOMMENDATIONS:
- Continue current growth trajectory
- Focus on customer retention
- Expand enterprise offerings
        `,
        filename: `revenue-report-${timestamp}.txt`,
      }

    case "customer":
      return {
        title: `Customer Report - ${timestamp}`,
        content: `
FINLYTICS CUSTOMER REPORT
Generated: ${new Date().toLocaleString()}
========================================

CUSTOMER METRICS:
- Total Customers: ${data.total || "2,847"}
- Active: ${data.active || "2,456"}
- Trial: ${data.trial || "234"}
- Churned: ${data.churned || "157"}

ACQUISITION CHANNELS:
- Ads: 35%
- Referrals: 28%
- Organic: 22%
- Influencers: 15%

KEY INSIGHTS:
- Customer satisfaction: 94%
- Average LTV: ₹2,450
- CAC: ₹250
        `,
        filename: `customer-report-${timestamp}.txt`,
      }

    default:
      return {
        title: `System Report - ${timestamp}`,
        content: `
FINLYTICS SYSTEM REPORT
Generated: ${new Date().toLocaleString()}
========================================

SYSTEM STATUS: ONLINE
Performance: 98.7%
Uptime: 99.9%
Neural AI Status: ACTIVE

RECENT ACTIVITY:
- Data processed: 1.2M records
- API calls: 45,678
- Storage used: 67%
        `,
        filename: `system-report-${timestamp}.txt`,
      }
  }
}
