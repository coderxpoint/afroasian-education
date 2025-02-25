interface Loan {
  title?: string;
  alt?: string;
  visit?: string;
}

interface LoanDetails {
  image?: string;
  matchTitles?: string;
  title?: string;
  desc?: string;
  bannerText?: string;
  bannerContent?: {
    title: string;
    subItems: string[];
  }[];
  bestChoiceTitle?: string;
  bestChoiceContent: {
    text: string;
  }[];
  bankOfferTitle: string;
  bankOfferContent: {
    text: string;
  }[];
}

export const loanName: Loan[] = [
  {
    title: "HDFC",
    alt: "hdfc loan",
    visit: "hdfc",
  },
  {
    title: "ICICI",
    alt: "icici loan",
    visit: "icici",
  },
];

export const loanDetails: LoanDetails[] = [
  {
    image: "/hdfc_banner.jpg",
    matchTitles: "hdfc",
    title: "Affordable Loans for Your Medical Education Journey",
    desc: "HDFC Bank is a pioneer in the Indian private banking landscape, with 9,092 branches and 20,993 ATMs. The bank has a substantial presence in semi-urban and rural areas and operates a prevalent subsidiary that yields education loans to aspiring individuals to pursue their studies overseas. HDFC Credila has assisted over 178,000 Indian students in 3,300 courses across 4,600 global universities in 63 countries.",
    bannerText:
      "HDFC Credila has assisted over 178,000 Indian students in 3,300 courses across 4,600 global universities in 63 countries.",
    bannerContent: [
      {
        title: "Countries",
        subItems: ["100+ Countries"],
      },
      {
        title: "Loan",
        subItems: ["Pre-Admission Loan Approvals"],
      },
      {
        title: "Finance",
        subItems: ["100% Financing"],
      },
    ],
    bestChoiceTitle: "What Makes Us Your Best Choice?",
    bestChoiceContent: [
      {
        text: "HDFC Credila facilitates exclusive education loans and offers customized financing solutions for aspirants and their guardians who want to pursue higher education abroad.",
      },
      {
        text: "By providing competitive interest rates, HDFC Credila improves the financial accessibility of the scholar and streamlines loan processes effectively.",
      },
      {
        text: "HDFC Credila offers flexible reimbursement plans to scholars, including moratorium periods and extended tenures for individual financial trajectories.",
      },
      {
        text: "The Bank minimizes administrative burdens by streamlining effective loan application processes for foreign education through steady fund disbursal.",
      },
      {
        text: "Offers vast coverage for varied courses and accredited institutes and facilitates comprehensive financial support for tuition and travel expenses.",
      },
      {
        text: "Expert advisors proficiently guide the aspirants about loan operations so that they make informed financial decisions for a smooth journey.",
      },
      {
        text: "HDFC Credila enriches the borrowing experience with reliable and value-added support services such as course guidance and visa assistance.",
      },
    ],
    bankOfferTitle: "A Customised Education Loan from HDFC Credila Offers:",
    bankOfferContent: [
      { text: "Ease of Application - online and offline (doorstep) services" },
      { text: "Competitive Interest Rates" },
      { text: "100% Financing - covers tuition fees and living costs" },
      { text: "Unsecured Loans - up to INR 75 Lakhs" },
      { text: "Flexible EMI and Repayment Terms - up to 15 years" },
      { text: "Alluring Tax Benefits" },
      { text: "No Pre-Payment Penalty" },
      { text: "Pre-Admission Loan Sanction" },
      { text: "Partial Disbursement Option" },
      { text: "Online Loan Management" },
      { text: "Customized for Education Needs" },
      { text: "Support for Parents" },
    ],
  },
  {
    image: "/icici_banner.jpg",
    matchTitles: "icici",
    title: "Seamless Loans for a Boundless Future",
    desc: "ICICI Bank provides a comprehensive range of education loans tailored for students aspiring to study both in India and abroad. With competitive interest rates and flexible repayment options, ICICI Bank ensures students can focus on their studies without financial stress. The loan process is streamlined with quick approvals and digital management, making it easy and accessible for students and their families.",
    bannerText:
      "ICICI Bank substantially provides education loans of up to INR 3 crore and facilitates foreign education to Indian students",
    bannerContent: [
      {
        title: "Countries",
        subItems: ["100+ Countries"],
      },
      {
        title: "Loan",
        subItems: ["Pre-Admission Loan Approvals"],
      },
      {
        title: "Finance",
        subItems: ["100% Financing"],
      },
    ],
    bestChoiceTitle: "What Makes Us Your Best Choice?",
    bestChoiceContent: [
      {
        text: "ICICI Bank encourages aspirants to pursue higher education domestically and overseas by facilitating flexible education loans and financial solutions.",
      },
      {
        text: "Our attractive interest rates facilitate economical and accessible education for scholars and their families.",
      },
      {
        text: "Varied repayment options including moratoriums and extended tenures accentuate diverse financial circumstances for borrowers.",
      },
      {
        text: "ICICI Bank streamlines the loan application process by quick fund disbursal, aiding students in meeting crucial deadlines and initiating timely education.",
      },
      {
        text: "The Bank facilitates exclusive financial solutions and education-related expenses from tuition to living costs to aid overseas education for aspirants.",
      },
      {
        text: "Our expert advisors provide exclusive guidance on visa procedures and course selection for scholars.",
      },
      {
        text: "ICICI Bank accentuates pre-admission sanctions and digital services, providing seamless transitions for overseas education to enhance customer experience.",
      },
    ],
    bankOfferTitle: "A Customized Education Loan From ICICI Bank Offers:",
    bankOfferContent: [
      { text: "Streamlined Application Process" },
      { text: "Competitive Interest Rates" },
      { text: "Extensive Financial Protection" },
      { text: "Unsecured Loan Options" },
      { text: "Adaptive Repayment Terms" },
      { text: "Beneficial Tax Incentives" },
      { text: "Absence of Prepayment Penalties" },
      { text: "Pre-Approval for Funding" },
      { text: "Staged Loan Disbursement" },
      { text: "Online Loan Administration" },
      { text: "Tailored Financial Strategies" },
      { text: "Supportive Family-Oriented Services" },
    ],
  },
];