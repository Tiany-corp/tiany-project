import Image from "next/image";

type ProjectCardsProps = {
    title: string;
    desc: string;
    image: string;
}

export default function ProjectCards({
    title,
    desc,
    image
}: ProjectCardsProps) {
    return (
        <div className="grid grid-cols-2 ">
            {/*Ca ca me met une grid avec des colones à tailles variable ?*/}
            {/*Image*/}
            <Image
                src={image}
                alt={title}
                width={422}
                height={134}
                sizes="(max-width: 768px) 90vw, 45vw"
                className="object-cover h-full"
            />
            {/*Texte*/}
            <div className="flex flex-col gap-2 p-3">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm opacity-80">{desc}</p>
            </div>
        </div>
    )
}