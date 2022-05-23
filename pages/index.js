import { Hero, Breadcrumbs } from "@components/ui/common/index"
import { CourseList } from "@components/ui/course/index"
import { BaseLayout } from "@components/ui/layout/index"
import { getAllCourses } from "@content/courses/fetcher"
import { useWeb3 } from "@components/providers"
import Web3 from "web3"
export default function Home({ courses }) {


  return (
    <>
      <Hero />
      {/* {JSON.stringify(courses)} */}
      <CourseList courses={courses} />
    </>
  )
}

export function getStaticProps() {
  const { data } = getAllCourses()
  return {
    props: {
      courses: data
    }
  }
}

Home.Layout = BaseLayout