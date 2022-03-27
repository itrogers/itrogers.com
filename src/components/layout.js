import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Header from "./header"
import Footer from "./footer"
import classNames from "classnames"

const Layout = ({ children }) => {
  const headlineStyle = "mb-8 font-sans text-cyan-500 font-bold"
  return (
    <div className="bg-gray-900 h-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="container mx-auto text-white">
          <MDXProvider
            components={{
              // Map HTML element tag to React component
              p: props => <p className="mb-8" {...props} />,
              h1: props => (
                <h1
                  className={classNames(headlineStyle, "text-2xl")}
                  {...props}
                />
              ),
              h2: props => (
                <h2
                  className={classNames(headlineStyle, "text-2xl")}
                  {...props}
                />
              ),
              h3: props => <h3 className={headlineStyle} {...props} />,
              h4: props => <h4 className={headlineStyle} {...props} />,
              h5: props => <h5 className={headlineStyle} {...props} />,
              h6: props => <h6 className={headlineStyle} {...props} />,
            }}
          >
            {children}
          </MDXProvider>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
