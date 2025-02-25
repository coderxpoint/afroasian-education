export interface University {
  name: string;
  image: string;
  visit: string;
  location: string;
  established: string;
  description: string;
  descriptionHome: string;
  download: string;

  student_life?: { sltitle: string; sldesc: string }[]; // Changed to an array of objects
  duration?: string;
  internship?: string;
  recognitions?: string[];
  eligible_criteria?: {
    minimum_percentage?: string;
    required_subjects?: string[];
  };
  neet_required?: string;
  programs: {
    images?: string;
    name?: string;
    session?: string;
    medium?: string;
    duration?: string;
    fee?: string;
    s_name?: string;
    visit?: string;
  }[];
  overview?: {
    // Added overview property to fix the lint error
    title: string;
    university_recognitions: string[];
    medium_of_teaching: string;
    mbbs_course_duration: string;
    eligibility_criteria: {
      minimum_percentage: string;
      subjects: string[];
      age_requirement: string;
      neet_score_required: string;
    };
    requirement_of_ielts_toefl: string;
    academic_session: string[];
  };
  why_study: {
    title: string;
    description: string[];
  };
  eligibilityCriteriaMain: {
    title: string;
    description: string[];
  };
  steps: {
    title: string;
    stepdesc: string[];
  };
  documentsRequired: {
    title: string;
    documents: string[];
    note: string;
  };
  mainnote: string;
}

