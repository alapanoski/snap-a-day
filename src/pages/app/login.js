import Head from "next/head"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Snap A Day</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen mx-auto flex flex-col items-center justify-center gap-4 bg-primary">
        <h1 className="text-4xl text-white">Login</h1>
        <form className="w-96 p-10 flex flex-col justify-center items-center gap-10 bg-white rounded-xl">
          <input type="text" name="username" placeholder="Email"/>
          <input type="password" name="password" placeholder="Password"/>
          <button>New here? Signup</button>
          <button type="submit" className="btn"><a href="/app/">Login</a></button>  
        </form>
      </main>
    </>
  )
}
