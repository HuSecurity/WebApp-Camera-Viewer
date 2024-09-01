import prisma from "@/lib/database";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import * as z from "zod";

// Define a schema for user input validation
const userSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = userSchema.parse(body);

    console.log("e");

    //  Checks if email already exists
    const existingUserbyEmail = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUserbyEmail) {
      return NextResponse.json(
        { user: null, message: "User with this email already exists" },
        { status: 409 }
      );
    }

    console.log("ee");

    //  Checks if username already exists
    const existingUserbyUsername = await prisma.user.findUnique({
      where: { username: username },
    });
    if (existingUserbyUsername) {
      return NextResponse.json(
        { user: null, message: "User with this username already exists" },
        { status: 409 }
      );
    }

    // //  Checks if password already exists
    // const existingUserbyPassword = await database.user.findUnique({
    //     where: { password: password },
    //   });
    //   if (existingUserbyPassword) {
    //     return NextResponse.json(
    //       { user: null, message: "User with this password already exists!! You guys can't use the same passwords silly" },
    //       { status: 409 }
    //     );
    //   }

    console.log("eee");

    // Encrypts password using BCrypt
    const encryptedPassword = await hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: encryptedPassword,
      },
    });

    // Sets password to newpassword which is linked to new user
    const { password: newUserPassword, ...rest } = newUser;

    // Display created succesfully in console
    return NextResponse.json(
      { user: rest, message: "User created succesfully" },
      { status: 201 }
    );
    // If error is caught a console log appears with error
  } catch (error) {
    console.log(error);

    // Returns status 500 upon error
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
