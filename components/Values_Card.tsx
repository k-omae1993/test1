import Image from "next/image"

export default function Values_Card (props) {
    return (
        <>
        <div className="text-center">
            <Image
            src={props.src}
            />
            </div>
            <h2 className="desktop:mt-8 mobile:mt-4 text-center font-bold opacity-80">
                {props.title}
            </h2>
            <p className="p-[25px] text-[14px] tracking-[1.5px] font-semibold leading-7 opacity-70">
                {props.text}
            </p>
        </>
    )
}
