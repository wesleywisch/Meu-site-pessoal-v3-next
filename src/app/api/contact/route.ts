import { NextResponse } from "next/server";
import axios from "axios";
import { z } from "zod";

const WEBHOOK_URL = process.env.WEBHOOK_URL!

const bodySchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
})

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, message, name } = bodySchema.parse(body)

    const mensagemData = {
      embeds: [
        {
          "type": "rich",
          "title": `Mensagem de contato`,
          "description": "",
          "color": 0x4983f5,
          "fields": [
            {
              "name": `Nome`,
              "value": name,
              "inline": true
            },
            {
              "name": `E-mail`,
              "value": email,
              "inline": true
            },
            {
              "name": `Mensagem`,
              "value": message,
            }
          ]
        }
      ]
    }

    await axios.post(WEBHOOK_URL, mensagemData)

    return NextResponse.json({
      message: 'Mensagem enviada com sucesso!'
    })
  } catch (err) {
    return NextResponse.error();
  }
}