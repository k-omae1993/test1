import Image from 'next/image'

export default function Card (props) {
  return (
    <>
    <Image
      src={props.src}
      alt={props.alt}
      width={184}
      height={157}
      className=""
    />
    <h2 className="mt-[15px] mb-[15px] text-[#008c8d] font-bold text-[23px] text-center">
        {props.title}
    </h2>
    <p　className="opacity-60 text-left text-[14px] font-semibold tracking-[4px] opacity-80 leading-6 mobile:pr-[20px] mobile:pl-[20px]">
        {props.text}
    </p>
    </>
  )
};

