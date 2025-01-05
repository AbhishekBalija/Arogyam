export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "Passport",
  "Adhaar Card",
  "Ayushman Card",
  "BPL Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Santhosh Kumar",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Sumangala",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Manjunath",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Suresh",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Shylaja",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Rajeev",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Deepa Bhatia",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alana",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
