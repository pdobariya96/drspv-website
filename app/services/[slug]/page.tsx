import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ChevronDown, BookOpen } from "lucide-react";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";

/* ═══════════════════════════════════════════════════════════════════
   FULL SERVICES DATA
   ═══════════════════════════════════════════════════════════════════ */

interface ServiceFAQ {
  q: string;
  a: string;
}

interface ServiceStep {
  title: string;
  desc: string;
}

interface RelatedKB {
  title: string;
  href: string;
}

interface ServiceData {
  title: string;
  slug: string;
  metaTitle: string;
  metaDesc: string;
  color: string;
  description: string;
  whoNeeds: string[];
  steps: ServiceStep[];
  faq: ServiceFAQ[];
  relatedKB: RelatedKB[];
  keywords: string[];
}

const servicesData: Record<string, ServiceData> = {
  "income-tax-advisory": {
    title: "Income Tax Advisory",
    slug: "income-tax-advisory",
    metaTitle: "Income Tax Advisory Services",
    metaDesc:
      "Expert income tax advisory services from DRSPV & Associates. Strategic tax planning, ITR filing, assessment support, and appeal representation for individuals and businesses across India.",
    color: "#F59E0B",
    description: `Income tax compliance in India is far more than just filing an annual return. It requires proactive planning, a deep understanding of the ever-changing provisions of the Income Tax Act 1961, and the ability to structure transactions in a manner that is both tax-efficient and legally defensible. At DRSPV & Associates, our income tax advisory practice is built on these principles.

We serve a wide range of clients including salaried professionals, high-net-worth individuals (HNIs), partnerships, LLPs, private limited companies, and trusts. Our advisory begins well before the end of the financial year with advance tax estimation, optimal investment planning under Section 80C/80D/80G, capital gains structuring, and business expenditure optimisation. We ensure that our clients leverage every legitimate deduction and exemption available under law.

For businesses, our services extend to transfer pricing documentation, Section 115BAA/115BAB rate optimisation, MAT/AMT computation, and inter-company transaction structuring. We handle all TDS and TCS compliance including return filing, lower deduction certificate applications, and default resolution. Our team has extensive experience representing clients before the Income Tax Department during scrutiny assessments, reassessment proceedings, and appeals before CIT(A) and ITAT.

We also advise NRIs and returning Indians on residential status determination, DTAA treaty benefits, taxation of foreign income, and repatriation planning. Our approach is always preventive rather than reactive, ensuring our clients are never caught off-guard by a notice or demand.

Every engagement includes a dedicated CA, regular compliance calendar updates, and proactive advisory notes whenever relevant amendments or notifications are issued by the CBDT. We pride ourselves on our 48-hour response guarantee for all tax queries and a track record of zero penalties for compliant clients.`,
    whoNeeds: [
      "Salaried professionals with complex income sources",
      "HNIs with capital gains, rental income, and foreign assets",
      "Businesses needing TDS/TCS compliance and advance tax planning",
      "NRIs requiring DTAA benefits and repatriation advisory",
      "Trusts, societies, and charitable organisations",
    ],
    steps: [
      { title: "Tax Health Check", desc: "Review your current tax position, income sources, deductions, and past filings to identify risks and opportunities." },
      { title: "Strategy & Planning", desc: "Design a customised tax plan covering advance tax, deductions, capital gains structuring, and entity-level optimisation." },
      { title: "Compliance & Filing", desc: "Prepare and file ITRs, TDS returns, and respond to any notices. Handle all communication with the Income Tax Department." },
      { title: "Assessment Support", desc: "Represent you during scrutiny, reassessment, or appeal proceedings before CIT(A) and ITAT with complete documentation." },
      { title: "Ongoing Advisory", desc: "Continuous monitoring of CBDT circulars, new amendments, and quarterly review meetings to keep your tax position optimised." },
    ],
    faq: [
      {
        q: "What is the due date for filing an income tax return in India?",
        a: "For individuals and businesses not requiring audit, the due date is 31st July of the assessment year. For businesses requiring audit under Section 44AB, the due date is 31st October. Companies with transfer pricing obligations must file by 30th November. These dates may be extended by CBDT notification.",
      },
      {
        q: "How can DRSPV help reduce my tax liability legally?",
        a: "We employ legitimate tax planning strategies including optimal use of deductions under Chapter VIA (80C, 80D, 80G, etc.), capital gains exemptions under Sections 54/54EC/54F, presumptive taxation schemes for eligible businesses, and entity restructuring to take advantage of lower corporate tax rates under Section 115BAA.",
      },
      {
        q: "What happens if I receive a notice from the Income Tax Department?",
        a: "Our team handles all types of IT notices including intimation under Section 143(1), scrutiny notices under Section 143(2), reassessment notices under Section 148, and demand notices. We draft detailed responses, compile supporting documents, and represent you before the assessing officer or appellate authorities.",
      },
      {
        q: "Do you handle NRI taxation and DTAA benefits?",
        a: "Yes. We advise NRIs and returning Indians on residential status under Section 6, taxability of Indian and foreign income, DTAA treaty benefits for avoiding double taxation, TDS on property sale by NRIs, and repatriation of funds from India under FEMA regulations.",
      },
      {
        q: "What are your fees for income tax advisory?",
        a: "Our fees are fixed and transparent, based on the complexity of your income sources and the scope of advisory required. We provide a detailed engagement letter before starting work. There are no hidden charges. Contact us for a customised quote based on your specific requirements.",
      },
    ],
    relatedKB: [],
    keywords: ["income tax advisory", "tax planning India", "ITR filing CA", "tax consultant Rajkot", "HNI tax planning"],
  },

  "audit-assurance": {
    title: "Audit & Assurance",
    slug: "audit-assurance",
    metaTitle: "Audit & Assurance Services",
    metaDesc:
      "Professional statutory audit, tax audit, internal audit, and assurance services by DRSPV & Associates. ICAI-registered CA firm with experience across industries.",
    color: "#EF4444",
    description: `Auditing is the foundation of financial trust. Whether mandated by statute or driven by business needs, a well-conducted audit provides stakeholders with confidence that financial statements present a true and fair view. DRSPV & Associates brings rigour, independence, and industry expertise to every audit engagement.

Our audit practice covers statutory audits under the Companies Act 2013, tax audits under Section 44AB of the Income Tax Act, GST audits, bank audits, and internal audits. We work with companies across manufacturing, trading, IT services, real estate, NBFC, and education sectors. Our audit methodology is aligned with the Standards on Auditing (SAs) issued by ICAI and we leverage technology-driven audit tools for efficient and thorough testing.

For statutory audits, we go beyond tick-box compliance. Our engagement includes a detailed planning phase where we assess the entity's risk profile, materiality thresholds, and internal control environment. We conduct substantive testing, analytical procedures, and management letter recommendations that genuinely help improve the company's financial reporting and governance frameworks. We also handle CARO 2020 reporting for applicable companies.

Internal audits form a critical part of our practice. We design risk-based internal audit plans, evaluate process controls, test compliance with policies, and report findings to management and audit committees. Our internal audit reports are actionable, highlighting root causes and recommending specific process improvements rather than generic observations.

We also undertake concurrent audits for banks and NBFCs, stock audits for lenders, and special purpose audits for specific transactions or compliance requirements. Every audit is led by a qualified partner with a dedicated team of audit professionals, ensuring timely completion and high-quality deliverables.`,
    whoNeeds: [
      "Companies requiring statutory audit under the Companies Act 2013",
      "Businesses with turnover exceeding tax audit thresholds",
      "Banks and NBFCs requiring concurrent audit",
      "Management seeking internal audit and controls review",
      "Entities applying for bank loans or external funding",
    ],
    steps: [
      { title: "Engagement & Planning", desc: "Understand the entity, assess risk, set materiality, and design the audit plan covering all significant account areas." },
      { title: "Fieldwork & Testing", desc: "Execute substantive tests, analytical reviews, and control testing. Verify balances, transactions, and disclosures." },
      { title: "Management Discussion", desc: "Discuss findings, adjustments, and management letter points. Resolve queries and obtain management representations." },
      { title: "Report Issuance", desc: "Issue the audit report with opinion, CARO annexure (if applicable), and detailed management letter with recommendations." },
    ],
    faq: [
      {
        q: "When is a statutory audit mandatory for a company?",
        a: "Every company registered under the Companies Act 2013, regardless of turnover or capital, must get its accounts audited by a Chartered Accountant. This includes private limited companies, one person companies, and Section 8 companies. The auditor must be appointed at the AGM.",
      },
      {
        q: "What is the difference between statutory audit and tax audit?",
        a: "A statutory audit is conducted under the Companies Act 2013 and covers the true and fair view of financial statements. A tax audit under Section 44AB of the Income Tax Act is triggered when business turnover exceeds Rs 1 crore (Rs 10 crore with conditions) or professional receipts exceed Rs 50 lakhs. Both may apply simultaneously.",
      },
      {
        q: "How long does an audit engagement typically take?",
        a: "The duration depends on the size and complexity of the entity. A standard statutory audit for an SME typically takes 2-4 weeks from fieldwork to report issuance. Larger or more complex entities may require 4-8 weeks. We always provide a clear timeline at the engagement stage.",
      },
      {
        q: "Do you conduct internal audits for SMEs?",
        a: "Yes. Internal audit is mandatory for certain companies under Section 138 of the Companies Act, but we recommend it for all growing businesses. Our risk-based internal audit approach helps SMEs strengthen controls, reduce fraud risk, and improve operational efficiency even before they hit statutory thresholds.",
      },
      {
        q: "What reporting standards do you follow?",
        a: "We follow the Standards on Auditing (SAs) issued by ICAI for all audit engagements. Financial statements are reported under Ind AS for applicable companies and Indian GAAP (Accounting Standards) for others. Our reports comply with CARO 2020 and all applicable provisions of the Companies Act 2013.",
      },
    ],
    relatedKB: [],
    keywords: ["statutory audit India", "tax audit 44AB", "CA firm audit", "internal audit services", "audit assurance Rajkot"],
  },

  "gst-compliance": {
    title: "GST Compliance",
    slug: "gst-compliance",
    metaTitle: "GST Compliance & Advisory Services",
    metaDesc:
      "Complete GST compliance services from DRSPV & Associates including registration, return filing, e-invoicing, refunds, audit, and litigation support across India.",
    color: "#A855F7",
    description: `The Goods and Services Tax (GST) regime, introduced in India in July 2017, has fundamentally transformed indirect taxation. While it simplified the multi-layered tax structure, it also introduced stringent compliance requirements with monthly, quarterly, and annual filings, e-invoicing mandates, and complex input tax credit (ITC) matching rules. At DRSPV & Associates, our dedicated GST practice ensures your business stays compliant while maximising legitimate ITC claims.

Our GST services begin with registration and extend through the entire compliance lifecycle. We handle GST registrations for new businesses, additional state registrations for multi-state operations, and composition scheme enrolments. For ongoing compliance, we manage GSTR-1, GSTR-3B, GSTR-9, and GSTR-9C filings with meticulous reconciliation of purchase and sales data against GSTR-2A/2B auto-populated returns.

E-invoicing has become mandatory for businesses with turnover exceeding Rs 5 crore. We assist with e-invoicing setup, IRN generation workflow design, and integration with your ERP or accounting software. Similarly, we handle e-way bill compliance for goods movement, ensuring your logistics operations are never disrupted by documentation gaps.

Our advisory practice covers ITC optimisation, reverse charge mechanism applicability, place of supply determination for inter-state transactions, and industry-specific GST issues in sectors like real estate (where builders deal with complex ITC reversal rules), e-commerce (with TCS provisions), and export/import (with LUT, refund claims, and IGST implications). We have successfully handled GST refund claims for exporters, inverted duty structures, and excess cash ledger balances.

When disputes arise, our team provides end-to-end litigation support including drafting replies to show cause notices, representing clients before adjudicating authorities, and filing appeals before the appellate authority and GST tribunal. We also conduct voluntary GST health checks to identify and rectify compliance gaps before they attract scrutiny or penalties.`,
    whoNeeds: [
      "Businesses with multi-state GST operations",
      "Manufacturers and traders with complex ITC claims",
      "E-commerce sellers and marketplace operators",
      "Exporters requiring LUT and refund processing",
      "Companies facing GST notices or audit proceedings",
    ],
    steps: [
      { title: "GST Health Check", desc: "Review your current GST registrations, return history, ITC position, and compliance gaps across all GSTINs." },
      { title: "Setup & Integration", desc: "Configure e-invoicing, e-way bills, and reconciliation workflows. Integrate with your accounting software for seamless data flow." },
      { title: "Monthly Compliance", desc: "Reconcile purchase/sales data, prepare and file GSTR-1 and GSTR-3B, and manage ITC claims with GSTR-2B matching." },
      { title: "Annual Filing & Audit", desc: "Prepare GSTR-9 annual return and GSTR-9C reconciliation statement. Identify and resolve discrepancies before filing." },
      { title: "Advisory & Disputes", desc: "Ongoing advisory on GST implications of new transactions. Handle notices, refund claims, and litigation as needed." },
    ],
    faq: [
      {
        q: "When is GST registration mandatory?",
        a: "GST registration is mandatory when aggregate turnover exceeds Rs 40 lakh (Rs 20 lakh for services and special category states). It is also mandatory for inter-state suppliers, e-commerce operators, those liable to pay tax under reverse charge, and casual/non-resident taxable persons regardless of turnover.",
      },
      {
        q: "What is e-invoicing and is it applicable to my business?",
        a: "E-invoicing is the electronic generation of invoices through the GST portal's Invoice Registration Portal (IRP). It is mandatory for businesses with aggregate turnover exceeding Rs 5 crore. The system generates a unique Invoice Reference Number (IRN) for each invoice, enabling real-time reporting and auto-population of GSTR-1.",
      },
      {
        q: "How do you handle GST refund claims?",
        a: "We handle refund claims for exporters (IGST paid on exports or accumulated ITC with LUT), inverted duty structure cases, excess cash ledger balance, and refunds on account of assessment or appeal orders. We prepare RFD-01 applications with all supporting documents and follow up with the department until disbursement.",
      },
      {
        q: "Can you help with GST notices and litigation?",
        a: "Yes. Our team handles all types of GST notices including scrutiny notices, demand notices, and show cause notices. We draft detailed replies, compile evidence, represent clients before adjudicating authorities, and file appeals before the appellate authority. We have significant experience in ITC mismatch cases, classification disputes, and valuation issues.",
      },
      {
        q: "Do you handle GST for e-commerce businesses?",
        a: "Yes. E-commerce operators have specific GST obligations including TCS collection under Section 52, GST registration in every state where they supply, and compliance with marketplace seller provisions. We handle the entire e-commerce GST compliance cycle including TCS returns, supplier reconciliation, and state-wise registration management.",
      },
    ],
    relatedKB: [],
    keywords: ["GST compliance services", "GST return filing", "e-invoicing consultant", "GST audit", "GST refund claim"],
  },

  "global-accounting": {
    title: "Global Accounting",
    slug: "global-accounting",
    metaTitle: "Global Accounting & Outsourced Bookkeeping",
    metaDesc:
      "Outsourced bookkeeping and accounting services for US, UK, and Australian businesses. DRSPV & Associates delivers QuickBooks, Xero, and MYOB services with dedicated teams.",
    color: "#22C55E",
    description: `Accounting outsourcing to India has grown exponentially as CPA firms, accounting practices, and small businesses in the USA, UK, and Australia recognise the cost, quality, and scalability advantages of working with qualified Indian CA teams. DRSPV & Associates operates a dedicated global accounting division that serves overseas clients with the same technical rigour and responsiveness expected by domestic practices.

Our team is proficient in US GAAP, IFRS, and local accounting standards across all three jurisdictions. We work on industry-standard platforms including QuickBooks Online, QuickBooks Desktop, Xero, MYOB, FreshBooks, and Sage. Whether you need day-to-day bookkeeping, monthly close, or full back-office support, we build a workflow that integrates seamlessly with your existing processes.

For CPA and accounting firms, we serve as a white-label back-office partner. Our services include transaction coding and categorisation, bank and credit card reconciliation, accounts receivable and payable management, payroll processing, and monthly financial statement preparation. We follow your firm's chart of accounts, templates, and review checklists. All work is delivered under your brand with full confidentiality protections.

For SMBs operating internationally, we provide CFO-level financial reporting without the CFO price tag. This includes monthly P&L, balance sheet, cash flow statements, budget vs actual analysis, and KPI dashboards. We also handle multi-currency transactions, intercompany reconciliation, and consolidation for entities operating across India and overseas.

Data security is paramount in our global operations. We use encrypted file transfer, VPN-secured access, and strict NDA-backed engagement terms. Our team works in overlap hours with US, UK, and Australian time zones, ensuring real-time communication and same-day turnaround for urgent requests. Every client is assigned a dedicated team lead and a partner-level reviewer to maintain consistent quality.`,
    whoNeeds: [
      "CPA and accounting firms seeking outsourcing partners",
      "US/UK/Australian SMBs needing bookkeeping support",
      "Startups with international operations requiring multi-currency accounting",
      "Businesses migrating to QuickBooks, Xero, or MYOB",
      "Companies needing monthly financial statements and MIS",
    ],
    steps: [
      { title: "Discovery & Scoping", desc: "Understand your current accounting setup, software stack, reporting requirements, and expected volumes." },
      { title: "Onboarding & Access", desc: "Set up secure access to your accounting software, document management, and communication channels." },
      { title: "Process Setup", desc: "Configure chart of accounts, templates, recurring entries, and automated bank feeds. Establish review workflows." },
      { title: "Ongoing Delivery", desc: "Daily/weekly bookkeeping, monthly close, financial statements, and reconciliations delivered on schedule." },
    ],
    faq: [
      {
        q: "What accounting software do you support?",
        a: "We work with QuickBooks Online, QuickBooks Desktop (via hosted environments), Xero, MYOB, FreshBooks, Sage, and Wave. Our team is certified on QuickBooks and Xero, and we can adapt to any cloud-based platform your firm uses.",
      },
      {
        q: "How do you ensure data security for international clients?",
        a: "We use encrypted file transfer protocols, VPN-secured access to client systems, dedicated workstations with no external storage access, and comprehensive NDA-backed engagement terms. We comply with data protection best practices aligned with SOC 2 principles.",
      },
      {
        q: "What time zones do you support?",
        a: "Our global accounting team operates in overlap hours with US (EST/PST), UK (GMT/BST), and Australian (AEST/AEDT) time zones. For US clients, our team is available from 6 PM to 3 AM IST. For UK clients, overlap is from 1:30 PM to 9:30 PM IST. We ensure real-time availability during your business hours.",
      },
      {
        q: "Can you serve as a white-label partner for CPA firms?",
        a: "Yes. We work as an invisible back-office extension for CPA firms. All deliverables are prepared under your firm's branding, templates, and review standards. Your clients never interact with or know about us. We currently support CPA firms across the US handling 50 to 500+ client engagements.",
      },
      {
        q: "What is the typical turnaround for monthly close?",
        a: "For most SMB clients, we complete monthly close within 5-7 business days after month-end. For CPA firm clients with multiple entities, we work on a rolling schedule and deliver all monthly packages within 10-12 business days. Rush timelines are available for an additional fee.",
      },
    ],
    relatedKB: [],
    keywords: ["accounting outsourcing India", "bookkeeping services USA", "QuickBooks accountant", "Xero bookkeeper", "CPA outsourcing"],
  },

  "fema-compliance": {
    title: "FEMA Compliance",
    slug: "fema-compliance",
    metaTitle: "FEMA Compliance & Advisory Services",
    metaDesc:
      "Expert FEMA advisory from DRSPV & Associates covering FDI/ODI compliance, ECB reporting, NRI transactions, and RBI filings for cross-border investments and remittances.",
    color: "#C9A84C",
    description: `The Foreign Exchange Management Act, 1999 (FEMA) governs all cross-border transactions, foreign investments, and external commercial borrowings in India. Non-compliance with FEMA can result in severe penalties, compounding proceedings, and even criminal prosecution in certain cases. DRSPV & Associates provides comprehensive FEMA advisory and compliance services to Indian companies, foreign investors, and NRIs navigating these complex regulations.

Our FEMA practice covers the full spectrum of cross-border transactions. For inbound investments (FDI), we advise on sectoral caps, pricing guidelines, reporting requirements (FC-GPR, FC-TRS), downstream investment norms, and compliance with Press Notes and FEMA Notifications. We ensure that every foreign investment into an Indian entity is structured in compliance with the Foreign Exchange Management (Non-Debt Instruments) Rules, 2019.

For outbound investments (ODI), we handle all compliance related to overseas direct investment including filing of Form ODI Part I, annual performance reports (APR), and disinvestment reporting. We advise on automatic route vs approval route investments, financial commitment limits, and step-down subsidiary structures. Our team has experience with ODI transactions across the USA, UK, UAE, Singapore, and other jurisdictions.

External Commercial Borrowings (ECBs) involve detailed compliance under the ECB framework including eligible borrowers, recognised lenders, all-in cost ceilings, end-use restrictions, and reporting through Form ECB. We manage the entire lifecycle from pre-drawdown compliance to ongoing reporting and final closure.

For NRIs and Persons of Indian Origin, our advisory covers NRO/NRE account regulations, property acquisition and sale, repatriation of sale proceeds, gift and inheritance of assets, and FCNR deposits. We also assist with Liberalised Remittance Scheme (LRS) compliance for resident individuals sending funds abroad for education, travel, investment, or maintenance of relatives.

When FEMA contraventions are detected, we assist with voluntary disclosure, compounding applications to RBI, and representation before the Enforcement Directorate. Our preventive advisory approach, however, is designed to ensure that clients never reach the compounding stage. We conduct periodic FEMA health checks for companies with foreign investors or overseas subsidiaries.`,
    whoNeeds: [
      "Indian companies receiving foreign direct investment (FDI)",
      "Companies making overseas direct investment (ODI)",
      "Entities with external commercial borrowings (ECBs)",
      "NRIs buying/selling property or repatriating funds from India",
      "Startups with foreign angel investors or ESOP holders abroad",
    ],
    steps: [
      { title: "Transaction Assessment", desc: "Analyse the proposed cross-border transaction for FEMA applicability, sectoral limits, pricing, and route (automatic vs approval)." },
      { title: "Structuring & Documentation", desc: "Structure the transaction to comply with FEMA rules. Prepare all required documents, board resolutions, and valuation reports." },
      { title: "RBI Filings", desc: "File all mandatory reports with RBI including FC-GPR, FC-TRS, ECB returns, ODI forms, and annual compliance filings." },
      { title: "Ongoing Monitoring", desc: "Track compliance deadlines, downstream investment norms, and annual reporting requirements. Conduct periodic FEMA health checks." },
    ],
    faq: [
      {
        q: "What is the penalty for FEMA non-compliance?",
        a: "Under Section 13 of FEMA, the penalty for contravention can be up to three times the sum involved in the contravention, or Rs 2 lakh where the amount is not quantifiable. Continuing contraventions attract a further penalty of Rs 5,000 per day. Compounding of contraventions is possible by making an application to RBI with appropriate compounding fees.",
      },
      {
        q: "Can an NRI buy property in India?",
        a: "Yes, an NRI or OCI can buy residential and commercial property in India (not agricultural land, plantation property, or farmhouse) through funds remitted from abroad or from NRE/NRO accounts. The transaction must be reported to RBI. Sale proceeds of property can be repatriated subject to conditions and limits prescribed under FEMA regulations.",
      },
      {
        q: "What is FC-GPR and when must it be filed?",
        a: "FC-GPR (Foreign Currency-Gross Provisional Return) is a filing required with RBI whenever an Indian company issues shares to a foreign investor (FDI). It must be filed within 30 days of allotment of shares. The filing includes details of the investment, pricing, and a CA certificate confirming compliance with FEMA pricing guidelines.",
      },
      {
        q: "Do you handle ECB compliance?",
        a: "Yes. We manage the full ECB lifecycle including eligibility assessment, all-in cost ceiling verification, end-use compliance, Form ECB filing (monthly/annually), and closure reporting. We advise on both Track I (foreign currency ECBs) and Track II (rupee-denominated ECBs) frameworks.",
      },
      {
        q: "What is the Liberalised Remittance Scheme (LRS)?",
        a: "LRS allows resident individuals to remit up to USD 250,000 per financial year for permissible current and capital account transactions including education, travel, investment in equity/debt abroad, maintenance of relatives, and gifts. We advise on LRS compliance, Form 15CA/15CB certification, and TCS applicability under Section 206C(1G).",
      },
    ],
    relatedKB: [],
    keywords: ["FEMA compliance", "FDI advisory India", "NRI property FEMA", "RBI filing consultant", "ODI compliance"],
  },

  "ipo-consultancy": {
    title: "IPO Consultancy",
    slug: "ipo-consultancy",
    metaTitle: "IPO Consultancy & Listing Advisory",
    metaDesc:
      "End-to-end IPO consultancy from DRSPV & Associates for BSE SME, NSE Emerge, and main board listings. Restated financials, DRHP review, and post-listing compliance.",
    color: "#3B82F6",
    description: `Going public is one of the most significant milestones in a company's lifecycle. An Initial Public Offering (IPO) requires meticulous financial preparation, regulatory compliance, and coordination between multiple stakeholders including merchant bankers, legal counsel, registrars, and stock exchanges. DRSPV & Associates has deep expertise in guiding companies through this transformative process, particularly on the BSE SME and NSE Emerge platforms.

Our IPO consultancy begins 12 to 18 months before the proposed listing date. We start with an IPO readiness assessment, evaluating the company's financial health, corporate governance standards, related party transactions, and compliance history. We identify gaps and work with the management to resolve them well before the merchant banker begins their due diligence.

The preparation of restated financial statements is a core deliverable. Under SEBI (ICDR) Regulations, companies must present restated audited financials for the preceding 3-5 years. We prepare these statements in compliance with Ind AS, make necessary adjustments for prior period items, changes in accounting policies, and ensure consistency across reporting periods. Our restated financials have been accepted by SEBI and stock exchanges across 50+ IPO engagements.

We also provide a detailed review of the Draft Red Herring Prospectus (DRHP) and Red Herring Prospectus (RHP) from a financial and compliance perspective. This includes verification of financial data accuracy, MD&A consistency, risk factor completeness, and compliance with SEBI disclosure requirements. We coordinate with the merchant banker and legal counsel to ensure the prospectus meets all regulatory standards.

Post-listing, our support continues with ongoing compliance including quarterly results preparation, board meeting support, corporate governance requirements under SEBI LODR regulations, and annual report preparation. We ensure that newly listed companies meet all continuing obligations without disruption. Our track record spans SME IPOs across manufacturing, IT, pharmaceuticals, and FMCG sectors.`,
    whoNeeds: [
      "SMEs planning to list on BSE SME or NSE Emerge",
      "Growth-stage companies evaluating IPO readiness",
      "Companies needing restated financial statements",
      "Merchant bankers seeking CA partners for IPO mandates",
      "Listed companies requiring post-listing compliance support",
    ],
    steps: [
      { title: "IPO Readiness Assessment", desc: "Evaluate financial health, governance standards, related party transactions, and compliance history. Identify gaps and create a remediation plan." },
      { title: "Restated Financials", desc: "Prepare 3-5 years of restated audited financials under Ind AS with all necessary adjustments for consistency and compliance." },
      { title: "DRHP / RHP Review", desc: "Review the draft and final prospectus for financial accuracy, disclosure completeness, and SEBI compliance. Coordinate with merchant bankers." },
      { title: "Listing & Post-IPO", desc: "Support through allotment, listing day, and ongoing compliance including quarterly results, LODR requirements, and corporate governance filings." },
    ],
    faq: [
      {
        q: "What is the minimum eligibility for an SME IPO on BSE?",
        a: "For BSE SME listing, the company must have a post-issue paid-up capital not exceeding Rs 25 crore, net tangible assets of at least Rs 1 crore in the preceding year, track record of at least 3 years (or the promoter/promoting company should have a track record), and positive net worth. The company must also appoint a SEBI-registered merchant banker.",
      },
      {
        q: "How long does the IPO process typically take?",
        a: "From initial readiness assessment to listing, the entire IPO process typically takes 9 to 18 months. The financial preparation (restated financials, tax compliance) takes 3-6 months. DRHP preparation and SEBI filing take another 2-4 months. The SEBI observation period is 30 days, followed by the public issue timeline of approximately 3-4 weeks.",
      },
      {
        q: "What are restated financial statements?",
        a: "Restated financial statements are audited financials for the preceding 3-5 years, adjusted for consistency in accounting policies, prior period items, and qualifications in audit reports. They are prepared under SEBI (ICDR) Regulations and Ind AS, and must present a comparable and consistent picture of the company's financial performance across all reported periods.",
      },
      {
        q: "Do you handle post-listing compliance?",
        a: "Yes. Post-listing, we support companies with quarterly financial results preparation and review, SEBI LODR compliance including corporate governance reports, board meeting calendars, annual report preparation, related party transaction monitoring, and XBRL filing. We ensure newly listed companies meet all continuing obligations on time.",
      },
      {
        q: "What are your IPO consultancy fees?",
        a: "Our fees depend on the scope of work, complexity of the company's financial history, and the exchange platform. We provide a fixed-fee engagement letter covering all deliverables from readiness assessment to post-listing support. Contact us with your company details for a customised proposal.",
      },
    ],
    relatedKB: [],
    keywords: ["IPO consultancy India", "BSE SME IPO", "restated financials CA", "IPO readiness", "SEBI ICDR compliance"],
  },

  "cfo-services": {
    title: "Virtual CFO Services",
    slug: "cfo-services",
    metaTitle: "Virtual CFO Services",
    metaDesc:
      "On-demand Virtual CFO services from DRSPV & Associates. MIS reporting, cash flow management, fundraising support, and strategic financial advisory for startups and MSMEs.",
    color: "#0D9488",
    description: `Not every business can afford or needs a full-time Chief Financial Officer, but every growing business needs CFO-level financial thinking. DRSPV & Associates offers Virtual CFO services that bring experienced financial leadership to startups, MSMEs, and scaling businesses without the overhead of a full-time hire.

Our Virtual CFO engagement begins with understanding your business model, revenue streams, cost structure, and growth plans. We then design a customised MIS (Management Information System) that gives you real-time visibility into the financial health of your business. This includes monthly P&L analysis, cash flow forecasting, working capital monitoring, and key performance indicator (KPI) dashboards tailored to your industry.

Cash flow management is often the single biggest challenge for growing businesses. Our Virtual CFO team implements cash flow forecasting models, working capital optimisation strategies, and receivables/payables management frameworks. We help you understand your cash conversion cycle, identify cash flow bottlenecks, and build a buffer against seasonality or unexpected expenditure.

For businesses seeking external funding, we provide comprehensive fundraising support. This includes financial model preparation, investor deck creation (in coordination with your pitch deck designer), due diligence data room preparation, and coordination with investors during the evaluation process. We have supported multiple startups through angel rounds, Series A, and venture debt processes.

Beyond reporting and fundraising, our Virtual CFO service covers compliance calendar management (ensuring all statutory deadlines are met), board meeting support (agenda preparation, minutes, and compliance reporting), budgeting and variance analysis, and strategic advisory on pricing, expansion, and cost optimisation. Every engagement is led by a qualified CA with experience in financial management across multiple industries.

We also assist companies preparing for an IPO or strategic acquisition by strengthening their financial reporting, cleaning up legacy accounting issues, and building governance frameworks that meet institutional investor expectations. Our Virtual CFO service is designed to be a genuine partner in your growth journey, not just a reporting function.`,
    whoNeeds: [
      "Startups needing financial discipline without a full-time CFO",
      "MSMEs seeking MIS, dashboards, and financial visibility",
      "Companies preparing for fundraising or investor due diligence",
      "Businesses struggling with cash flow management",
      "Pre-IPO companies needing financial reporting upgrades",
    ],
    steps: [
      { title: "Business Assessment", desc: "Understand your business model, financial systems, reporting gaps, and growth objectives. Identify immediate priorities." },
      { title: "MIS Design & Setup", desc: "Design customised dashboards, KPIs, and reporting templates. Set up automated data flows from your accounting software." },
      { title: "Monthly Reporting Cycle", desc: "Deliver monthly MIS, P&L analysis, cash flow forecasts, and variance reports. Conduct monthly review calls with management." },
      { title: "Strategic Advisory", desc: "Ongoing advisory on pricing, budgeting, fundraising, compliance, and financial strategy. Board meeting and investor support as needed." },
    ],
    faq: [
      {
        q: "What is a Virtual CFO and how is it different from a full-time CFO?",
        a: "A Virtual CFO provides the same strategic financial leadership as a full-time CFO but on a part-time or outsourced basis. You get experienced financial guidance, MIS reporting, and strategic advisory at a fraction of the cost. A Virtual CFO is ideal for businesses with turnover between Rs 50 lakhs and Rs 50 crore that need financial discipline but cannot justify a full-time C-suite hire.",
      },
      {
        q: "What reports will I receive every month?",
        a: "Our standard monthly deliverables include Profit & Loss statement with analysis, Balance Sheet, Cash Flow statement, Budget vs Actual variance report, Accounts Receivable and Payable aging analysis, KPI dashboard, and a management summary with key observations and recommendations. These are customised to your industry and business needs.",
      },
      {
        q: "Can you help with fundraising for my startup?",
        a: "Yes. We prepare detailed financial models, projections, and unit economics analysis. We assist with investor data room preparation, due diligence responses, and financial documentation required during fundraising. We have supported startups through angel rounds, seed rounds, and Series A processes.",
      },
      {
        q: "How often will we interact?",
        a: "We conduct monthly review calls (minimum) with management to discuss financial performance, flag risks, and align on priorities. For active fundraising or critical financial events, we increase the cadence to weekly calls. You can reach our team via email and WhatsApp for day-to-day queries with a 48-hour response guarantee.",
      },
      {
        q: "What accounting software do you work with for MIS?",
        a: "We work with Tally Prime, Zoho Books, QuickBooks, Xero, and most ERP systems for data extraction. Our MIS dashboards are typically built in Excel or Google Sheets for flexibility and ease of use. For advanced reporting, we can integrate with tools like Power BI or Metabase.",
      },
    ],
    relatedKB: [],
    keywords: ["virtual CFO India", "CFO services startup", "MIS reporting CA", "cash flow management", "fundraising support"],
  },

  "due-diligence": {
    title: "Due Diligence",
    slug: "due-diligence",
    metaTitle: "Financial & Tax Due Diligence Services",
    metaDesc:
      "Comprehensive financial and tax due diligence from DRSPV & Associates for M&A transactions, PE/VC investments, and business acquisitions across India.",
    color: "#6366F1",
    description: `Every investment, acquisition, or merger decision should be grounded in a thorough understanding of the target's financial health, tax exposure, and compliance position. Due diligence is the process of systematically verifying these aspects before committing capital or signing definitive agreements. DRSPV & Associates provides rigorous, independent due diligence services that protect our clients' interests and enable informed decision-making.

Our financial due diligence covers the quality and sustainability of earnings, working capital analysis, normalised EBITDA computation, off-balance-sheet liabilities, related party transactions, and contingent liabilities. We go beyond surface-level review by testing the underlying data, tracing transactions to source documents, and identifying adjustments that impact the true economic value of the target entity.

Tax due diligence is equally critical and often reveals hidden exposures that can significantly affect deal valuation. Our tax DD covers income tax assessments and pending demands, transfer pricing risks, GST compliance and ITC vulnerability, TDS defaults and interest exposure, FEMA compliance for entities with foreign investment, and any pending or potential litigation. We quantify tax exposures and provide a risk-weighted assessment that feeds directly into the deal negotiation.

For private equity and venture capital funds, we provide buy-side due diligence reports that meet institutional standards. Our reports include clear executive summaries, detailed findings with supporting evidence, quantified risks, and actionable recommendations. We also support sell-side due diligence where the target company commissions the DD to present a clean financial picture to prospective buyers.

Beyond traditional financial and tax DD, we offer compliance health checks covering Companies Act, Labour Law, environmental compliance, and sector-specific regulatory requirements. We also assist with valuation support for deal structuring, swap ratio determination, and fair value assessment under Ind AS 103 for business combinations.

Our due diligence engagements are executed with strict confidentiality protocols, dedicated team access via virtual data rooms, and a clear timeline commitment. We understand that DD is time-sensitive in transaction contexts and prioritise rapid, high-quality delivery without compromising depth.`,
    whoNeeds: [
      "PE/VC funds evaluating investment opportunities",
      "Companies acquiring or merging with other businesses",
      "Lenders conducting due diligence on borrowers",
      "Promoters seeking sell-side due diligence before exit",
      "Family businesses evaluating succession or buyout transactions",
    ],
    steps: [
      { title: "Scope Definition", desc: "Define the DD scope covering financial, tax, compliance, and any specific areas of concern. Agree on timeline and deliverables." },
      { title: "Data Room Access", desc: "Access the target's data room, request additional documents, and begin preliminary review of financial statements and tax records." },
      { title: "Detailed Analysis", desc: "Conduct deep-dive analysis of earnings quality, tax exposures, working capital, contingent liabilities, and compliance gaps." },
      { title: "Report & Discussion", desc: "Deliver a comprehensive DD report with executive summary, findings, quantified risks, and recommendations. Present findings to stakeholders." },
    ],
    faq: [
      {
        q: "What does financial due diligence cover?",
        a: "Financial due diligence covers quality and sustainability of earnings, working capital analysis, net debt computation, normalised EBITDA adjustments, off-balance-sheet items, related party transactions, contingent liabilities, accounting policy consistency, and capital expenditure analysis. The scope is customised based on the transaction type and buyer's specific concerns.",
      },
      {
        q: "How is tax due diligence different from a tax audit?",
        a: "Tax due diligence is a prospective assessment conducted in the context of a transaction to identify potential tax risks and exposures that may affect deal valuation. A tax audit is a retrospective compliance exercise under Section 44AB. Tax DD involves deeper investigation of pending assessments, transfer pricing risks, GST vulnerabilities, and potential demands that may crystallise post-acquisition.",
      },
      {
        q: "How long does a due diligence engagement take?",
        a: "A standard financial and tax DD for an SME typically takes 2-4 weeks from data room access to final report. For larger or more complex entities, the timeline may extend to 6-8 weeks. We always provide a clear timeline at the scoping stage and meet committed deadlines, which is critical in transaction contexts.",
      },
      {
        q: "Can you provide vendor (sell-side) due diligence?",
        a: "Yes. Vendor DD is increasingly popular as it allows the selling company to identify and address issues before approaching buyers. We prepare a vendor DD report that presents the company's financial position transparently, addresses potential buyer concerns proactively, and often accelerates the transaction timeline by reducing buyer DD cycles.",
      },
      {
        q: "How do you handle confidentiality during DD?",
        a: "Confidentiality is paramount. All DD engagements are governed by NDA agreements. We access data through secure virtual data rooms, use encrypted communication, restrict team access on a need-to-know basis, and follow strict information barrier protocols. Our team members are bound by professional confidentiality obligations under ICAI ethical standards.",
      },
    ],
    relatedKB: [],
    keywords: ["due diligence services India", "financial due diligence CA", "tax due diligence", "M&A advisory", "PE VC due diligence"],
  },

  "startup-advisory": {
    title: "Startup Advisory",
    slug: "startup-advisory",
    metaTitle: "Startup Advisory & Compliance Services",
    metaDesc:
      "End-to-end startup advisory from DRSPV & Associates. Entity selection, Startup India registration, ESOP structuring, angel tax advisory, and compliance for founders.",
    color: "#F43F5E",
    description: `Building a startup is exhilarating, but the compliance landscape in India can be overwhelming for founders who are focused on product and growth. From choosing the right entity structure to navigating angel tax provisions, ESOPs, and government registrations, there are critical financial and legal decisions that can impact your startup for years. DRSPV & Associates provides dedicated startup advisory services that help founders build on a solid compliance foundation from day one.

Our advisory begins at the ideation stage with entity selection guidance. We help founders evaluate whether a Private Limited Company, LLP, OPC, or Partnership is the right structure based on their business model, funding plans, number of co-founders, and tax implications. For startups planning to raise external funding, we always recommend a Private Limited Company and guide them through the incorporation process with optimal authorised share capital and MOA/AOA provisions.

Startup India and DPIIT registration opens the door to tax benefits under Section 80-IAC (3-year tax holiday), self-certification under labour and environmental laws, and access to the Fund of Funds and government procurement schemes. We handle the entire application process including the innovation write-up, supporting documents, and follow-up with DPIIT.

ESOP (Employee Stock Option Plan) design is one of our speciality areas. We advise on ESOP pool sizing, vesting schedules, exercise pricing, tax implications for both the company and employees (including the taxation at exercise vs sale, and the perquisite tax treatment), ESOP trust structures, and compliance with Companies Act Section 62(1)(b) and SEBI guidelines for listed entities. Our ESOP advisory has helped multiple startups retain key talent while staying compliant.

Angel tax under Section 56(2)(viib) remains a significant concern for startups receiving investment at a premium. We advise on DPIIT exemption certification, valuation methodology (DCF vs NAV), documentation requirements, and response strategy if an angel tax notice is received. Our proactive approach ensures that the valuation report and compliance paperwork are in place before the funding round closes.

Beyond these core areas, we provide ongoing advisory on founder remuneration structuring, inter-company transactions for group structures, compliance calendar management, and preparation for institutional due diligence. We understand the startup ecosystem and price our services to be founder-friendly while delivering institutional-quality advisory.`,
    whoNeeds: [
      "First-time founders choosing between entity structures",
      "Startups seeking Startup India / DPIIT registration",
      "Companies designing or implementing ESOP plans",
      "Startups that have received or plan to receive angel investment",
      "Growth-stage startups preparing for institutional fundraising",
    ],
    steps: [
      { title: "Entity & Structure", desc: "Advise on entity selection, incorporate the company, and set up initial compliance framework including registers, resolutions, and filings." },
      { title: "Registrations", desc: "Complete Startup India / DPIIT registration, PAN, TAN, GST, Professional Tax, and any sector-specific licenses required." },
      { title: "ESOP & Funding", desc: "Design ESOP plan, prepare valuation report, handle angel tax compliance, and set up documentation for fundraising rounds." },
      { title: "Ongoing Compliance", desc: "Manage compliance calendar, file annual returns, handle board meetings, and provide strategic advisory on tax planning and growth." },
      { title: "Scale-up Support", desc: "Prepare for institutional DD, upgrade financial reporting, and advise on group restructuring as the business scales." },
    ],
    faq: [
      {
        q: "Should I incorporate as a Private Limited Company or LLP?",
        a: "If you plan to raise equity funding from angels or VCs, a Private Limited Company is almost always the right choice as LLPs cannot issue shares. LLPs work well for professional services firms or businesses that plan to remain self-funded. We evaluate your specific situation including tax implications, compliance burden, and exit plans before recommending a structure.",
      },
      {
        q: "What are the benefits of DPIIT Startup India registration?",
        a: "DPIIT registration provides eligibility for a 3-year income tax holiday under Section 80-IAC, self-certification under 6 labour laws and 3 environmental laws, fast-track patent and trademark examination, access to Fund of Funds for Startups, and exemption from angel tax under Section 56(2)(viib) subject to conditions.",
      },
      {
        q: "What is angel tax and how can we avoid it?",
        a: "Angel tax under Section 56(2)(viib) applies when a company issues shares at a premium to resident investors, and the premium exceeds the fair market value. DPIIT-recognised startups can claim exemption by filing Form 2 with the CBDT. We ensure the valuation report (DCF method), CA certificate, and all supporting documents are prepared before the funding round.",
      },
      {
        q: "How should we structure our ESOP plan?",
        a: "We recommend an ESOP pool of 10-15% of the fully diluted share capital, a standard 4-year vesting schedule with a 1-year cliff, exercise price at or near face value for early employees, and clear good leaver/bad leaver provisions. We handle the Companies Act compliance, board and shareholder resolutions, and tax advisory for both the company and employees.",
      },
      {
        q: "What ongoing compliance does a startup need to handle?",
        a: "Key ongoing compliance includes annual ROC filings (AOC-4, MGT-7), income tax return filing, TDS returns, GST returns (if registered), board meetings (minimum 4 per year), AGM, statutory registers maintenance, and event-based filings (allotment, director changes, charge creation). We provide a complete compliance calendar and manage all filings.",
      },
    ],
    relatedKB: [],
    keywords: ["startup advisory India", "Startup India registration", "ESOP structuring CA", "angel tax advisory", "company incorporation startup"],
  },

  "company-incorporation": {
    title: "Company Incorporation",
    slug: "company-incorporation",
    metaTitle: "Company Incorporation & Registration Services",
    metaDesc:
      "Quick and compliant company, LLP, and OPC registration with DRSPV & Associates. DSC, DIN, name reservation, MOA/AOA drafting, and post-incorporation compliance.",
    color: "#0EA5E9",
    description: `Incorporating a business entity in India is the first formal step towards building a legally recognised, scalable enterprise. Whether you are a solo entrepreneur, a team of co-founders, or a foreign national looking to establish presence in India, the choice of entity and the quality of incorporation directly impact your taxation, liability protection, ability to raise funding, and compliance burden for years to come. DRSPV & Associates provides end-to-end company incorporation services that are fast, compliant, and tailored to your business needs.

We handle incorporation for all major entity types recognised under Indian law. For Private Limited Companies under the Companies Act 2013, we manage the entire process from Digital Signature Certificate (DSC) procurement and Director Identification Number (DIN) application to name reservation through RUN (Reserve Unique Name), SPICe+ form filing, MOA and AOA drafting, and PAN/TAN allotment. Our standard incorporation timeline is 7-10 working days from document submission to Certificate of Incorporation.

One Person Company (OPC) is ideal for solo entrepreneurs who want the benefits of limited liability without the requirement of a second director or shareholder. We advise on OPC formation, nominee appointment, and the compliance differences between an OPC and a regular Private Limited Company, including the conditions under which an OPC must convert to a Private Company (paid-up capital exceeding Rs 50 lakh or turnover exceeding Rs 2 crore).

Limited Liability Partnerships (LLPs) are suitable for professional services firms, consultancies, and businesses that do not plan to raise equity funding. We handle LLP incorporation through the FiLLiP form, LLP Agreement drafting (which governs partner rights, profit sharing, and management), and all post-registration compliance including filing of Statement of Accounts and Annual Return.

For NRIs and foreign nationals, incorporating in India involves additional compliance including FEMA regulations for foreign investment, RBI reporting through FC-GPR, and adherence to FDI sectoral caps. We have extensive experience setting up Indian subsidiaries for foreign companies and joint ventures with Indian partners. We ensure that the incorporation structure is optimised for both Indian and international tax efficiency.

Post-incorporation, we set up the complete compliance framework including statutory registers, first board meeting, share certificate issuance, registered office filing, appointment of auditor, and opening of bank accounts. We also provide a first-year compliance calendar so founders know exactly what filings are due and when. Our goal is to ensure that the newly incorporated entity starts on the right foot with zero compliance gaps.`,
    whoNeeds: [
      "Entrepreneurs incorporating their first company",
      "Solo founders setting up a One Person Company (OPC)",
      "Professional services firms choosing LLP structure",
      "NRIs and foreign nationals establishing Indian entities",
      "Existing businesses converting from proprietorship to company",
    ],
    steps: [
      { title: "Entity Selection", desc: "Evaluate your business needs, funding plans, and tax position to recommend the right entity type: Private Ltd, OPC, LLP, or Section 8." },
      { title: "Name & DSC/DIN", desc: "Reserve a unique company name via RUN, obtain Digital Signature Certificates for directors, and apply for Director Identification Numbers." },
      { title: "Incorporation Filing", desc: "Draft MOA and AOA, file SPICe+ (for companies) or FiLLiP (for LLPs), and obtain Certificate of Incorporation with PAN and TAN." },
      { title: "Post-Incorporation Setup", desc: "First board meeting, share certificates, statutory registers, auditor appointment, bank account opening, and compliance calendar setup." },
    ],
    faq: [
      {
        q: "How long does it take to incorporate a company in India?",
        a: "With all documents ready, a Private Limited Company can be incorporated in 7-10 working days. This includes DSC procurement (1-2 days), DIN and name reservation (2-3 days), and SPICe+ filing and approval (3-5 days). LLP incorporation typically takes 10-14 working days. Delays can occur if the proposed name is rejected or documents need clarification.",
      },
      {
        q: "What documents are needed for incorporation?",
        a: "For directors: PAN card, Aadhaar card, passport-size photograph, mobile number, and email ID. For the registered office: rent agreement or ownership proof, NOC from the owner, and a utility bill not older than 2 months. For foreign nationals: passport, address proof in home country, and apostilled/notarised documents as applicable.",
      },
      {
        q: "What is the minimum capital required?",
        a: "There is no minimum paid-up capital requirement for Private Limited Companies or LLPs in India. You can incorporate with any amount of authorised and paid-up capital. However, we recommend starting with an authorised capital of Rs 1 lakh to Rs 10 lakh depending on your business plan and funding requirements, as this affects stamp duty.",
      },
      {
        q: "Can an NRI or foreign national be a director in an Indian company?",
        a: "Yes. An NRI or foreign national can be a director and shareholder in an Indian Private Limited Company. However, at least one director must be an Indian resident (stayed in India for 182+ days in the previous calendar year). Foreign investment must comply with FEMA regulations and FDI sectoral caps. We handle all FEMA compliance as part of the incorporation.",
      },
      {
        q: "What compliance is required after incorporation?",
        a: "Post-incorporation compliance includes: holding the first board meeting within 30 days, filing INC-20A (commencement of business declaration), appointing an auditor within 30 days, maintaining statutory registers, filing annual returns (AOC-4 and MGT-7), holding minimum 4 board meetings per year, conducting an AGM within 18 months, and event-based filings for allotment, director changes, etc.",
      },
    ],
    relatedKB: [],
    keywords: ["company incorporation India", "private limited registration", "LLP registration", "OPC formation", "company registration CA Rajkot"],
  },

  "information-system-audit": {
    title: "Information System Audit (DISA)",
    slug: "information-system-audit",
    color: "#8B5CF6",
    metaTitle: "Information System Audit (DISA) Services",
    metaDesc:
      "Certified DISA professionals providing IT audits, system controls review, cybersecurity assessments, and ERP audit services for banks, NBFCs, and enterprises.",
    description: `Information System Audit is a critical component of modern corporate governance and regulatory compliance. As businesses increasingly rely on technology for financial reporting, transaction processing, and data management, the need for independent assurance over IT systems has become essential. DRSPV & Associates provides comprehensive IS audit services through our team of DISA-qualified Chartered Accountants (Diploma in Information Systems Audit from ICAI).

Our IS audit services cover the full spectrum of IT controls assessment. We evaluate IT General Controls (ITGCs) including access management, change management, IT operations, and business continuity planning. We review Application Controls embedded within ERP systems like SAP, Tally Prime, Oracle, and custom applications to ensure data integrity, completeness, and accuracy of financial transactions processed through these systems.

For banks and NBFCs, we conduct IS audits as mandated by the Reserve Bank of India under its guidelines on Information Security, Electronic Banking, Technology Risk Management, and Cyber Frauds. Our audits cover core banking systems, internet banking platforms, mobile banking applications, payment gateways, and ATM networks. We assess compliance with RBI circulars on cybersecurity frameworks and report findings in the format prescribed by the regulator.

We also perform data analytics-based audits using CAATs (Computer Assisted Audit Techniques) to identify anomalies, duplicate transactions, unauthorised access patterns, and segregation of duties violations. Our approach combines technical IT assessment with financial audit expertise, ensuring that technology risks are evaluated in the context of their impact on financial statements and business operations.`,
    whoNeeds: [
      "Banks and NBFCs under RBI IS audit mandate",
      "Listed companies requiring IT controls assessment",
      "Enterprises undergoing ERP implementation audit",
      "Companies seeking SOC 1/SOC 2 readiness assessment",
      "Organisations needing cybersecurity risk evaluation",
    ],
    steps: [
      { title: "Scope & Planning", desc: "Define audit scope covering IT infrastructure, applications, databases, and network components. Prepare risk-based audit plan." },
      { title: "Controls Assessment", desc: "Evaluate IT General Controls (access, change management, operations) and Application Controls (input, processing, output) across all critical systems." },
      { title: "Testing & Analytics", desc: "Perform substantive testing using CAATs, review audit logs, test access controls, and verify data integrity across systems." },
      { title: "Reporting & Remediation", desc: "Issue detailed IS audit report with findings, risk ratings, and actionable recommendations. Support management in implementing remediation measures." },
    ],
    faq: [
      {
        q: "What is a DISA qualification?",
        a: "DISA (Diploma in Information Systems Audit) is a post-qualification certification from ICAI that qualifies Chartered Accountants to conduct information systems audits. It covers IT governance, information security, system development lifecycle, and IT audit methodologies.",
      },
      {
        q: "Is IS audit mandatory for banks?",
        a: "Yes. RBI mandates IS audit for all scheduled commercial banks, urban cooperative banks, and NBFCs above certain thresholds. The audit must be conducted by CISA/DISA qualified professionals and covers core banking systems, electronic delivery channels, and cybersecurity controls.",
      },
      {
        q: "What systems do you audit?",
        a: "We audit ERP systems (SAP, Tally, Oracle), core banking solutions, payment platforms, e-commerce systems, custom applications, cloud infrastructure, and database systems. Our approach covers both on-premise and cloud-deployed systems.",
      },
    ],
    relatedKB: [],
    keywords: ["information system audit India", "DISA audit", "IT audit CA firm", "IS audit for banks", "ERP audit services"],
  },

  "valuation-services": {
    title: "Valuation Services (IBBI Registered)",
    slug: "valuation-services",
    color: "#EC4899",
    metaTitle: "Valuation Services - IBBI Registered Valuers",
    metaDesc:
      "IBBI-registered valuers providing independent business valuation, securities valuation, fair value assessment for M&A, IBC proceedings, and tax compliance purposes.",
    description: `Accurate and defensible valuations are fundamental to corporate transactions, regulatory compliance, and dispute resolution. DRSPV & Associates provides professional valuation services through our IBBI-registered valuers (Insolvency and Bankruptcy Board of India) with expertise in valuing businesses, securities, financial assets, and intangible assets.

Our valuation services cover a wide range of requirements under Indian law. Under the Companies Act 2013, we provide valuations for share allotment under Section 247, mergers and demergers (Sections 230-232), buy-back of shares, scheme of arrangements, and conversion of companies. Under the Income Tax Act 2025, we provide fair market value assessments for transactions involving shares and securities, including valuations under Section 92 (transfer pricing) and for gift taxation purposes.

For IBC proceedings, we provide valuations of corporate debtors as required under the Insolvency and Bankruptcy Code 2016. Our valuers are registered with IBBI under the Companies (Registered Valuers and Valuation) Rules 2017 in the asset class of Securities or Financial Assets. We prepare fair value and liquidation value reports for resolution professionals and the Committee of Creditors.

Our valuation methodologies include Discounted Cash Flow (DCF), Comparable Company Analysis, Comparable Transaction Analysis, Net Asset Value (NAV), and Earnings-based approaches. We select the appropriate methodology based on the nature of the asset, purpose of valuation, availability of data, and regulatory requirements. Every valuation report is prepared in compliance with ICAI Valuation Standards and relevant regulatory guidelines.`,
    whoNeeds: [
      "Companies issuing shares requiring valuation under Companies Act",
      "Resolution professionals needing IBC valuations",
      "Businesses involved in M&A transactions",
      "Taxpayers requiring fair market value for Income Tax compliance",
      "Courts and tribunals requiring independent valuation opinions",
    ],
    steps: [
      { title: "Engagement & Scoping", desc: "Understand the purpose of valuation, asset class, applicable regulations, and valuation date. Issue engagement letter with scope and methodology." },
      { title: "Data Collection", desc: "Collect financial statements, projections, industry data, comparable company data, and other relevant information needed for the valuation." },
      { title: "Analysis & Valuation", desc: "Apply appropriate valuation methodologies (DCF, comparable analysis, NAV), perform sensitivity analysis, and arrive at the fair value or fair market value." },
      { title: "Report & Certification", desc: "Issue IBBI-compliant valuation report with detailed methodology, assumptions, limitations, and certified opinion on value. Present findings to stakeholders." },
    ],
    faq: [
      {
        q: "What is an IBBI-registered valuer?",
        a: "An IBBI-registered valuer is a professional registered with the Insolvency and Bankruptcy Board of India under the Companies (Registered Valuers and Valuation) Rules 2017. Registration requires passing the valuation examination, completion of educational courses, and membership with a Registered Valuers Organisation (RVO).",
      },
      {
        q: "When is a registered valuer required?",
        a: "A registered valuer is mandatory for valuations under the Companies Act 2013 (share allotment, mergers, buy-back), IBC proceedings (fair value and liquidation value of corporate debtor), and recommended for Income Tax matters requiring defensible fair market value assessments.",
      },
      {
        q: "What valuation methodologies do you use?",
        a: "We use internationally accepted methodologies including Discounted Cash Flow (DCF), Comparable Company Analysis (market multiples), Comparable Transaction Analysis, Net Asset Value (NAV), and Earnings Capitalisation. The methodology is selected based on the asset type, purpose of valuation, and regulatory requirements.",
      },
    ],
    relatedKB: [],
    keywords: ["IBBI registered valuer", "business valuation India", "share valuation CA", "IBC valuation services", "fair market value assessment"],
  },
};

