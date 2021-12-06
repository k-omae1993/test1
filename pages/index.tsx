import styles from '../styles/Home.module.css'

import Fwywd from '../public/introduction/logo.png'
import Hero from '../public/introduction/hero.png'
import About1 from '../public/introduction/about-1.png'
import About2 from '../public/introduction/about-2.png'
import About3 from '../public/introduction/about-3.png'
import Skill from '../public/introduction/Skill.png'
import Value1 from '../public/introduction/value1.png'
import Value2 from '../public/introduction/value2.png'
import Value3 from '../public/introduction/value3.png'
import Future from '../public/introduction/future.png'
import Footer from '../public/introduction/logo_white.png'
import Twitter from '../public/introduction/twitter.png'
import Facebook from '../public/introduction/facebook.png'

import Image from 'next/image'
import Link from "next/link";
import React, {useState} from "react"
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }
  return (
    <>
    {/*--------header---------*/}
    <header className="desktop:flex desktop:h-[90px]">
      <div className="mobile:text-center">
        <Image
        src={Fwywd}
        width={200}
        height={100}
        />
      </div>
      <nav className="desktop:ml-auto desktop:leading-[90px] desktop:flex-nowrap mobile:mt-[-20px] mobile:pb-[15px]">
        <ul className="flex mobile:justify-center">
          <li className="text-[#008c8d] mr-2 font-semibold tracking-[1px] text-[17px]">ABOUT</li>
          <li className="text-[#008c8d] mr-2 font-semibold tracking-[1px] text-[17px]">SKILLS</li>
          <li className="text-[#008c8d] mr-2 font-semibold tracking-[1px] text-[17px]">VALUES</li>
          <li className="text-[#008c8d] mr-2 font-semibold tracking-[1px] text-[17px]">FUTURE</li>
        </ul>
      </nav>
    </header>

    {/*------main------*/}
    <main className="desktop:h-[570px] desktop:flex desktop:justify-between bg-[#6bc2c3] text-center text-white">
      <div className="desktop:w-3/6 desktop:m-auto mobile:text-center">
        <div className="inline-block desktop:text-left desktop:mr-[150px] mobile:text-center mobile:pt-[30px]">
          <h2 className="desktop:text-[43px] desktop:opacity-90 mobile:text-[26px] tracking-[5px] font-semibold mb-4 ">メインタイトル</h2>
          <p className="desktop:text-[28px] mobile:text-[18px] font-bold opacity-80 tracking-[5px]">サブタイトル</p>
        </div>
      </div>
      <div className="desktop:w-3/6 desktop:m-auto mobile:pr-[50px] mobile:pl-[50px] mobile:pt-[50px] mobile:pb-[20px]">
        <Image 
         src={Hero}
         width={500}
         height={400}
         />
      </div>
    </main>

    {/*------背景1------*/}
    <div className="relative  bg-white">
    {/*------values------*/}
      <section>
        <section className="desktop:h-[762px] desktop:bg-about-pattern desktop:bg-cover">
          <div className="desktop:flex desktop:justify-center desktop:mb-12 desktop:items-center mobile:text-center mobile:mb-[20px]">
            <h2 className="desktop:text-2xl desktop:mr-4 mt-12 tracking-widest font-semibold mobile:text-[20px]">私について</h2>
            <a className="text-[#008c8d] font-semibold font-[15px] text-center mt-[45px]">ABOUT</a>
          </div>
          <div className="desktop:flex desktop:justify-center mobile:text-center ">
            <div className="desktop:w-[310px] desktop:text-center mobile:mb-[25px]">
              <Image
              src={About1}
              width={184}
              height={157}
              />
              <h2 className="mt-[15px] mb-[15px] text-[#008c8d] font-bold text-[23px] text-center">趣味</h2>
              <p　className="opacity-60 text-left text-[14px] font-semibold tracking-[4px] opacity-80 leading-6 mobile:pr-[20px] mobile:pl-[20px]">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
            <div className="desktop:w-[310px] desktop:text-center mobile:mb-[25px]">
              <Image
              src={About2}
              width={184}
              height={157}
              />
              <h2 className="mt-[15px] mb-[15px] text-[#008c8d] font-bold text-[23px] text-center">好きな食べ物</h2>
              <p　className="opacity-60 text-left text-[14px] font-semibold tracking-[4px] opacity-80 leading-6 mobile:pr-[20px] mobile:pl-[20px]">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
            <div className="desktop:w-[310px] desktop:text-center mobile:mb-[25px]">
              <Image
              src={About3}
              width={184}
              height={157}
              />
              <h2 className="mt-[15px] mb-[15px] text-[#008c8d] font-bold text-[23px] text-center">性格</h2>
              <p　className="opacity-60 text-left text-[14px] font-semibold tracking-[4px] opacity-80 leading-6 mobile:pr-[20px] mobile:pl-[20px]">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>

    {/*------skills------*/}
    <section className="desktop:bg-skills-pattern desktop:mt-[-200px] desktop:h-[690px] mobile:bg-phone-skills-pattern mobile:bg-cover relative">
      {/*------skills-mobile------*/}
      <div className="desktop:hidden ">
        <div className="text-center pt-[40px]">
          <h2 className="font-bold tracking-[6px] opacity-70 text-[25px]">スキル</h2>
          <p className="text-[#008c8d] text-[15px] font-bold  inline-flex tracking-[1px] items-center">SKILLS</p>
        </div>
        <div className="p-[20px]">
          <Image 
          src={Skill}
          />
        </div>
        <div className="pr-[20px] pl-[20px] pb-[30px]">
          <p　className="tracking-widest text-sm opacity-70 leading-6 font-semibold opacity-50" >
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p> 
        </div>
        <div className="pl-8 pr-8 pb-16">
          <div className="rounded bg-white p-8">
            <h2 className="text-[#008c8d] font-semibold tracking-[1px] opacity-80">SKILLSKILL</h2>
            <ul className="flex ">
              <li className="w-11/12 mr-4">
                <div className="relative pt-1">
                  <div className="overflow-hidden h-[1rem] mb-4 text-xs flex rounded bg-green-200">
                    <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                  </div>
                </div>
              </li>
              <li className="w-1/12 text-[#008c8d] font-semibold">40%</li>
            </ul>
            <h2 className="text-[#008c8d] font-semibold tracking-[1px] opacity-80">SKILLSKILL</h2>
            <ul className="flex ">
              <li className="w-11/12 mr-4">
                <div className="relative pt-1">
                  <div className="overflow-hidden h-[1rem] mb-4 text-xs flex rounded bg-green-200">
                    <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                  </div>
                </div>
              </li>
              <li className="w-1/12 text-[#008c8d] font-semibold">40%</li>
            </ul>
            <h2 className="text-[#008c8d] font-semibold tracking-[1px] opacity-80">SKILLSKILL</h2>
            <ul className="flex ">
              <li className="w-11/12 mr-4">
                <div className="relative pt-1">
                  <div className="overflow-hidden h-[1rem] mb-4 text-xs flex rounded bg-green-200">
                    <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                  </div>
                </div>
              </li>
              <li className="w-1/12 text-[#008c8d] font-semibold">40%</li>
            </ul>
            <h2 className="text-[#008c8d] font-semibold tracking-[1px] opacity-80">SKILLSKILL</h2>
            <ul className="flex ">
              <li className="w-11/12 mr-4">
                <div className="relative pt-1">
                  <div className="overflow-hidden h-[1rem] mb-4 text-xs flex rounded bg-green-200">
                    <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                  </div>
                </div>
              </li>
              <li className="w-1/12 text-[#008c8d] font-semibold">40%</li>
            </ul>
          </div>
        </div>
      </div>
      {/*------skills-desktop------*/}
      <div className="mobile:hidden flex pt-[100px]">
        <div className="w-1/2 text-right mt-[60px] mr-8">
          <Image 
          src={Skill}
          />
        </div>
        <div className="w-1/2 text-left mr-[80px]">
          <div className="flex">
            <h2 className="font-bold tracking-[6px] opacity-70 text-[25px] mr-[10px]">スキル</h2>
            <p className="text-[#008c8d] text-[15px] font-bold  inline-flex tracking-[1px] items-center">SKILLS</p>
          </div>
          <div className="mr-28 mt-4 w-9/12 mb-4">
            <p　className="tracking-widest text-sm opacity-70 leading-6 font-semibold opacity-50" >
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p> 
          </div>
          <div className="w-9/12 rounded bg-white p-8">
            <h2 className="text-[#008c8d] font-semibold tracking-[1px] opacity-80">SKILLSKILL</h2>
            <ul className="flex ">
              <li className="w-11/12 mr-4">
                <div className="relative pt-1">
                  <div className="overflow-hidden h-[1rem] mb-4 text-xs flex rounded bg-green-200">
                    <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                  </div>
                </div>
              </li>
              <li className="w-1/12 text-[#008c8d] font-semibold">40%</li>
            </ul>
            <h2 className="text-[#008c8d] font-semibold tracking-[1px] opacity-80">SKILLSKILL</h2>
            <ul className="flex ">
              <li className="w-11/12 mr-4">
                <div className="relative pt-1">
                  <div className="overflow-hidden h-[1rem] mb-4 text-xs flex rounded bg-green-200">
                    <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                  </div>
                </div>
              </li>
              <li className="w-1/12 text-[#008c8d] font-semibold">40%</li>
            </ul>
            <h2 className="text-[#008c8d] font-semibold tracking-[1px] opacity-80">SKILLSKILL</h2>
            <ul className="flex ">
              <li className="w-11/12 mr-4">
                <div className="relative pt-1">
                  <div className="overflow-hidden h-[1rem] mb-4 text-xs flex rounded bg-green-200">
                    <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                  </div>
                </div>
              </li>
              <li className="w-1/12 text-[#008c8d] font-semibold">40%</li>
            </ul>
            <h2 className="text-[#008c8d] font-semibold tracking-[1px] opacity-80">SKILLSKILL</h2>
            <ul className="flex ">
              <li className="w-11/12 mr-4">
                <div className="relative pt-1">
                  <div className="overflow-hidden h-[1rem] mb-4 text-xs flex rounded bg-green-200">
                    <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                  </div>
                </div>
              </li>
              <li className="w-1/12 text-[#008c8d] font-semibold">40%</li>
            </ul>
          </div>
        </div>
      </div> 
    </section>

    {/*------背景2------*/}
    <div className="desktop:h-[280px] relative  bg-white">
    {/*------values------*/}
      <section>
        <div className="desktop:flex desktop:justify-center desktop:items-center mobile:text-center">
          <h2 className="text-2xl tracking-widest font-semibold mt-4 desktop:mr-4">価値観</h2>
          <a className="text-[#008c8d] font-semibold font-[15px] text-center mt-4">VALUES</a>
        </div>
        <div className="desktop:flex desktop:justify-center desktop:mt-12 mobile:mt-[30px]">
          <div className="desktop:w-[330px] desktop:h-[450px] bg-white desktop:rounded-bl-md">
            <div className="text-center">
              <Image
              src={Value1}
              />
            </div>
            <h2 className="desktop:mt-8 mobile:mt-4 text-center font-bold opacity-80">価値観01</h2>
            <p className="p-[25px] text-[14px] tracking-[1.5px] font-semibold leading-7 opacity-70">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
          <div className="desktop:h-[450px] desktop:w-[10px] desktop:bg-white">
            <div className="desktop:bg-green-500 desktop:p-auto desktop:w-[2px] desktop:h-[400px] desktop:opacity-20"></div>
          </div>
          <div className="desktop:w-[330px] desktop:h-[450px] desktop:bg-white">
            <div className="text-center">
              <Image
              src={Value2}
              />
            </div>
            <h2 className="desktop:mt-8 mobile:mt-4 text-center font-bold opacity-80">価値観02</h2>
            <p className="p-[25px] text-[14px] tracking-[1.5px] font-semibold leading-7 opacity-70">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
          <div className="desktop:h-[450px] desktop:w-[10px] desktop:bg-white">
            <div className="desktop:bg-green-500 desktop:p-auto desktop:w-[2px] desktop:h-[400px] desktop:opacity-20"></div>
          </div>
          <div className="desktop:w-[330px] desktop:h-[450px] bg-white rounded-br-md">
            <div className="text-center">
              <Image
              src={Value3}
              />
            </div>
            <h2 className="desktop:mt-8 mobile:mt-4 text-center font-bold opacity-80">価値観03</h2>
            <p className="p-[25px] text-[14px] tracking-[1.5px] font-semibold leading-7 opacity-70">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
      </section>
    </div>

    {/*------future------*/}
    <section className="desktop:bg-future-pattern desktop:h-[626px] mobile:bg-phone-future-pattern bg-cover">
      {/*------future-mobile------*/}
      <div className="desktop:hidden text-center mt-[-200px]">
        <div className="pt-[250px] mb-4">
          <h2 className="text-2xl tracking-widest font-semibold mb-2">3年後にやりたいこと</h2>
          <a className="text-[#008c8d] font-semibold">FUTURE</a>
        </div>
        <p className="pr-4 pl-4 leading-7 text-[14px] font-semibold opacity-60 tracking-[1px] text-left">
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <div className="mt-4 mb-[-10px]">
          <Image 
          src={Future}
          />
        </div>
      </div>
      {/*------future-desktop------*/}
      <div className="mobile:hidden flex justify-center pt-[300px]">
        <div className="w-1/2 text-left mt-[60px]">
          <div className="flex items-center pl-[220px] mb-4">
              <h2 className="text-2xl tracking-widest font-semibold mr-4">3年後にやりたいこと</h2>
              <a className="text-[#008c8d] font-semibold">FUTURE</a>
            </div>
            <p className="pl-[220px] leading-7 text-[14px] font-semibold opacity-60 tracking-[1px]">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        <div className="w-1/2 text-left ml-12 mt-[40px]">
          <Image 
          src={Future}
          />
        </div>
      </div>
    </section>

    {/*--------footer---------*/}
    <footer className="bg-[#262c3a] text-[white]">
      <div className="desktop:hidden">
        <div className="flex justify-center pt-[30px] text-[15px]">
          <a className="mr-4">お問い合わせ</a>
          <a>助成金について</a>
        </div>
        <div className="flex justify-center pt-[10px] text-[15px]">
          <a className="mr-4">特定商取引法に基づく表記</a>
          <a>プライバシーポリシー</a>
        </div>
      </div>
      <div className="mobile:hidden">
        <div className="flex justify-center items-center pt-[40px]">
          <a className="text-white text-[10px] opacity-80 tracking-widest font-semibold">CREATED BY</a>
        </div>
      </div>
      <div className="mobile:mt-12 mt-16 text-center">
        <Image
        src={Footer}
        width={100}
        height={130}
        />
      </div>
      <div className="flex justify-center mt-8">
        <div className="opacity-80 mr-4">
          <Image
          src={Twitter}
          width={20}
          height={20}
          />
        </div>
        <div className="opacity-80">
          <Image
          src={Facebook}
          width={20}
          height={20}
          />
        </div>
      </div>
      <div className="pb-[30px]">
        <p className="text-[7px] mt-8 text-white font-medium opacity-80 tracking-[1px] text-center">@2021 KIKAGAKU</p>
      </div>
    </footer>
    </>
  )
}