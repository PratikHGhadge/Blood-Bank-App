import { ArchiveBoxArrowDownIcon, HospitalIcon } from "../../../shared/Icons";

export const adminMenue = [
  {
    name: "Donar List",
    href: "/donar-list",
    icon: ArchiveBoxArrowDownIcon,
    current: true,
  },
  {
    name: "hospital-list",
    href: "/hospital-list",
    icon: HospitalIcon,
    current: false,
  },
  {
    name: "Organisation List",
    href: "/organisation-list",
    icon: HospitalIcon,
    current: false,
  },
];
