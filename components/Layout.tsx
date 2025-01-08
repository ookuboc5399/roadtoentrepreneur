import Head from 'next/head'
import { Header } from './header/header'
import { ReactNode } from 'react'

interface LayoutProps {
  title?: string;
  header?: ReactNode;
  children?: ReactNode;
}

export default function Layout({ title, header, children }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {header || <Header />}
      <div className="">
        <h3 className="my-3 text-primary text-center">
          {title}
        </h3>
        {children}
      </div>
    </div>
  )
}
