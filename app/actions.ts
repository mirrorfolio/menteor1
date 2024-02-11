
"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();

interface FormDataFields {
  name: string;
  email: string;
  phoneNumber: string;
  discoveryMethod: string;
  exceptionalDiscovery: string;
  getCallBack: boolean;
}

export  async function addToWaitingList(formData: FormDataFields) {
  try {
   

    const createdUser = await prisma.userInWaitingList.create({
      data: {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        discoveryMethod: formData.discoveryMethod,
        exceptionalDiscovery: formData.exceptionalDiscovery,
        getCallBack: formData.getCallBack,
      },
    });
    revalidatePath("/join-waiting-list/waiting-list-confirmed/" + createdUser.id);
    
    return createdUser.name;
  } catch (error) {
    console.log(error);
    return error;
  }
}
