export interface Publication {
  authors: string;
  year: number;
  title: string;
  journal: string;
  doi: string;
  tags: string[];
}

const publicationsData: Publication[] = [
  {
    authors: "Lablans M, Borg A, Ückert F",
    year: 2015,
    title: "A RESTful interface to pseudonymization services in modern web applications",
    journal: "BMC Medical Informatics and Decision Making, 15:2",
    doi: "https://doi.org/10.1186/s12911-014-0123-5",
    tags: ["Core", "Pseudonymization"],
  },
  {
    authors: "Tremper G et al.",
    year: 2025,
    title: "Mainzelliste: Ten years of pseudonymization, record linkage, and informed consent management",
    journal: "Patterns",
    doi: "https://doi.org/10.1016/j.patter.2025.101432",
    tags: ["Core", "Pseudonymization", "Record Linkage", "Consent"],
  },
  {
    authors: "Stammler S et al.",
    year: 2022,
    title: "Mainzelliste SecureEpiLinker (MainSEL): Privacy-Preserving Record Linkage using Secure Multi-Party Computation",
    journal: "Bioinformatics, 38(6):1657–1662",
    doi: "https://doi.org/10.1093/bioinformatics/btab764",
    tags: ["Privacy", "Record Linkage", "MPC"],
  },
  {
    authors: "Bialke M et al.",
    year: 2015,
    title: "A workflow-driven approach to integrate generic software modules in a Trusted Third Party",
    journal: "Journal of Translational Medicine, 13:176",
    doi: "https://doi.org/10.1186/s12967-015-0545-5",
    tags: ["Trusted Third Party", "Integration"],
  },
  {
    authors: "Rohde F et al.",
    year: 2021,
    title: "Optimization of the Mainzelliste software for fast privacy-preserving record linkage",
    journal: "Journal of Translational Medicine, 19:1",
    doi: "https://doi.org/10.1186/s12967-020-02678-1",
    tags: ["Pseudonymization", "Record Linkage", "Optimization"],
  },
];

export default publicationsData;
