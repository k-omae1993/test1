export default function Main_Title(props) {
    const title = props.title;
    const sub_title = props.sub_title;
    return (
        <>
            <h2 className="desktop:text-2xl desktop:mr-4 mt-12 tracking-widest font-semibold mobile:text-[20px]">
                {title}
            </h2>
            <a className="text-[#008c8d] font-semibold font-[15px] text-center mt-[45px]">
                {sub_title}
            </a>
        </>
    )
}
