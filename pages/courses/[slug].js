
import { getAllCourses } from "@content/courses/fetcher";
import { Modal } from "@components/ui/common/index"
import { CourseHero, Keypoints, Curriculum } from "@components/ui/course/index";
import { BaseLayout } from "@components/ui/layout/index";


export default function Course({ course }) {
  return (
    <>

      <div className="py-4">
        <CourseHero
          title={course.title}
          description={course.description}
          image={course.coverImage}
        />
      </div>
      <Keypoints points={course.wsl} />
      <Curriculum
        // isLoading={isLoading}
        locked={true}
      />
      <Modal />
    </>
  );
}

export function getStaticPaths() {
  const { data } = getAllCourses()

  return {
    paths: data.map(c => ({
      params: {
        slug: c.slug
      }
    })),
    fallback: false
  }
}


export function getStaticProps({ params }) {
  const { data } = getAllCourses()
  const course = data.filter(c => c.slug === params.slug)[0]

  return {
    props: {
      course
    }
  }
}

Course.Layout = BaseLayout