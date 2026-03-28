import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  pdf,
} from "@react-pdf/renderer";

Font.register({
  family: "Marcellus",
  src: "https://fonts.gstatic.com/s/marcellus/v14/wEO_EBrOk8hQLDvIAF8FUQ.ttf",
});

Font.register({
  family: "Manrope",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FO_F.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/manrope/v20/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE-_F.ttf",
      fontWeight: 700,
    },
  ],
});

const PRIMARY = "#941b1b";
const DARK = "#2A2E33";
const GRAY = "#6B7280";
const LIGHT = "#F8F9FA";
const BORDER = "#E5E7EB";
const WHITE = "#FFFFFF";

const formatCurrency = (value: number) =>
  `GHS ${value.toLocaleString("en-GH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const styles = StyleSheet.create({
  page: {
    fontFamily: "Manrope",
    paddingTop: 48,
    paddingBottom: 64,
    paddingHorizontal: 48,
    backgroundColor: WHITE,
    fontSize: 9,
    color: DARK,
  },
  // ── Header ──────────────────────────────────────────
  header: { marginBottom: 24 },
  brandName: {
    fontFamily: "Marcellus",
    fontSize: 22,
    color: PRIMARY,
    letterSpacing: 3,
  },
  brandSub: {
    fontSize: 7,
    color: GRAY,
    letterSpacing: 4,
    marginTop: 2,
    marginBottom: 10,
  },
  headerAddress: { fontSize: 7.5, color: GRAY, marginTop: 2 },
  divider: {
    borderBottomWidth: 1.5,
    borderBottomColor: PRIMARY,
    marginTop: 14,
  },

  // ── Invoice title ────────────────────────────────────
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 20,
    marginBottom: 20,
  },
  invoiceTitle: {
    fontFamily: "Marcellus",
    fontSize: 13,
    color: PRIMARY,
    letterSpacing: 1,
  },
  invoiceDate: { fontSize: 8, color: GRAY },

  // ── Bill / booking info ──────────────────────────────
  billRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    gap: 16,
  },
  billBlock: { flex: 1 },
  billLabel: {
    fontSize: 7,
    fontWeight: 700,
    letterSpacing: 2,
    color: GRAY,
    marginBottom: 6,
  },
  billName: {
    fontFamily: "Marcellus",
    fontSize: 11,
    color: DARK,
    marginBottom: 3,
  },
  billDetail: { fontSize: 8, color: GRAY, marginTop: 2 },

  // ── Table ────────────────────────────────────────────
  tableHead: {
    flexDirection: "row",
    backgroundColor: PRIMARY,
    paddingVertical: 7,
    paddingHorizontal: 10,
  },
  tableHeadCell: {
    color: WHITE,
    fontSize: 7,
    fontWeight: 700,
    letterSpacing: 1.5,
    flex: 1,
  },
  tableRow: {
    flexDirection: "row",
    backgroundColor: LIGHT,
    paddingVertical: 9,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
  },
  tableCell: { fontSize: 8, color: DARK, flex: 1 },

  // ── Summary ──────────────────────────────────────────
  summary: { marginTop: 16, alignItems: "flex-end" },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 210,
    paddingVertical: 3,
  },
  summaryLabel: { fontSize: 8, color: GRAY },
  summaryValue: { fontSize: 8, color: DARK, fontWeight: 700 },
  summaryDivider: {
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
    width: 210,
    marginVertical: 5,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 210,
    paddingVertical: 4,
  },
  totalLabel: { fontFamily: "Marcellus", fontSize: 11, color: PRIMARY },
  totalValue: { fontFamily: "Marcellus", fontSize: 11, color: PRIMARY },

  // ── Footer ───────────────────────────────────────────
  footer: {
    position: "absolute",
    bottom: 32,
    left: 48,
    right: 48,
    borderTopWidth: 1,
    borderTopColor: BORDER,
    paddingTop: 12,
  },
  footerText: {
    fontSize: 7,
    color: GRAY,
    textAlign: "center",
    letterSpacing: 0.5,
  },
});

const InvoiceDocument = ({ booking }: { booking: any }) => {
  const amount = booking.amount || 0;
  const subtotal = amount / 1.14;
  const tax = amount - subtotal;
  const isRoom = booking.type === "room";

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.brandName}>AMETHYST</Text>
          <Text style={styles.brandSub}>SUITES & DINING</Text>
          <Text style={styles.headerAddress}>
            14 Aviation Road, Airport Residential Area, Accra, Ghana
          </Text>
          <Text style={styles.headerAddress}>
            reservations@amethysthotel.com | +233 (0) 302 123 4567
          </Text>
          <View style={styles.divider} />
        </View>

        {/* Title row */}
        <View style={styles.titleRow}>
          <Text style={styles.invoiceTitle}>
            INVOICE / BOOKING CONFIRMATION
          </Text>
          <Text style={styles.invoiceDate}>
            {new Date().toLocaleDateString("en-GH", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </Text>
        </View>

        {/* Bill to + Booking details */}
        <View style={styles.billRow}>
          <View style={styles.billBlock}>
            <Text style={styles.billLabel}>BILL TO</Text>
            <Text style={styles.billName}>
              {booking.firstName} {booking.lastName}
            </Text>
            <Text style={styles.billDetail}>{booking.email}</Text>
          </View>
          <View style={styles.billBlock}>
            <Text style={styles.billLabel}>BOOKING DETAILS</Text>
            <Text style={styles.billDetail}>
              Reference: #{booking.reference}
            </Text>
            <Text style={styles.billDetail}>Status: {booking.status}</Text>
            <Text style={styles.billDetail}>Guests: {booking.guests}</Text>
          </View>
        </View>

        {/* Table */}
        <View style={styles.tableHead}>
          <Text style={[styles.tableHeadCell, { flex: 2 }]}>Description</Text>
          <Text style={styles.tableHeadCell}>Type</Text>
          <Text style={styles.tableHeadCell}>Details</Text>
          <Text style={[styles.tableHeadCell, { textAlign: "right" }]}>
            Amount
          </Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, { flex: 2 }]}>
            {isRoom ? "Accommodation" : "Dining Reservation"}
          </Text>
          <Text style={styles.tableCell}>
            {booking.itemType || booking.resourceId || "Standard Luxury"}
          </Text>
          <Text style={styles.tableCell}>{booking.guests} Guest(s)</Text>
          <Text style={[styles.tableCell, { textAlign: "right" }]}>
            {isRoom ? formatCurrency(subtotal) : "Included"}
          </Text>
        </View>

        {/* Summary */}
        <View style={styles.summary}>
          {isRoom ? (
            <>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Subtotal</Text>
                <Text style={styles.summaryValue}>
                  {formatCurrency(subtotal)}
                </Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Taxes (14%)</Text>
                <Text style={styles.summaryValue}>{formatCurrency(tax)}</Text>
              </View>
              <View style={styles.summaryDivider} />
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Total Amount</Text>
                <Text style={styles.totalValue}>{formatCurrency(amount)}</Text>
              </View>
            </>
          ) : (
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total Amount</Text>
              <Text style={styles.totalValue}>{formatCurrency(amount)}</Text>
            </View>
          )}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Thank you for choosing Amethyst Suites & Dining. We look forward to
            welcoming you.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export const generateInvoicePDF = async (booking: any) => {
  const blob = await pdf(<InvoiceDocument booking={booking} />).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `invoice-${booking.reference}.pdf`;
  link.click();
  URL.revokeObjectURL(url);
};
