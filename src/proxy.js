import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {

   const session = await auth.api.getSession({
    headers : await headers()
   }) 
   if (!session) {
    const loginUrl = new URL("/login", request.url);

    loginUrl.searchParams.set("redirect", request.nextUrl.pathname);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: ['/add-idea','/details-idea/:id*' , '/my-ideas' ,'/my-interactions' ] ,
}