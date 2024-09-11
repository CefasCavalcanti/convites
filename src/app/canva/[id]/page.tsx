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
  bg: string
  bgButton: string
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id

  // fetch data
  const product: Convite = await fetch(`https://script.google.com/macros/s/AKfycbzwCeW-ffv4_8AfXdXh4hFptrJ6I4-h2X_2wd2452i1aAQuVeCtwixyVN9eWCN94qnJ/exec?name=${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: product.name,
    description: "Você é nosso convidado especial",
    openGraph: {
      images: [product.previousImages, ...previousImages],
    },
    keywords: ["Convites"],
  }
}

export default async function Form({ params, searchParams }: Props) {
  const id = params.id
  const product: Convite = await fetch(`https://script.google.com/macros/s/AKfycbzwCeW-ffv4_8AfXdXh4hFptrJ6I4-h2X_2wd2452i1aAQuVeCtwixyVN9eWCN94qnJ/exec?name=${id}`, { cache: 'no-cache' }).then((res) => res.json())

  return (
    <main className={`flex bg-black items-center justify-center min-h-screen min-w-fit`}>
      <Image
        className="relative  max-h-screen max-x-fit dark:drop-shadow-[0_0_0.3rem_#ffffff70] object-contain"
        src={product.canvaSite}
        alt="Next.js Logo"
        width={605}
        height={733}
        priority
      />
      <div className=" fixed flex-col backdrop-blur-sm p-2 bg-black/10 inset-x-auto bottom-1 items-center gap-2 justify-center  sm:px-8 px-4  h-50 my-auto rounded-md">

        <div className="flex gap-4 items-center justify-center">
          <Link href={`/form/recusa`}>
            <button className={`h-16 px-5  items-center justify-center flex font-semibold  rounded-md bg-green-950 ${product.bgButton} text-white`} type="button" >
              < LottiePlayer className="h-11 -ml-5" src="https://lottie.host/e7ed314d-d186-48fc-8ea1-bd75f74388d4/WbfHdjYY09.json" />
              Localização
            </button>
          </Link>
          <Link href={`/form/recusa`}>
            <button className={`h-16 px-5  items-center justify-center flex font-semibold rounded-md bg-green-950 ${product.bgButton} text-white`} type="button" >
              < LottiePlayer className="h-24 -ml-20 -mr-16" src="https://lottie.host/4c1ae959-9cc8-4730-9695-f689adac5dd2/tSC7Qjn8dd.json" />
              Confirmar
            </button>
          </Link>
        </div>
        <h1 className="text-white m-auto font-bold text-2xl">Clique para interagir</h1>
      </div>

    </main>
  )
}
