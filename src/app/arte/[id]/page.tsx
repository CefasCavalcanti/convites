import Image from "next/image"
import Link from 'next/link'
import { ButtonMap } from "./button_map.component"
// import type { Metadata, ResolvingMetadata } from 'next'
type PresentProps = {
  subtutle: string
  size: string
  src: string
}

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const id = params.id

//   const previousImages = (await parent).openGraph?.images || []

//   return {
//     title: id,
//     description: "Você é nosso convidado especial",
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   }
// }

export default function Page({ params, searchParams }: Props) {

  const id = params.id
  let fralda: PresentProps = { src: "", subtutle: "", size: "" };

  switch (params.id) {
    case "frauda-g":
      fralda = { subtutle: "Fralda Huggies Supreme Care", size: "G", src: "/images/frauda-p.jpg" }

      break
    case "frauda-m":
      fralda = { subtutle: "Fralda Huggies Supreme Care", size: "M", src: "/images/frauda-p.jpg" }
      break
    case "frauda-p":
      fralda = { subtutle: "Fralda Huggies Supreme Care", size: "P", src: "/images/frauda-p.jpg" }
      break
    default:
  }
  return (
    <div className="h-screen w-screen flex items-center">
      <div className="bg-gray-200 h-screen w-screen flex absolute z-0">
        <div className="bg-[#c8d8e6] h-screen w-1/2" />
        <div className="bg-[#fbced0] h-screen w-1/2" />
      </div>
      <main className="rounded-md overflow-y-scroll p-4 sm:p-4 sm:px-4 px-1 relative mx-auto flex h-[98vh] flex-col items-center justify-between bg-white sm:max-w-screen-sm">
        <Image
          className="relative  dark:drop-shadow-[0_0_0.3rem_#ffffff70] object-contain"
          src="/images/onvitebg.png"
          alt="Next.js Logo"
          width={605}
          height={733}
          priority
        />

        <ButtonMap />
        <div className="flex gap-4 mt-3 p-3 rounded-md border-2 border-[#926751]">
          <div className=" flex flex-col  gap-1 items-start justify-center">
            <h1 className="text-[#926751] font-bold text-2xl">Presente:</h1>
            <h1 className="text-[#926751] font-bold ">
              {fralda.subtutle} <span className="font-bold text-2xl">{fralda.size}</span>
            </h1>
          </div>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] object-contain"
            src={fralda.src}
            alt="Next.js Logo"
            width={80}
            height={80}
            priority
          />
        </div>
        <div className=" flex flex-col items-center gap-2 justify-center  sm:px-8 px-4  h-50 my-auto rounded-md">
          <h1 className="text-[#926751] font-bold text-2xl">Confirme sua presença</h1>
          <div className="flex flex-wrap gap-4 items-center">
            <Link className=" mx-auto font-semibold rounded-md" href={`/form/recusa`}>
              <button className="h-10 px-6 mx-auto font-semibold rounded-md bg-red-500 text-white" type="button" >Não poderei ir 😔</button>
            </Link>
            <Link className=" mx-auto font-semibold rounded-md" href={`/form/${id}`}>
              <button className="h-10 px-6 mx-auto font-semibold rounded-md bg-green-400 text-white" type="button">Vou sim, cuida! 😍</button>
            </Link>
          </div>
        </div>
      </main >
    </div>
  );
}