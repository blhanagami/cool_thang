import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";


type Image = {
  id: number;
  name: string;
  url: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date | null;
}


export async function getMyImages(): Promise<Image[] | null> {
    const user = auth();

    if (!user.userId) {
      /* Error = handles unusual behavior or violations,
      null to handle missing data but make operations still carry on
      */
     
      // return null;
      throw new Error("Unauthorized");
    };


    const images = await db.query.images.findMany({
        where: (model, { eq }) => eq(model.userId, user.userId),
        orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
}