export const universityName: University[] = [
  // imu
  {
    name: "International Medical University",
    visit: "international-medical-university",
    image: "/imu.webp",
    location: "Kyrgyzstan",
    established: "2003",
    description:
      "International Medical University (IMU), originally established in 2003, is a leading medical institute in Kyrgyzstan. It is recognized for providing excellent medical courses accepted worldwide. The university was founded in 1993 and is recognized by the World Directory of Medical Schools (WDOMS) and the Ministry of Education and Science of Kyrgyzstan. It consists of experienced faculty who conduct their classes in English, which is a major benefit for international students. The university hosts over 3,300 students, including many Indian students. IMU is a well-constructed university with modern infrastructure, including advanced labs and a well-equipped clinic where students are trained during their practical lab sessions. The university also offers education in healthcare and medical science departments. IMU is affiliated with recognized medical institutions which ensures the best clinical training for its students. The educational experience for the students is boosted with a State-of-the-Art Learning Management System (LMS). It is used for tracking their performance and providing them with useful resources. The students are awarded a state-recognized diploma after completing their graduation which is highly valued in Kyrgyzstan and worldwide.",
    descriptionHome:
      "International Medical University (IMU), originally established in 2003, is a leading medical institute in Kyrgyzstan. It is recognized for providing excellent medical courses accepted worldwide.",
    download: "/international_medical_university.pdf",
    duration: "4/5 years",
    internship: "Last year",

    student_life: [
      {
        sltitle: "Climate",
        sldesc:
          "Kyrgyzstan exhibits a continental climate characterized by frigid winters, hot summers, and significant temperature fluctuations.",
      },
      {
        sltitle: "Hostels",
        sldesc:
          "EMU offers gender-segregated, fully furnished hostels, fostering cultural exchange and a supportive community among international scholars.",
      },
      {
        sltitle: "Cuisines",
        sldesc:
          "Diverse cuisines, including halal options, cater to the multicultural student population.",
      },
      {
        sltitle: "Education",
        sldesc:
          "International Medical University in Kyrgyzstan offers recognized medical degrees and multicultural education for local and international students.",
      },
      {
        sltitle: "Economy",
        sldesc:
          "Kyrgyzstan's economy relies on agriculture, mining, remittances, and emerging tourism amid political and industrial challenges.",
      },
      {
        sltitle: "Languages",
        sldesc:
          "Kyrgyzstan's prominent languages are Kyrgyz and Russian which are prevalent in varied societal domains, where bilingualism reflects its Soviet past.",
      },
      {
        sltitle: "Transport",
        sldesc:
          "Varied infrastructures and diverse transport options impact urban and rural travel experiences.",
      },
      {
        sltitle: "Clothing",
        sldesc:
          "Kyrgyz conventional clothing features intricate designs that mirror the nomadic heritage and contemporary attire shows Western influences.",
      },
    ],
    recognitions: ["WDOMS", "ECFMG", "FAIMER", "NMC"],
    eligible_criteria: {
      minimum_percentage: "50%",
      required_subjects: ["Physics", "Chemistry", "Biology"],
    },
    neet_required: "Mandatory",
    programs: [
      {
        images: "/programs/1.webp",
        name: "MBBS",
        visit: "mbbs",
        duration: "4.5 years (54 months) + 1 year internship",
        medium: "English",
        session: "September & January",
      },
      {
        images: "/programs/2.webp",
        name: "Master of Medicine",
        visit: "master-of-medicine",
        duration: "2 years",
        medium: "English",
        session: "September & January",
      },
      {
        images: "/programs/3.jpg",
        name: "Doctor of Medicine",
        visit: "doctor-of-medicine",
        duration: "4 years",
        medium: "English",
        session: "September & January",
      },
      {
        images: "/programs/4.jpg",
        name: "Master of Public Health",
        visit: "master-of-public-health",
        duration: "2 years",
        medium: "English",
        session: "September & January",
      },
    ],
    overview: {
      // Added overview object to the university entry
      title: "Overview of MBBS At International Medical University, Kyrgyzstan",
      university_recognitions: [
        "Ministry of Health and Science Education of Kyrgyzstan",
        "World Directory of Medical Schools (WDOMS)",
        "Educational Commission for Foreign Medical Graduates (ECFMG)",
        "Foundation for Advancement of International Medical Education and Research (FAIMER)",
        "National Medical Commission (NMC)",
      ],
      medium_of_teaching: "English",
      mbbs_course_duration: "4/5 years, including an internship year",
      eligibility_criteria: {
        minimum_percentage: "50%",
        subjects: ["Physics", "Chemistry", "Biology"],
        age_requirement:
          "Applicants must be at least 17 years old by 31st December in the admission year.",
        neet_score_required: "Mandatory",
      },
      requirement_of_ielts_toefl: "No",
      academic_session: ["September", "January"],
    },
    why_study: {
      title: "Why Study MBBS at International Medical University, Kyrgyzstan?",
      description: [
        "(IMU) ranks among Kyrgyzstan's premier medical institutions catering to Indian students pursuing MBBS.",
        "MBBS in Kyrgyzstan for Indian students is approved by NMC.",
        "No donation or hidden fees.",
        "No entrance test for admission to the university.",
        "MBBS in Kyrgyzstan for International students within budget.",
        "Top-notch MBBS Degree.",
        "English medium of instruction.",
        "Hands-on experience helps the students develop their critical thinking and problem-solving skills.",
        "Excellent teaching staff and renowned doctors.",
        "State-of-the-art classrooms using modern technologies to support students' learning.",
        "Laboratories for scientific research, diagnostic centers, and other medical facilities.",
        "Library with a remarkable collection of books, literature, and more for the academic interest of the students.",
        "Students have access to state-of-the-art facilities and equipment for their academic training.",
        "International exposure of the students at several universities and research institutions worldwide.",
        "Social, cultural, and humanitarian activities are organized.",
        "Graduates practice medicine anywhere after qualifying for the Medical Licensing Examination of the country.",
      ],
    },
    eligibilityCriteriaMain: {
      title:
        "Eligibility Criteria for MBBS Admissions to International Medical University (IMU), Kyrgyzstan",
      description: [
        "Eligibility Criteria for MBBS Admissions to International",
        " Applicants must have at least 50% aggregate marks in Physics, Chemistry, and Biology (PCB) in their 12th grade.",
        " NEET Requirement: A qualifying NEET score and a valid NEET scorecard are mandatory.",
      ],
    },
    steps: {
      title: "Step-by-Step Admission Process",
      stepdesc: [
        "Fill out the online application form and submit the required documents to the university.",
        "After reviewing your application, the university will issue an admission letter.",
        "Apply for a student visa by submitting the original passport and other required documents.",
        "Pay the first-year tuition fee. Students can arrange an education loan with agencies like Afroasian Education whenever required.",
        "Once the visa is approved, prepare for travel to Kyrgyzstan.",
        "Book your flight and complete the journey to begin your studies.",
      ],
    },
    documentsRequired: {
      title: "Documents Required For Admission",
      documents: [
        "Birth certificate",
        "Class 10th and 12th mark sheets and certificates",
        "Migration certificate, Original passport",
        "Medical reports, including an HIV test report",
        "Passport size photographs",
        "Official invitation letter from the university",
        "NEET scorecard",
        "Visa application form",
      ],
      note: "The university, in partnership with agencies like Rus Education, assists in facilitating the visa process and providing additional guidance for international students.",
    },
    mainnote:
      "Afro-Asian Education specializes in facilitating access to high-quality medical education for students in Africa and Asia through comprehensive support in MBBS admissions to Kyrgyzstan. We streamline the intricate admission process, providing expert guidance from initial counseling to enrollment. Leveraging robust partnerships with top Kyrgyz medical universities, we assist students in securing placements at reputable institutions recognized for their affordability and educational excellence. Our commitment to transparency, student-centric services, and cultural inclusivity fosters a seamless transition for aspiring medical professionals, equipping them to advance in their careers and contribute to global health initiatives effectively.",
  },

  // eiu
  {
    name: "Eurasian International University",
    visit: "eurasian-international-university",
    image: "/eiu.webp",
    location: "Kyrgyzstan",
    established: "2019",
    description:
      "Eurasian International University (EIU), originally established as Eurasian International Medical University (EIMU) in 2019 specializes in facilitating quality medical education for both domestic and international medical aspirants. Recognized by the World Directory of Medical Schools (WDOMS) and the Ministry of Education and Science of Kyrgyzstan, EIU has established global credibility in the education sector. The university expanded its academic offerings to varied sectors that include pedagogy, design, and tourism in 2022. EIU hosts over 500 international students in its five-year English-medium MBBS program and facilitates cutting-edge infrastructure featuring twelve specialized laboratories, a vivarium, and a modern clinic for practical training. Strategically affiliated with leading medical institutions, EIU ensures comprehensive clinical training for its students. The innovative Learning Management System (LMS) enhances the educational experience with remote resources and performance tracking. Our expert professionals provide a state diploma to the graduates that is highly recognized in Kyrgyzstan and internationally, ensuring their competitiveness in the global medical job market.",
    descriptionHome:
      "Eurasian International University (EIU), originally established as Eurasian International Medical University (EIMU) in 2019 specializes in facilitating quality medical education for both domestic and international medical aspirants.",
    duration: "6 years",
    internship: "Last year",
    student_life: [
      {
        sltitle: "Climate",
        sldesc:
          "Kyrgyzstan exhibits a continental climate characterized by frigid winters, hot summers, and significant temperature fluctuations.",
      },
      {
        sltitle: "Hostels",
        sldesc:
          "EMU offers gender-segregated, fully furnished hostels, fostering cultural exchange and a supportive community among international scholars.",
      },
      {
        sltitle: "Cuisines",
        sldesc:
          "Diverse cuisines, including halal options, cater to the multicultural student population.",
      },
      {
        sltitle: "Education",
        sldesc:
          "Eurasian International University in Kyrgyzstan offers recognized medical degrees and multicultural education for local and international students.",
      },
      {
        sltitle: "Economy",
        sldesc:
          "Kyrgyzstan's economy relies on agriculture, mining, remittances, and emerging tourism amid political and industrial challenges.",
      },
      {
        sltitle: "Languages",
        sldesc:
          "Kyrgyzstan's prominent languages are Kyrgyz and Russian which are prevalent in varied societal domains, where bilingualism reflects its Soviet past.",
      },
      {
        sltitle: "Transport",
        sldesc:
          "Urban and Rural travel experiences are impacted by varied infrastructures and diverse transport options.",
      },
      {
        sltitle: "Clothing",
        sldesc:
          "Kyrgyz conventional clothing features intricate designs that mirror the nomadic heritage and contemporary attire shows Western influences.",
      },
    ],
    recognitions: ["WDOMS", "ECFMG", "NMC"],
    eligible_criteria: {
      minimum_percentage: "50%",
      required_subjects: ["Physics", "Chemistry", "Biology"],
    },
    neet_required: "Mandatory",
    download: "/eurasian_university.pdf",
    programs: [
      {
        images: "/programs/1.webp",
        visit:"d-of-medical-and-clinical-discipline",
        s_name: "D. of Medical & Clinical Disciplines",
      },
      {
        images: "/programs/1.webp",
        visit:"d-of-morpho-physiological-discipline",
        s_name: "D. of Morpho-Physiological Disciplines",
      },
    ],
    overview: {
      title:
        "Overview of MBBS At Eurasian International University, Kyrgyzstan",
      university_recognitions: [
        "Ministry of Health and Science Education of Kyrgyzstan",
        "World Directory of Medical Schools (WDOMS)",
        "Educational Commission for Foreign Medical Graduates (ECFMG)",
        "Foundation for Advancement of International Medical Education and Research (FAIMER)",
        "National Medical Commission (NMC)",
      ],
      medium_of_teaching: "English",
      mbbs_course_duration: "6 years, including an internship year",
      eligibility_criteria: {
        minimum_percentage: "50%",
        subjects: ["Physics", "Chemistry", "Biology"],
        age_requirement:
          "Applicants must be at least 17 years old by 31st December in the admission year.",
        neet_score_required:
          "NEET (National Eligibility cum Entrance Test) score is required.",
      },
      requirement_of_ielts_toefl: "No",
      academic_session: ["September"],
    },
    why_study: {
      title: "Why Study MBBS at Eurasian International University, Kyrgyzstan?",
      description: [
        "(EIU) ranks among Kyrgyzstan's premier medical institutions, specifically catering to Indian students pursuing MBBS.",
        "MBBS in Kyrgyzstan for Indian students is approved by NMC.",
        "No donations or hidden fees.",
        "No entrance test for admission to the university.",
        "MBBS in Kyrgyzstan for International students within budget.",
        "Top-notch MBBS degree.",
        "English medium of instruction.",
        "Hands-on experience helps students develop their critical thinking and problem-solving skills.",
        "Excellent teaching staff and renowned Doctors.",
        "State-of-the-art classrooms using modern technologies to support students' learning.",
        "Laboratories for scientific research and diagnostic centers, and other medical facilities.",
        "Library with a remarkable collection of books, literature, and more, for the academic interest of the students.",
        "Students have access to state-of-the-art facilities and equipment for their academic training.",
        "International exposure of the students at several universities and research institutions worldwide.",
        "Social, cultural and humanitarian activities are organized.",
        "Graduates can practice medicine anywhere post qualifying the Medical Licensing Examination of the country.",
      ],
    },
    eligibilityCriteriaMain: {
      title:
        "Eligibility Criteria for MBBS Admissions to Eurasian International University (EIU), Kyrgyzstan",
      description: [
        "Applicants must be between 17 and 25 years old at the time of admission.",
        "Applicants must have at least 50% aggregate marks in Physics, Chemistry, and Biology (PCB) in their 12th grade.",
        "A qualifying NEET score is mandatory, along with a valid NEET scorecard.",
      ],
    },
    steps: {
      title: "Step-by-Step Admission Process",
      stepdesc: [
        "Fill out the online application form and submit the required documents to the university.",
        "After reviewing your application, the university will issue an admission letter.",
        "Apply for a student visa by submitting the original passport and other required documents.",
        "Pay the first-year tuition fee. If necessary, students can arrange an education loan with the help of agencies like Rus Education.",
        "Once the visa is approved, prepare for travel to Kyrgyzstan.",
        "Book your flight and complete the journey to begin your studies.",
      ],
    },
    documentsRequired: {
      title: "Documents Required For Admission",
      documents: [
        "Birth certificate",
        "Class 10th and 12th mark sheets and certificates",
        "Migration certificate, Original passport",
        "Medical reports, including an HIV test report",
        "Passport size photographs",
        "Official invitation letter from the university",
        "NEET scorecard",
        "Visa application form",
      ],
      note: "The university, in partnership with agencies like Rus Education, assists in facilitating the visa process and providing additional guidance for international students.",
    },
    mainnote:
      "Afro-Asian Education specializes in facilitating access to high-quality medical education for students in Africa and Asia through comprehensive support in MBBS admissions to Kyrgyzstan. We streamline the intricate admission process, providing expert guidance from initial counseling to enrollment. Leveraging robust partnerships with top Kyrgyz medical universities, we assist students in securing placements at reputable institutions recognized for their affordability and educational excellence. Our commitment to transparency, student-centric services, and cultural inclusivity fosters a seamless transition for aspiring medical professionals, equipping them to advance in their careers and contribute to global health initiatives effectively.",
  },
];
