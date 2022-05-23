import Image from "next/image"
import Link from "next/link"


export default function List({ courses, children }) {
  return (
    <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
      {courses.map(course =>
        <div
          key={course.id}
          className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="flex h-full">
            <div className="flex-1 h-full next-image-wrapper">
              <Image
                className="object-cover"
                src={course.coverImage}
                layout="fixed"
                width="200"
                height="230"
                alt={course.title}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {course.type}
              </div>
              <Link href={`/courses/${course.slug}`}>
                <a
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                  {course.title}
                </a>
              </Link>
              <p className="mt-2 text-gray-500">
                {course.description.substring(0, 70)}...
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
