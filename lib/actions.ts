"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface formData {
  name: string;
  email: string;
  phoneNumber: string;
  discoveryMethod: string;
  exceptionalDiscovery: string;
  getCallBack: boolean;
}
export async function addToWaitingList(data: formData) {
  try {
    const createdUser = await prisma.userInWaitingList.create({ data });

    return createdUser.name;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// practice code
// export async function getUser(id: string,) {
//   try {
//     const user = await prisma.userInWaitingList.findUniqueOrThrow({ where: { id } });
//     if(!user) {
//       const error = new Error("User not found");
//       error.name = "User not found";
//       error.stack = "User not found";
//       error.message = "User not found";
//       console.log(error);
//       return error

//     }
//       return user;

//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }
