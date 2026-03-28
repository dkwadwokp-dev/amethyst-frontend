import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const formatCurrency = (value: number) =>
  `GHS ${value.toLocaleString("en-GH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export const generateInvoicePDF = (booking: any) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  // Header
  doc.setFontSize(22);
  // doc.setFont("marcellus", "bold");
  doc.text("AMETHYST SUITES & DINING", 20, 25);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100);
  doc.text("14 Aviation Road, Airport Residential Area, Accra, Ghana", 20, 32);
  doc.text("Contact: +233 (0) 302 123 4567 | reservations@amethysthotel.com", 20, 37);

  // Invoice Title
  doc.setFontSize(14);
  doc.setTextColor(0);
  doc.setFont("helvetica", "bold");
  doc.text("INVOICE / BOOKING CONFIRMATION", 20, 50);

  // Horizontal Line
  doc.setLineWidth(0.5);
  doc.line(20, 55, pageWidth - 20, 55);

  // Booking Info
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("BILL TO:", 20, 65);
  doc.setFont("helvetica", "normal");
  doc.text(`${booking.firstName} ${booking.lastName}`, 20, 70);
  doc.text(booking.email, 20, 75);

  doc.setFont("helvetica", "bold");
  doc.text("BOOKING DETAILS:", 120, 65);
  doc.setFont("helvetica", "normal");
  doc.text(`Reference: #${booking.reference}`, 120, 70);
  doc.text(`Date Issued: ${new Date().toLocaleDateString()}`, 120, 75);
  doc.text(`Status: ${booking.status}`, 120, 80);

  // Table
  const amount = booking.amount || 0;
  const subtotalValue = amount / 1.14;
  const taxValue = amount - subtotalValue;

  const tableData = [
    [
      booking.type === "room" ? "Accommodation" : "Dining Reservation",
      booking.itemType || booking.resourceId || "Standard Luxury",
      booking.guests + " Guest(s)",
      booking.type === "room" ? formatCurrency(subtotalValue) : "Included",
    ],
  ];

  autoTable(doc, {
    startY: 90,
    head: [["Description", "Type", "Details", "Amount"]],
    body: tableData,
    theme: "striped",
    headStyles: { fillColor: [42, 46, 51], textColor: [255, 255, 255] },
    margin: { left: 20, right: 20 },
  });

  const finalY = (doc as any).lastAutoTable.finalY + 10;

  // Summary
  if (booking.type === "room") {
    doc.setFont("helvetica", "bold");
    doc.text("Subtotal:", 140, finalY);
    doc.text(formatCurrency(subtotalValue), 175, finalY);

    doc.text("Taxes (14%):", 140, finalY + 7);
    doc.text(formatCurrency(taxValue), 175, finalY + 7);

    doc.setFontSize(12);
    doc.line(140, finalY + 10, 190, finalY + 10);
    doc.text("Total Amount:", 140, finalY + 17);
    doc.text(formatCurrency(amount), 175, finalY + 17);
  } else {
    doc.setFont("helvetica", "bold");
    doc.text("Total Amount:", 140, finalY);
    doc.text(formatCurrency(amount), 175, finalY);
  }

  // Footer
  doc.setFontSize(8);
  doc.setTextColor(150);
  doc.text(
    "Thank you for choosing Amethyst Suites & Dining. We look forward to your visit.",
    pageWidth / 2,
    finalY + 40,
    { align: "center" },
  );

  doc.save(`invoice-${booking.reference}.pdf`);
};
