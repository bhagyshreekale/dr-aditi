export const SITE = {
  name: "Derma Suite Advanced Dermatology & Cosmetology Clinic",
  shortName: "Derma Suite",
  doctorName: "Dr. Aditi Patil",
  url: "https://dermasuite.in",
  domain: "dermasuite.in",
  logo: "https://dermasuite.in/logo.png",
  phone: "+918799505624",
  phoneDisplay: "+91 8799505624",
  email: "draditipatil@outlook.com",
  address: "Office No. 4, Dharmaraj Plaza, Old Gangapur Naka, Beside Adgonkar Gold, Nashik – 422005",
  area: "Old Gangapur Naka",
  city: "Nashik",
  state: "Maharashtra",
  pincode: "422005",
  country: "India",
  hours: "Mon–Sat: 10:00 AM – 7:00 PM",
  geo: { latitude: "20.0074655", longitude: "73.7701697" },
};

export const LOCAL_KEYWORDS = [
  "dermatologist in Nashik",
  "best dermatologist in Nashik",
  "skin specialist in Nashik",
  "skin doctor in Nashik",
  "skin clinic in Nashik",
  "dermatology clinic Nashik",
  "best skin clinic in Nashik",
  "cosmetic dermatologist Nashik",
  "skin specialist near Old Gangapur Naka",
  "dermatologist near me",
  "best dermatologist near me",
  "hair transplant in Nashik",
  "laser hair removal Nashik",
  "acne treatment in Nashik",
  "anti aging treatment Nashik",
  "hydrafacial in Nashik",
  "botox in Nashik",
  "dermal fillers in Nashik",
  "skin whitening treatment Nashik",
  "hair loss treatment Nashik",
  "pigmentation treatment Nashik",
  "scar removal treatment Nashik",
  "PRP treatment Nashik",
  "best skin specialist in Nashik",
  "women dermatologist in Nashik",
];

export const BASE_KEYWORDS = [
  "dermatology clinic Nashik",
  "best dermatologist in Nashik",
  "skin specialist Nashik",
  "skin doctor near me",
  "skin care treatment Nashik",
  "hair transplant Nashik",
  "laser treatment Nashik",
  "cosmetic dermatology Nashik",
  "acne scar treatment Nashik",
  "anti aging treatment Nashik",
  "Dr. Aditi Patil dermatologist",
  "Derma Suite clinic Nashik",
];

export function buildOpenGraph({
  title,
  description,
  path = "/",
  type = "website",
  images = ["https://dermasuite.in/logo.png"],
}: {
  title: string;
  description: string;
  path?: string;
  type?: string;
  images?: string[];
}) {
  return {
    title,
    description,
    url: `${SITE.url}${path}`,
    siteName: SITE.name,
    locale: "en_IN",
    type,
    images,
  };
}