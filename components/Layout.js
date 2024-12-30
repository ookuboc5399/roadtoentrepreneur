import Head from 'next/head'
import {Header} from './header/header'


export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header header={props.header} />
      <div className="">
        <h3 className="my-3 text-primary text-center">
          {props.title}</h3>
          {props.children}
      </div>

    </div>
  )
}