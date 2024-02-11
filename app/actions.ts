
"use server";
import { PrismaClient } from "@prisma/client";
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

    return createdUser.name;
  } catch (error) {
    console.log(error);
    return error;
  }
}
