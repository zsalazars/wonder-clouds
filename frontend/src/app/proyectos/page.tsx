import ProjectsList from "@/components/public/nosotros/ProjectsList"
import Breadcrumb from "@/components/public/ui/Breadcrumb"

const Proyectos = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-12">
        <h1 className="text-3xl lg:text-4xl font-semibold text-center">Proyectos</h1>
        <div className="mt-4">
          <Breadcrumb />
        </div>
      </div>
      <ProjectsList />
    </>
  )
}

export default Proyectos