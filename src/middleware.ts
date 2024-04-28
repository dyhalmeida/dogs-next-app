import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value
  const isAutheticated = token ? true : false

  if (!isAutheticated && req.nextUrl.pathname.startsWith('/account')) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (isAutheticated && req.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/account', req.url))
  }

  return NextResponse.next()
}

/**
 * `config` define quais caminhos de URL devem ser tratados por este middleware.
 * Ele especifica que este middleware deve ser executado para URLs que comecem
 * com '/account' ou '/login', seguido de qualquer caminho adicional (:path*).
 * Isso permite que o middleware seja aplicado a múltiplos caminhos de URL no Next.js.
 */
export const config = {
  matcher: ['/account/:path*', '/login/:path*'],
}
