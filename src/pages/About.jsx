import { abdul } from "../assets/images"
import { socialMediaAlt } from "../constants"

function About() {
  return (
   <main id="home" className=" min-h-screen padding max-container font-montserrat  text-slate-gray">
    <h1 className="text-[60px] uppercase  font-palanquin font-extrabold absolute pt-1 sm:hidden"> ABOUT ME</h1>
    <div className=" flex flex-col md:flex-row items-stretch md:h-[70vh]">

    <div className="  flex-1 box-border">
        <div className="w-[90%] mx-auto md:aspect-auto lg:aspect-square aspect-square border-2 overflow-hidden rounded-full">

        <img src={abdul}  className=" cover scale-150 translate-y-20 wide:translate-y-28" alt="my face" />
        </div>
    </div>
    <div className="  flex-1 p-4 flex flex-col justify-start items-start md:justify-end md:items-end">
    <h1 className="text-[60px] uppercase  font-palanquin font-extrabold pt-1 max-sm:hidden sm:-translate-x-36 md:-translate-x-60 lg:-translate-x-72 xl:-translate-x-96 wide:-translate-x-[450px] -z-10"> ABOUT ME</h1>

    <p className=" break-words text-sm  ">
        repellat magnam maiores maxime facilis expedita eveniet quisquam, temporibus at aperiam necessitatibus nesciunt laudantium minus illo perspiciatis vitae ea in.
        <br/>
        <br/>
         icta cumque pariatur odio quidem facere culpa non quos praesentium sit, officiis alias enim voluptatem suscipit harum amet neque. Ducimus recusandae assumenda impedit quaerat tenetur fugit. Nesciunt, doloribus voluptatum, necessitatibus recusandae libero odit facilis saepe expedita explicabo, aliquid neque!
    </p>
    </div>

    </div>
    <div className=" flex w-full p-5  justify-center items-center gap-4" >
        {
            socialMediaAlt.map((icon, index) => (
                <a href={icon.href} key={index} className=" p-2 rounded-full bg-slate-gray hover:bg-[#7d7d7d] md:hover:scale-105" target="blank">
                    <img src={icon.src} alt={icon.alt} className=" w-7 object-cover"/>
                </a>

            ))
        }
    </div>

   </main>
  )
}

export default About