/* ═══════════════════════════════════════════════════════════════════
   STATIC PARAMS & METADATA
   ═══════════════════════════════════════════════════════════════════ */

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const svc = servicesData[params.slug];
  if (!svc) {
    return { title: "Service Not Found" };
  }
  return {
    title: svc.metaTitle,
    description: svc.metaDesc,
    alternates: { canonical: `https://drspv.in/services/${svc.slug}` },
    openGraph: {
      title: `${svc.metaTitle} | DRSPV & Associates`,
      description: svc.metaDesc,
      url: `https://drspv.in/services/${svc.slug}`,
    },
    keywords: svc.keywords,
  };
}

/* ═══════════════════════════════════════════════════════════════════
   FAQ ACCORDION (CLIENT COMPONENT INLINE)
   ═══════════════════════════════════════════════════════════════════ */

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border border-white/[0.06] rounded-xl bg-card overflow-hidden">
      <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-sm font-medium text-text hover:bg-white/[0.02] transition-colors">
        <span className="pr-4">{q}</span>
        <ChevronDown className="h-4 w-4 text-muted shrink-0 transition-transform group-open:rotate-180" />
      </summary>
      <div className="px-6 pb-5 pt-1">
        <p className="text-sm text-muted leading-relaxed">{a}</p>
      </div>
    </details>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════ */

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const svc = servicesData[params.slug];

  if (!svc) {
    notFound();
  }

  const paragraphs = svc.description.split("\n\n").filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.title,
    description: svc.metaDesc,
    provider: {
      "@type": "Organization",
      name: "DRSPV & Associates",
      url: "https://drspv.in",
    },
    areaServed: ["India", "United States", "United Kingdom", "Australia"],
    url: `https://drspv.in/services/${svc.slug}`,
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-bg">
        <div className="absolute inset-0 grid-bg" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gold/[0.06] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 pt-28 pb-16 sm:pt-36 sm:pb-20">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs text-muted">
            <Link href="/services" className="hover:text-gold transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-text">{svc.title}</span>
          </div>

          <div
            className="mb-6 inline-block h-1 w-12 rounded-full"
            style={{ backgroundColor: svc.color }}
          />

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-text sm:text-4xl lg:text-5xl mb-8">
            {svc.title}
          </h1>

          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-base text-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── Who Needs This ─── */}
      <section className="bg-bg-2">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-gold/20 bg-gold/[0.08] px-4 py-1.5">
            <span className="text-xs font-medium text-gold tracking-wide">Who Needs This</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl mb-8">
            Is This Service Right for You?
          </h2>

          <div className="space-y-3">
            {svc.whoNeeds.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-card px-5 py-4"
              >
                <CheckCircle2
                  className="h-4 w-4 shrink-0 mt-0.5"
                  style={{ color: svc.color }}
                />
                <span className="text-sm text-muted">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── Step by Step Process ─── */}
      <section className="bg-bg">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-gold/20 bg-gold/[0.08] px-4 py-1.5">
            <span className="text-xs font-medium text-gold tracking-wide">Our Process</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl mb-10">
            How We Deliver This Service
          </h2>

          <div className="space-y-6">
            {svc.steps.map((step, i) => (
              <div key={step.title} className="flex items-start gap-5">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2"
                  style={{ borderColor: svc.color }}
                >
                  <span
                    className="text-xs font-bold"
                    style={{ color: svc.color }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-text mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── FAQ ─── */}
      <section className="bg-bg-2">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-gold/20 bg-gold/[0.08] px-4 py-1.5">
            <span className="text-xs font-medium text-gold tracking-wide">FAQ</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {svc.faq.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── Related Knowledge Bank ─── */}
      <section className="bg-bg">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-gold/20 bg-gold/[0.08] px-4 py-1.5">
            <span className="text-xs font-medium text-gold tracking-wide">
              Related Reading
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl mb-8">
            From Our Knowledge Bank
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {svc.relatedKB.map((kb) => (
              <Link
                key={kb.title}
                href={kb.href}
                className="group rounded-xl border border-white/[0.06] bg-card p-5 transition-all hover:border-gold/20 hover:shadow-lg hover:shadow-black/10"
              >
                <div className="flex items-start gap-3">
                  <BookOpen className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-text group-hover:text-gold transition-colors">
                      {kb.title}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs text-muted group-hover:text-gold transition-colors">
                      Read more
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── WhatsApp CTA ─── */}
      <WhatsAppCTA />
    </>
  );
}
