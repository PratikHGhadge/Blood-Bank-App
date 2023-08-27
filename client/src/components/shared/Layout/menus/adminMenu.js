import { DonarIcon, HospitalIcon, NgoIcon } from "../../../shared/Icons";

export const adminMenue = [
  {
    name: "Donar List",
    href: "/donar-list",
    icon: DonarIcon,
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
    icon: NgoIcon,
    current: false,
  },
];
