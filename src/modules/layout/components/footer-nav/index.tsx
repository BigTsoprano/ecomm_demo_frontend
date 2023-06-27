import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
//import CountrySelect from "../country-select"

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
        <div>
          <Link href="/" className="text-xl-semi uppercase">
            DEMO
          </Link>
        </div>
        <div className="text-small-regular grid grid-cols-2 gap-x-16">
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Categories</span>
            <ul
              className={clsx("grid grid-cols-1 gap-y-2", {
                "grid-cols-2": (collections?.length || 0) > 4,
              })}
            >
              {collections?.map((c) => (
                <li key={c.id}>
                  <Link href={`/collections/${c.id}`}>{c.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Canna</span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <a
                  href="https://canna.01ninjas.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Canna main site
                </a>
              </li>
              <li>
                <a
                  href="https://canna.01ninjas.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="https://canna.01ninjas.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span className="text-xsmall-regular text-gray-500">
          © Copyright 2022 Canna Demo
        </span>
        {/* <div className="min-w-[316px] flex xsmall:justify-end">
          <CountrySelect />
        </div> */}
      </div>
    </div>
  )
}

export default FooterNav
