import Image from "next/image"
import Link from "next/link"

const CustomButton = ({link, name}:{link:string, name:string}) => {
    return (
        <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href={link}
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        {name}
      </Link>
    )
}

export default CustomButton