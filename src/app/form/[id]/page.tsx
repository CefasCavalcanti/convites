type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export default function Form({ params, searchParams }: Props) {
  let src = "";
  switch (params.id) {
    case "frauda-g":
      src = "https://docs.google.com/forms/d/e/1FAIpQLScZrit9jmMEw_cT7gkkXSWu8oOCtHp5Ee7IFjd3caLIHd_kzA/viewform?embedded=true"
      break
    case "frauda-m":
      src = "https://docs.google.com/forms/d/e/1FAIpQLSfM3X0IA-5GoZnYm34OBpVF2sLG7VRpmshvWUqV1K_HVmKhAA/viewform?embedded=true"
      break
    case "frauda-p":
      src = "https://docs.google.com/forms/d/e/1FAIpQLSeBdzsA6-blhALd0qEc69B9TAKFOYxFRhT0Ew3gPi3VrDmqdA/viewform?embedded=true"
      break
    case "recusa":
      src = "https://docs.google.com/forms/d/e/1FAIpQLScXl4zCC3BV99mS0QHJo8yFPMzJemNcn9oVTlO6n0s5t-i9BQ/viewform?embedded=true"
      break
    default:
  }
  return (
    <main className="flex items-center justify-center h-screen w-screen">
      <iframe className="w-screen h-screen" src={src} width="640" height="700" >Carregando…</iframe>
    </main>)
}
