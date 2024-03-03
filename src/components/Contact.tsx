import contactBG from "../assets/images/a-group-of-oranges-z5rclcfa.jpeg"
const Contact= () => {
  return (
    <div className="relative mt-[5vw]">
      <img src={contactBG} alt="" />
      <div className="flex sm:gap-[1vw] gap-[2vw] absolute h-full items-center top-0 left-0 right-0 w-full justify-center">
        <button className="bg-main py-[1vw] px-[4vw] sm:py-[1vw] sm:px-[4vw] text-title rounded-md hover:bg-transparent hover:text-main border border-main active:text-orange-500 active:border-orange-500 transition-all duration-300  text-white font-lalezar">ارتباط با ما</button>
        <button className="bg-main py-[1vw] px-[4vw] sm:py-[1vw] sm:px-[4vw]  text-title rounded-md hover:bg-transparent hover:text-main border border-main active:text-orange-500 active:border-orange-500 transition-all duration-300  text-white font-lalezar">فروشگاه</button>  
      </div>
      
    </div>
  )
}

export default Contact;