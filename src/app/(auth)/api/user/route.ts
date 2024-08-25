import { database } from "@/lib/database";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = body;

    //  Checks if email already exists
    const existingUserbyEmail = await database.user.findUnique({
      where: { email: email },
    });
    if (existingUserbyEmail) {
      return NextResponse.json(
        { user: null, message: "User with this email already exists" },
        { status: 409 }
      );
    }

    //  Checks if username already exists
    const existingUserbyUsername = await database.user.findUnique({
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

    const encryptedPassword = await hash(password, 10); 
    const newUser = await database.user.create({
        data: {
            username, 
            email,
            password: encryptedPassword,
        }
    })

    return NextResponse.json({ user: newUser, message: "User created succesfully"}, {status: 201});
  } catch (error) {}
}
