import {
  ArchiveBoxArrowDownIcon,
  DonarIcon,
  HospitalIcon,
} from "../../../shared/Icons";

export const OrganistionMenue = [
  {
    name: "Inventory",
    href: "/home",
    icon: ArchiveBoxArrowDownIcon,
    current: false,
  },
  { name: "Donar", href: "/donar", icon: DonarIcon, current: false },
  { name: "Hospital", href: "/hospital", icon: HospitalIcon, current: false },
];