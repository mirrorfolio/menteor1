import { z } from "zod";
const WaitingListFormSchema = z
  .object({
    name: z.string().min(1, { message: "Please enter your name" }).default(""),
    email: z
      .string()
      .email({ message: "Please enter a valid email address" })
      .default(""),
    phoneNumber: z
      .string()
      .min(1, { message: "Please enter your phone number" })
      .default(""),
    discoveredFrom: z
      .enum([
        "",
        "Product Hunt",
        "Google",
        "Twitter",
        "LinkedIn",
        "Instagram",
        "Website",
        "Word of Mouth/ Refferal",
        "other",
      ])
      .default(""),
    otherDiscoveredFrom: z.string().optional().default(""),
    getCallBack: z.boolean().default(false).optional(),
  })
  .refine(
    (data) => {
      if (data.discoveredFrom === "other") {
        return data.otherDiscoveredFrom;
      }
      return true;
    },
    {
      path: ["otherDiscoveredFrom"],
      message: "Please Specify How came to know about us",
    }
  )
  .refine(
    (data) => {
      if (data.discoveredFrom === "") {
        return false;
      }
      return true;
    },
    {
      path: ["discoveredFrom"],
      message: "Please choose an option, or specify where you found us",
    }
  );

export { WaitingListFormSchema };
