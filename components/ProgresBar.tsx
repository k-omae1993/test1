export default function ProgresBar (props) {
    return (
        <>
        <h2 className="text-[#008c8d] font-semibold tracking-[1px] opacity-80">SKILLSKILL</h2>
            <ul className="flex ">
              <li className="w-11/12 mr-4">
                <div className="relative pt-1">
                  <div className="overflow-hidden h-[1rem] mb-4 text-xs flex rounded bg-green-200">
                    <div style={{ width: props.params }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                  </div>
                </div>
              </li>
              <li className="w-1/12 text-[#008c8d] font-semibold">{props.params}</li>
            </ul>
        </>
    )
}