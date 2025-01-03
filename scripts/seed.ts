import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses).values([
      { id: 1, title: "Hindi", imageSrc: "In.svg" },
      { id: 2, title: "French", imageSrc: "Fr.svg" },
      { id: 3, title: "Spanish", imageSrc: "Sp.svg" },
      { id: 4, title: "Japaneese", imageSrc: "Jp.svg" },
      { id: 5, title: "Italian", imageSrc: "It.svg" },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 1",
        description: "Learn the basics of Spanish",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      { id: 1, unitId: 1, order: 1, title: "Nouns" },
      { id: 2, unitId: 1, order: 2, title: "Verbs" },
      { id: 3, unitId: 1, order: 3, title: "Verbs" },
      { id: 4, unitId: 1, order: 4, title: "Verbs" },
      { id: 5, unitId: 1, order: 5, title: "Verbs" },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is the "the man"?',
      },
      {
        id: 2,
        lessonId: 1,
        type: "ASSIST",
        order: 2,
        question: '"the man"',
      },
      {
        id: 3,
        lessonId: 1,
        type: "SELECT",
        order: 3,
        question: 'Which one of these is the "robot"?',
      },
      // {
      //     id:2,
      //     lessonId:2,
      //     type:"SELECT",
      //     order:2,
      //     question:'Which one of these is the "the man"?'
      // },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        imageSrc: "/man.svg",
        correct: true,
        text: "aadami",
        audioSrc: "/hi_man.mp3",
      },
      {
        id: 2,
        challengeId: 1,
        imageSrc: "/woman.svg",
        correct: false,
        text: "mahila",
        audioSrc: "/hi_woman.mp3",
      },
      {
        id: 3,
        challengeId: 1,
        imageSrc: "/robot.svg",
        correct: false,
        text: "robot",
        audioSrc: "/hi_robot.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        id: 4,
        challengeId: 2,
        correct: true,
        text: "aadami",
        audioSrc: "/hi_man.mp3",
      },
      {
        id: 5,
        challengeId: 2,
        correct: false,
        text: "mahila",
        audioSrc: "/hi_woman.mp3",
      },
      {
        id: 6,
        challengeId: 2,
        correct: false,
        text: "robot",
        audioSrc: "/hi_robot.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        id: 7,
        challengeId: 3,
        correct: false,
        text: "aadami",
        audioSrc: "/hi_man.mp3",
      },
      {
        id: 8,
        challengeId: 3,
        correct: false,
        text: "mahila",
        audioSrc: "/hi_woman.mp3",
      },
      {
        id: 9,
        challengeId: 3,
        correct: true,
        text: "robot",
        audioSrc: "/hi_robot.mp3",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 4,
        lessonId: 2,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is the "the man"?',
      },
      {
        id: 5,
        lessonId: 2,
        type: "ASSIST",
        order: 2,
        question: '"the man"',
      },
      {
        id: 6,
        lessonId: 2,
        type: "SELECT",
        order: 3,
        question: 'Which one of these is the "robot"?',
      },
      // {
      //     id:2,
      //     lessonId:2,
      //     type:"SELECT",
      //     order:2,
      //     question:'Which one of these is the "the man"?'
      // },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
