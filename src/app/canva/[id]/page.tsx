import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LottiePlayer } from "@/app/components/lottie";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

type Convite = {
  id: string,
  name: string,
  previousImages: string
  canvaSite: string
  title: string
  description: string
  local: string
  form: string
  bgButton: string
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id

  // fetch data
  const product: Convite = await fetch(`https://script.google.com/macros/s/AKfycbxw-gt0T8NJT2_fjZB01CdYYwuXplfwoA6x06g0rzR6Nbps1ifepEAqz18iocuMWHLG/exec?name=${id}`, { cache: 'no-cache' }).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [product.previousImages, ...previousImages],
    },
    keywords: ["Convites"],
  }
}

export default async function Form({ params, searchParams }: Props) {
  const id = params.id
  const product: Convite = await fetch(`https://script.google.com/macros/s/AKfycbxw-gt0T8NJT2_fjZB01CdYYwuXplfwoA6x06g0rzR6Nbps1ifepEAqz18iocuMWHLG/exec?name=${id}`, { cache: 'no-cache' }).then((res) => res.json())

  return (
    <main className={`flex flex-col bg-black items-center justify-center min-h-screen min-w-fit`}>
      <Image
        className="relative max-x-fit dark:drop-shadow-[0_0_0.3rem_#ffffff70] object-contain"
        src={product.canvaSite}
        alt="Next.js Logo"
        width={605}
        height={733}
        priority
      />
      {/* <iframe className="min-h-max overflow-visible" src={`${product.form}`} height={product.bgButton} width="605" >Carregando…</iframe> */}
      <div className="
        max-w-full 
        fixed 
        flex-col 
        backdrop-blur-sm 
        bg-black/10 
        inset-x-auto 
        bottom-1 
        items-center 
        gap-2 
        justify-center 
        sm:px-2 
        px-1  
        my-auto 
        rounded-md
      ">

        <div className="flex h-full p-1 w-full gap-4 items-center justify-center">
          <Link href={`${product.local}`}>
            <button className={`px-1 w-40 bg-green-800  items-center justify-center flex font-semibold rounded-md text-white`} type="button" >
              < LottiePlayer className="h-10 -mx-4" src="https://lottie.host/e7ed314d-d186-48fc-8ea1-bd75f74388d4/WbfHdjYY09.json" />
              Localização
            </button>
          </Link>
          <Link href={`${product.form}`}>
            <button className={`px-2 w-32 items-center justify-center bg-green-800 flex font-semibold rounded-md text-white`} type="button"  >
              < LottiePlayer className="h-16 -ml-14 -my-3 -mr-12" src="https://lottie.host/4c1ae959-9cc8-4730-9695-f689adac5dd2/tSC7Qjn8dd.json" />
              Confirmar
            </button>
          </Link>
        </div>
        <h1 className="text-white m-auto font-bold">Clique para interagir</h1>
      </div>
    </main>
  )
}
