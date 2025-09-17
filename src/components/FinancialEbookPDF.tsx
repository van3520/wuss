// components/FinancialEbookPDF.tsx
import React from "react";
import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import ebookCover from "@/assets/ebook-cover.jpg";

const styles = StyleSheet.create({
  page: { backgroundColor: "#fefefe", padding: 20, fontFamily: "Helvetica" },
  coverContainer: { alignItems: "center", marginBottom: 20 },
  coverImage: { width: 220, height: 280, marginBottom: 15, borderRadius: 8 },
  coverTitle: { fontSize: 30, color: "#EC4899", fontWeight: "bold", marginBottom: 6, textAlign: "center" },
  coverSubtitle: { fontSize: 16, color: "#065F46", marginBottom: 3, textAlign: "center" },
  section: { marginBottom: 15, padding: 12, borderRadius: 8 },
  sectionPink: { backgroundColor: "#FECACA" },   // pink muda
  sectionGreen: { backgroundColor: "#064E3B" },  // hijau tua
  sectionGray: { backgroundColor: "#E5E7EB" },   // abu-abu muda
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 6, color: "#111827" },
  sectionTitleWhite: { fontSize: 18, fontWeight: "bold", marginBottom: 6, color: "#F3F4F6" },
  text: { fontSize: 12, color: "#111827", marginBottom: 4, lineHeight: 1.5 },
  textWhite: { fontSize: 12, color: "#F3F4F6", marginBottom: 4, lineHeight: 1.5 },
  image: { width: "100%", height: 150, marginBottom: 6, borderRadius: 6 },
  bulletContainer: { flexDirection: "row", marginBottom: 3 },
  bulletPink: { width: 6, height: 6, borderRadius: 3, backgroundColor: "#EC4899", marginRight: 6 },
  bulletGreen: { width: 6, height: 6, borderRadius: 3, backgroundColor: "#10B981", marginRight: 6 },
  bulletGray: { width: 6, height: 6, borderRadius: 3, backgroundColor: "#6B7280", marginRight: 6 }
});

export const FinancialEbookDocument = () => (
  <Document>
    {/* Cover */}
    <Page style={styles.page}>
      <View style={styles.coverContainer}>
        <Image src={ebookCover} style={styles.coverImage} />
        <Text style={styles.coverTitle}>Smart Money 💰</Text>
        <Text style={styles.coverSubtitle}>Panduan Finansial untuk Anak SMP</Text>
        <Text style={styles.coverSubtitle}>Belajar menabung, merencanakan keuangan, dan cerdas menggunakan uang</Text>
      </View>
    </Page>

    {/* Bab 1 */}
    <Page style={styles.page}>
      <View style={[styles.section, styles.sectionPink]}>
        <Text style={styles.sectionTitleWhite}>Bab 1: Apa itu Uang 🪙</Text>
        <Text style={styles.textWhite}>Uang adalah alat tukar penting untuk membeli barang & jasa. Anak-anak perlu belajar menggunakan uang secara bijak.</Text>
        <Image src="https://placekitten.com/400/150" style={styles.image} />
        <View style={styles.bulletContainer}><View style={styles.bulletWhite} /><Text style={styles.textWhite}>Uang kertas & koin</Text></View>
        <View style={styles.bulletContainer}><View style={styles.bulletWhite} /><Text style={styles.textWhite}>Cara menyimpan uang dengan aman</Text></View>
        <View style={styles.bulletContainer}><View style={styles.bulletWhite} /><Text style={styles.textWhite}>Menggunakan uang secara bijak</Text></View>
      </View>

      {/* Bab 2 */}
      <View style={[styles.section, styles.sectionGreen]}>
        <Text style={styles.sectionTitleWhite}>Bab 2: Menabung 🐷</Text>
        <Text style={styles.textWhite}>Menabung adalah menyimpan sebagian uang untuk masa depan. Bisa menggunakan celengan fisik atau tabungan bank anak.</Text>
        <Image src="https://placekitten.com/401/150" style={styles.image} />
        <View style={styles.bulletContainer}><View style={styles.bulletGreen} /><Text style={styles.textWhite}>Buat target menabung</Text></View>
        <View style={styles.bulletContainer}><View style={styles.bulletGreen} /><Text style={styles.textWhite}>Pisahkan uang untuk tabungan & kebutuhan</Text></View>
      </View>

      {/* Bab 3 */}
      <View style={[styles.section, styles.sectionGray]}>
        <Text style={styles.sectionTitle}>Bab 3: Membuat Anggaran 📊</Text>
        <Text style={styles.text}>Pisahkan uangmu untuk kebutuhan, hiburan, & tabungan. Dengan membuat anggaran, kamu bisa mengontrol pengeluaran dengan baik.</Text>
        <Image src="https://placekitten.com/402/150" style={styles.image} />
        <View style={styles.bulletContainer}><View style={styles.bulletGray} /><Text style={styles.text}>Anggaran kebutuhan harian</Text></View>
        <View style={styles.bulletContainer}><View style={styles.bulletGray} /><Text style={styles.text}>Anggaran hiburan</Text></View>
        <View style={styles.bulletContainer}><View style={styles.bulletGray} /><Text style={styles.text}>Anggaran tabungan</Text></View>
      </View>
    </Page>
  </Document>
);
