import bannerImg from '../assets/HeaderImage.png'

const Banner = () => {
  return (
    <section className='mt-10 flex justify-between items-center'>
      <div className=''>
        <p className='font-bold'>Branding | Image making</p>
        <h1 className='text-5xl font-bold my-4'>Visual Designer</h1>
        <p>This is template figma file, turned into code using Anima.</p>
        <p>Learn more at AnimaApp.com</p>
        <button className='bg-[#2D2D2D] px-10 py-4 text-white mt-10'>Contact</button>
      </div>
      <div>
        <img src={bannerImg} width={480} height={360} />
      </div>
    </section>
  )
}

export default Banner